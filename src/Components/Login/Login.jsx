import React from 'react'
import './Login.css'

function Login() {
  return (
    <main className="cp6_main_signup">
      {/* <div className="cp6_m_one"></div> */}
      <div className="cp6_m_two">
        <h2>Login</h2>

        <input type="text" placeholder="Email"/>

        <input type="text" placeholder="Password"/>

        <button className="cp6_btnnnn">
          Login
        </button>
      </div>
    </main>
  )
}

export default Login