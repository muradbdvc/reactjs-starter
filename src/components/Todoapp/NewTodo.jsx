import React, {useState} from 'react'

const NewTodo = (props) => {
    const [todoitem, setTodoitem] = useState("");
    const itemchange =(even)=>{
        setTodoitem(even.target.value);
    }
    const submit =(event)=>{
        event.preventDefault();
        props.onTodo(onTodo);
    }
  return (
    <div>
        <form action="" onSubmit={submit}>
            <label htmlFor="todo">New todo</label>
            <input
                 type="text"
                 id='todo' 
                 name='todo'
                 value={todoitem} 
                 onChange={itemchange}
                 className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                 />
                 
            <button>add todo</button>
        </form>
    </div>
  )
}

export default NewTodo