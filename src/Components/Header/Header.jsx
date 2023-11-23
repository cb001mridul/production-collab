import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div class="header_branding">
            <h1>collab</h1>
        </div>
        <nav class="header_navbar">
            <ul class="navbar_ul">
                <li><NavLink to="/">Home</NavLink></li>
                {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div class="navbar_btn">
                <button class="btn_login">Login</button>
                <button class="btn_signup"><NavLink className="navlink_one" to="/signup">Sign Up</NavLink></button>
            </div>
        </nav>
    </header>
  )
}

export default Header