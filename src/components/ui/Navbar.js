import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark   bg-dark" >
                <div className="container-fluid">
                    
                <NavLink to='/' className="navbar-brand"> Home </NavLink>

                <NavLink to='/' className="navbar-brand"> Home </NavLink>

                <NavLink to='/' className="navbar-brand"> Home </NavLink>

                <NavLink to='/' className="navbar-brand"> Home </NavLink>
                    
                <button className="btn btn-outline-danger" >
                    <span> Logout </span>
                </button>

                </div>
            </nav>    
        </div>
    )
}
