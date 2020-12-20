// import initialStates from './initialStates'
// const Projects = initialStates.Projects

let Projects = JSON.parse(localStorage.getItem("Projects")) || []

if(Projects === []){
  let Projects = []
  localStorage.setItem("Projects", JSON.stringify(Projects));
}



const ProjectReducer = (state=Projects,action) => {
    switch(action.type){
        case 'ADD_PROJECT':
          localStorage.setItem("Projects", JSON.stringify([...action.Projects, action.newProject]));
          return [...action.Projects, action.newProject]
        case 'REMOVE_PROJECT':
          let rest = Projects.slice()
          rest.splice(action.id,1)
          localStorage.setItem("Projects", JSON.stringify(rest))
          Projects = JSON.parse(localStorage.getItem("Projects"))
          return rest
        default:
          return state
    }
}

export default ProjectReducer