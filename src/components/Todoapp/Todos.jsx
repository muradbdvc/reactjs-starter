import React from 'react'
import Todo from './Todo'
 
const Todos = (props) => {
    console.log(props.todos)
  return (
    <div>
      { props.todos.map((todo)=> <Todo todo={todo} key={todo.id} />)    }
    </div>
  )
}

export default Todos