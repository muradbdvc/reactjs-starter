import React from 'react'
import { FaTrash } from "react-icons/fa6";

const Todo = (props) => {
    const {title,desc,id}= props.todo
  return (
    <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <i className='text-red-700'><FaTrash /></i>
    </div>
  )
}

export default Todo