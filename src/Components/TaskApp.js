import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import TaskForm from './TaskForm'
import TaskList from './TaskList';
import {addTask,loadData} from "../utils/axios";


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      newTaskName:"",
      error:false
    }
  }

  onInputChange=(e)=>{
    this.setState({
      newTaskName:e.target.value
    })
  }

  onSubmit = (e)=>{
    e.preventDefault();
    let payload = {
      title:this.state.newTaskName,
    }

    addTask(payload)
    .then( ({data}) =>{
      this.setState({
        todos:[...this.state.todos,data]
      })
    })
    .catch(err=>{
      this.setState({
        error:true
      })
    })
  }

  componentDidMount(){
    loadData()
    .then(({data})=>{
      this.setState({
        todos:data
      })
    })
    .catch(err=> this.setState({
      error:true
    }))
  }



  render () {
    console.log(this.state);
    return (
      <Router>
        <div className="container-fluid text-center">
          <header className="p-2">
            <h1>Tasks</h1>
            <TaskForm value={this.state.newTaskName} onChange={this.onInputChange} onSubmit={this.onSubmit} />
            {this.state.error && <h3 className="error text-danger">Oops! Couldn't add Item</h3>}
          </header>
          <section className="mt-2">
            <TaskList todos={this.state.todos} />
          </section>
        </div>
      </Router>
    )
  }
}