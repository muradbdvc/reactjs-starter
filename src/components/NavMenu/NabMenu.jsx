import React from 'react'
import {createBrowserRouter,RouterProvider,Route,Link,json} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Nabmenu.css'

const navitems = [
    {
        id:1,
        title:'Home',
        path:'/',
        cName: 'nav-item'
    },
    {
        id:2,
        title:'Service',
        path:'/service',
        cName: 'nav-item'
    },
    {
        id:3,
        title:'About',
        path:'/about',
        cName: 'nav-item'
    },
    {
        id:4,
        title:'Products',
        path:'/products',
        cName: 'nav-item'
    },
    {
        id:5,
        title:'Contact',
        path:'/contact',
        cName: 'nav-item'
    }
];

function NabMenu() {
    
  return (
    <div>
<<<<<<< HEAD
        <nav className='navbar'>
            <Link to='/#' className='navbar-logo'>
=======
        <nav className='navbar  rounded-md'>
            <Link to='/' className='navbar-logo text-white font-bold'>
>>>>>>> 8601138f4c5b4f7b9a2aed271d45be428611d30b
                Nature
            </Link>
            <ul id='navbar'>
                {navitems.map((item)=>{
                    const {id, path, title} = item;
                    return(
                    <li key={id} className='cName'>
                        <Link to={path}>
                            {title}
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
    </div>
  )
}

export default NabMenu

