import React from 'react'
import Todos from './Todos'
const dummyTodos = [
    {
        id: 1,
        title : 'Todo title 1',
        desc : 'This is desc 1.'
    },
    {
        id: 2,
        title : 'Todo title 2',
        desc : 'This is desc 2.'
    },
]
const TodoHome = () => {
  return (
    <div>
      <h1>Todo App</h1>
        <Todos todos={dummyTodos} />
    </div>
  )
}

export default TodoHome