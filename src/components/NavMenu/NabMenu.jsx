import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Nabmenu.css'

const navitems = [
    {
        id:1,
        title:'Home',
        path:'/',
        cName: 'nav-item'
    },
    {
        id:1,
        title:'Service',
        path:'/service',
        cName: 'nav-item'
    },
    {
        id:1,
        title:'About',
        path:'/about',
        cName: 'nav-item'
    },
    {
        id:1,
        title:'Products',
        path:'/products',
        cName: 'nav-item'
    },
    {
        id:1,
        title:'Contact',
        path:'/contact',
        cName: 'nav-item'
    },
]

function NabMenu() {
    
  return (
    <div>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                Nature
            </Link>
            <ul id='navbar'>
                {navitems.map(item=>{
                    const {id, path, title} = item;
                    return(
                    <li key={id} className='item.cName'>
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

