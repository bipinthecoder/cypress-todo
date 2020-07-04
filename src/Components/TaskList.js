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