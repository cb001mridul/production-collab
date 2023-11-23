import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Links = () => {
    return (<nav class="header_navbar">
    <ul class="navbar_ul">
        <li><NavLink to="/">Home</NavLink></li>
        {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
        <li><a href="#">Features</a></li>
        <li><a href="#">Contact</a></li>
    </ul>

    <div class="navbar_btn">
        {/* <button class="btn_login">Login</button> */}
        <NavLink className="navlink_one" to="/signup"><button class="btn_signup">Sign Up</button></NavLink>
    </div>
</nav>)
}

function Header() {

    const [ham,setHam] = useState(false)

  return (
    <header>
        <div class="header_branding">
            <h1>collab</h1>
            {window.innerWidth < 1269 ? <button onClick={(e)=>setHam(cur => !cur)}><FontAwesomeIcon className='fa-2x' icon={faBars} />
</button> : null}
        </div>
        {window.innerWidth<1269 ? (ham?<Links/>:null):<Links/>}
    </header>
  )
}

export default Header