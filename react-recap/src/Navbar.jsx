import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './header.css'



const Navbar = () => {
    return (
        <div>
            <div className='header'>

                <div>
                    <NavLink className='link' to={'/'}><h1>Logo</h1></NavLink>
                </div>
                <div>
                    <ul>
                        <li><NavLink className='link' to='/'>Home</NavLink></li>
                        <li><NavLink className='link' to='/login'>Login</NavLink></li>
                        <li><NavLink className='link' to='/about' >About</NavLink></li>
                        <li><NavLink className='link' to='college'>College</NavLink></li>
                        <li><NavLink className='link' to='/users'>Users</NavLink></li>
                        <li><NavLink className='link' to='/users/list'>Users List</NavLink></li>
                    </ul>
                </div> 
            </div>
              <Outlet />
        </div>

    )
}

export default Navbar