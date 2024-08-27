import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

            <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
                <NavLink className='navbar-brand text-warning fw-bold ms-3' to='/'><h2>CRUD APP</h2></NavLink>


                <ul className='navbar-nav m-auto'>
                    <li className='nav-item'>
                        <NavLink to='/' className="nav-link text-light fw-bold">UserForm</NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink to='/userdata' className="nav-link mx-5 text-light fw-bold">UserData</NavLink>
                    </li>
                </ul>


            </nav>



        </>
    )
}

export default Navbar
