import React from 'react'
import TaskItem from "./TaskItem";
// const TaskItem = ( {data} )=>
//   <li className="success">
//     {/* <div className="success" > */}
//     <div >
//       <input type="checkbox" className="check-box"/>
//       <label>
//         {data.title}
//       </label>
//     </div>
//   </li>
const TaskList = props =>
  <ul className="task-list">
    {props.todos.map(todo => <TaskItem key={todo.id} data={todo} />)}
  </ul>
export default TaskList