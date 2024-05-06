import React, {useState} from 'react';
import style from './form.module.css';

export default function Form() {
  const[user, setUser]= useState ({name:'',email:'',password:''});
  const{name, email, password}= user;

  const formChange=(e)=>{
      setUser({...user, [e.target.name]: e.target.value});
    };

  function submit(e) {
    console.log("submited");
    console.log(user);
    e.preventDefault();
  }
  return (
    <div>
        <h1>Registration</h1>
        <form action="" onSubmit={submit}>
          <div className="grid gap-6 mb-6 grid-cols-auto">

            <div className='grid grid-flow-col auto-cols-2 gap-6'>
              <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name : </label>
              <input 
                type="text"  
                onChange={formChange}
                value={name} 
                name="name" 
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                id="name" required />
            </div>

            <div className='grid grid-flow-col auto-cols-2 gap-6'>
              <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email : </label>
              <input 
                type="email" 
                onChange={formChange} 
                value={email} 
                name="email" 
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                id="email" required 
                />
            </div>

            <div className='grid grid-flow-col auto-cols-2 gap-6'>
              <label htmlFor="password"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password : </label>
              <input 
                type="password"  
                onChange={formChange} 
                value={password}
                name="password" 
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                id="password" required 
                />
          </div>
            <button type='submit'  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
          </div>
        </form>
    </div>
  )
}
