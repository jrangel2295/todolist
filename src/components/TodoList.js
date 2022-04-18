import React, { Component } from 'react'
import Todo from './Todo'
import TodoInput from './TodoInput'

export default class TodoList extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          todo: '',
          todos: [
            { id: '1', todo: 'wash dog'},
            { id: '2', todo: 'eat food'},
            { id: '3', todo: 'water plants'}
          ],
        }
      }
    
    
      componentDidUpdate(){
        console.log('updated', this.state.todos)
      }
    
      handleChange = (event)=> {
        // console.log(event.target.value)
        this.setState({
          todo: event.target.value,
        })
      }
    
      handleClick = (event)=> {
        const todo = this.state.todo
        this.setState({
          todos: [...this.state.todos, {
            id: this.state.todos.length+1,
            todo: todo
          }],
          todo: '',
        })
      }
    
      // button for removing todo
      handleClickMe = (event, id)=> {
        console.log(id)
        let filteredList = this.state.todos.filter(todo => todo.id != id)
        this.setState({
          todos: filteredList,
        })
      }
      
    
    
      render(){
      return(
        <div className="App">
          <TodoInput 
          handleClick={this.handleClick} 
          handleChange={this.handleChange} 
          todo={this.state.todo}
          />
          <ul>
            {this.state.todos.map((todo, i)=>{
              return <Todo todo={todo} handleClickMe={this.handleClickMe} />
            })}
          </ul>
        </div>
        )
      }
    }