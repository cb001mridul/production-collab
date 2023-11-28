import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Links = ({text1,text2,text3}) => {
    return (<nav class="header_navbar">
    <ul class="navbar_ul">
        <li><NavLink to="/">{text1}</NavLink></li>
        {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
        <li><a href="#">{text2}</a></li>
        <li><a href="#">{text3}</a></li>
    </ul>

    <div class="navbar_btn">
        <NavLink className="navlink_one" to="/login"><button class="btn_signup">Login</button></NavLink>
        <NavLink className="navlink_one" to="/signup"><button class="btn_signup">Sign Up</button></NavLink>
    </div>
</nav>)
}

function Header({text1,text2,text3}) {

    const [ham,setHam] = useState(false)

  return (
    <header>
        <div class="header_branding">
            <h1>collab</h1>
            {window.innerWidth < 1269 ? <button onClick={(e)=>setHam(cur => !cur)}><FontAwesomeIcon className='fa-2x' icon={faBars} />
</button> : null}
        </div>
        {window.innerWidth<1269 ? (ham?<Links text1={text1} text2={text2} text3={text3}/>:null):<Links text1={text1} text2={text2} text3={text3}/>}
    </header>
  )
}

export default Header