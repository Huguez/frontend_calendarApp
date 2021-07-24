import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth'

export const Navbar = () => {
    const { name } = useSelector( state => state.auth )
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <div>
            <nav className="navbar navbar-dark   bg-dark" >
                <div className="container-fluid">
                        
                    <NavLink to='/' className="navbar-brand"> { name } </NavLink>

                    <button className="btn btn-outline-danger" onClick={ handleLogout } >
                        <span> Logout </span>
                    </button>

                </div>
            </nav>
        </div>
    )
}
