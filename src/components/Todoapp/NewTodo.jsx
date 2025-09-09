import React,{useState} from 'react'

const NewTodo = () => {
    const [todo, setTodo]=useState({title:"",desc:""});

    const{title,desc}=todo;

    const handleChange=(e)=>{
        const name=e.target.name
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
    };
  return (
    <div className='p-3 bg-neutral-600 mb-3 rounded-lg'>
        <form onSubmit={handleSubmit} className=''>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id='title' className='mx-4 rounded-lg' name='title' value={title} onChange={handleChange} />
            </div>
             <div>
                <label htmlFor="desc">Desc:</label>
                <input type="text" id='desc' className='mx-4 rounded-lg' name='desc' value={desc} onChange={handleChange} />
            </div> 
            <button type='submit' className='bg-indigo-600/90 rounded-md px-3 py-1'>Add Todo</button>
        </form>
    </div>
  )
}

export default NewTodo