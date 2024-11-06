import React from 'react'
import './Navbar.css'
import logo from '../assets/react.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="head">
    <img src={logo} alt="" />
    <ul className='lists'>
        <NavLink  className='li'   to='/'><li>Home</li></NavLink>
        <NavLink className='li' to='/about'><li>About</li></NavLink>
        <NavLink className='li' to='/projects'><li>Projects</li></NavLink>
        <NavLink className='li' to='/contact'><li>Contact me</li></NavLink>
    </ul>
    <button className='theme_btn'>light/dark</button>
    </div>
    
    </>
  )
}

export default Navbar