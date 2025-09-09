import React from 'react'
import { FaTrash } from "react-icons/fa6";

const Todo = (props) => {
    const {title,desc,id}= props.todo
  return (
    <>
    <div className='grid grid-flow-col place-content-between my-3'>
        <h1 className='text-blue-500 font-black text-xl'>{title}</h1>
        <p>{desc}</p>
        <i className='text-red-700'><FaTrash /></i>
    </div>
    </>
  )
}

export default Todo