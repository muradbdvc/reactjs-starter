import React from 'react'
import Todo from './Todo'
 
const Todos = (props) => {
    console.log(props.todos)
  return (
    <div className='bg-sky-300/30 rounded-lg p-3'>
      { props.todos.map((todo)=> <Todo todo={todo} key={todo.id} />)    }
    </div>
  )
}

export default Todos