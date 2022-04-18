import React from 'react';
import './App.css';
import DisplayList from './components/DisplayList';
import TodoList from './components/TodoList';

class App extends React.Component {
    render(){
      return (
        <main>
          <TodoList />
          <DisplayList />
        </main>
      )
    }
}

export default App;

// handleClickMe = (event)=> {
//   const todo = this.state.todo.filter((item) => item.todos !== event)
//   this.setState(todo)
// }
// 

// handleClickMe = (event)=> {
//   const todo = this.state.todo
//   this.setState({
//     todos: [...this.state.todos.pop(this.state.todos), todo],
//     todo: '',
//   })
// }