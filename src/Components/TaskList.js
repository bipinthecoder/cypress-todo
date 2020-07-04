import React from 'react'

const TaskItem = ( {data} )=>
  <li>
    <div >
      <input type="checkbox" className="check-box"/>
      <label>
        {data.title}
      </label>
    </div>
  </li>

const TaskList = props =>
  <ul className="task-list">
    {props.todos.map(todo => <TaskItem key={todo.id} data={todo}/>)}
  </ul>

export default TaskList