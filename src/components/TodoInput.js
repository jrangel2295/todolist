import React from 'react'


const TodoInput = (props) => {
  return (
    <section>
          <label for='todos'>Todos:</label>
          <input
           type='text'
            name='todos'
             onChange={props.handleChange}
              value={props.todo}>
             </input>
          <button onClick={props.handleClick}>Add</button>
          <button onClick={props.handleClickMe}>Remove</button>
          </section>
  )
}

export default TodoInput