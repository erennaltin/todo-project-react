import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import InboxHeader from './InboxHeader'

function AddTodo() {

    const dispatch = useDispatch()
    const projects = useSelector(state => state.Projects)
    const todos = useSelector(state => state.Todos)

    const [mode,setMode] = useState('standart');

    useEffect(() => {
        if(todos.length === 0){
            setMode('newProject')
        }
    },[todos.length])


    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    today = yyyy +'-'+mm+'-'+dd



    const changeMode = (e) => {
        if(mode ==='newProject') {
            setMode('standart')
        }
        else if(e.target.value === 'New'){
            setMode('newProject')
        }
    }

    return (
        <div >
            <InboxHeader title='Add Todo' />
            <form className="addTodoPage">
                <div className="ProjectSelect">
                <label> Select Project </label>
                {mode === 'standart' ? <select id="newTodoProject"  onChange={(e) => changeMode(e)} name="projects">
                {projects.map((value,index) => {
                    return <option key={index} value={value.id}> {value.title} </option>
                })}
                <option value='New'> New Project</option>
            </select> : <div className="addProject">
            <input type="text" placeholder="For cancel, submit blank"/>
            <button onClick={(e) => {
                e.preventDefault();
                if(e.target.previousSibling.value === ''){
                    changeMode()
                }
                else{
                    dispatch({type:'ADD_PROJECT',Projects: projects, newProject: {id: projects.length, title: e.target.previousSibling.value}})
                    changeMode()
                }
            }} > Submit </button>
        </div>}
        </div>
                <div className="NameInput" >
                    <label> Todo Name </label>
                    <input type="text" id="newTodoDescription" />
                </div>
                <div className="CategoryInput">
                <label> Todo Category </label>
                    <select id="newTodoCategory">
                        <option value="Today"> Today</option>
                        <option value="Upcoming"> Upcoming </option>
                    </select>
                </div>
                <div className="DateInput">
                    <label > Application Date </label>
                    <input id="newTodoDate" type="date" defaultValue={today} />
                </div>
                <input type="submit" value="Create Todo!" onClick={(e) => {
                    e.preventDefault()
                    dispatch({type:'ADD_TODO', todoList:todos, newTodo: {
                        project_id: parseInt(document.querySelector("#newTodoProject").value),
                        self_id: todos.length,
                        description: document.querySelector("#newTodoDescription").value,
                        category: document.querySelector("#newTodoCategory").value,
                        date: document.querySelector("#newTodoDate").value,
                        svg: 'Element2',
                        actual: false,
                        isCompleted: false,
                        detail: ''
                    }})
                }} />
            </form>
        </div>
    )
}

export default AddTodo
