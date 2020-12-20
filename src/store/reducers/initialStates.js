// const initialStates = { todos : [{project_id:0,
//     self_id: 0,
//     description:"How to control Reducers",
//     category: 'Today',
//     date: '19.12.2020',
//     svg: 'Element2',
//     actual: false,
//     isCompleted: false,
//     detail: 'It is very hard to write that without an api! :/'},
//     {project_id:0,
//     self_id: 1,
//     description:"Create own Reducers",
//     category: 'Today',
//     date: '19.12.2020',
//     svg: 'Element2',
//     actual: false,
//     isCompleted: false,
//     detail: 'It is very hard to write that without an api! :/'},
//     {project_id:0,
//     self_id: 2,
//     description:"Create own Actions",
//     category: 'Today',
//     date: '19.12.2020',
//     svg: 'Element2',
//     actual: false,
//     isCompleted: true,
//     detail: 'It is very hard to write that without an api! :/'},
//     {project_id:0,
//     self_id: 3,
//     description:"Update the application",
//     category: 'Today',
//     date: '19.12.2020',
//     svg: 'Element2',
//     actual: false,
//     isCompleted: false,
//     detail: 'It is very hard to write that without an api! :/'},
//     {project_id:1,
//     self_id: 4,
//     description:"Let's Learn Functions",
//     category: 'Upcoming',
//     date: '19.12.2020',
//     svg: 'Element2',
//     actual: false,
//     isCompleted: true,
//     detail: 'It is very hard to write that without an api! :/'}],
// Projects : [{id:0,
//         title: 'Learning Redux'},
//       {id:1,
//         title: 'Learning React'},
//       {id:2,
//         title: 'Doing a To-Do Application'}]
// }

// localStorage.setItem("updatedStates", JSON.stringify(initialStates));
let updatedStates = JSON.parse(localStorage.getItem("updatedStates")) || {todos: [],projects: []};
export default updatedStates