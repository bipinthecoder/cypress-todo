<<<<<<< HEAD
import React from 'react'
import TaskItem from "./TaskItem";

// const TaskItem = ( {data} )=>
//   <li className="success">
//     {/* <div className="success" > */}
//     <div >
//       <input type="checkbox" className="check-box"/>
=======
import React, { Component } from 'react'

class TaskItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

      toggleStatus: false
    }

  }
  handleClick = (e) => {
    this.setState({
      toggleStatus: !this.state.toggleStatus
    })

  }

  render() {
    const { data } = this.props
    const { toggleStatus } = this.state

    console.log(this.state)
    const classSuccessName = toggleStatus ? "success" : "notSuccess"
    return (
      // ?toggleStatus className:"success" : !toggleStatus className :"Notsuccess"
      // <li className={`${classSuccessName}`}>
      <li className="noSuccess">
        <div >
          <input type="checkbox" className="check-box" onClick={this.handleClick} />
          <label>
            {data.title}
          </label>
        </div>
      </li >


    )
  }



}

// const TaskItem = ({ data }) =>
//   <li>
//     <div >
//       <input type="checkbox" className="check-box" />
>>>>>>> 203db75b99687e79fae9856f0fdb9be3a1a834b3
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