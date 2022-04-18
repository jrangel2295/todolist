import React from 'react'

const Todo = ({todo: {id, todo: t}, handleClickMe}) => <li key={id}>{t}<button onClick={(e)=>{handleClickMe(e, id)}}>x</button></li>
  


export  default Todo;