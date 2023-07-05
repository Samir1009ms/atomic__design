import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <h3 className='header__logo-text'>Task</h3>
            </div>
            <ul className='header__list'>
                <li className='header__list-item'><NavLink className='header__list-item__link' to='/' >Dashboard</NavLink></li>
                <li className='header__list-item'><NavLink className='header__list-item__link' to='/tasks' >Tasks</NavLink></li>
            </ul>
        </header>
    )
}
export default Navbar
