import React from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
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
    {
        id: 3,
        title : 'Todo title 3',
        desc : 'This is desc 3.'
    }
]
const TodoHome = () => {
  return (
    <div>
      <h1 className='font-semibold text-3xl my-5 p-6 bg-indigo-500/50 rounded'>Todo App</h1>
      <div className='rounded'>
        <NewTodo />
        <Todos todos={dummyTodos} />
      </div>
    </div>
  )
}

export default TodoHome