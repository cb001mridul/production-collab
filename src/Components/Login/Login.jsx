import React, { useState, useEffect } from 'react';
import './Login.css';
import Header from '../Header/Header';

function Login() {
  const [input, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = input;

  const handleInput = (e) => {
    setInputValue({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setInputValue({
      email: '',
      password: '',
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'password',
          username: email,
          password: password,
          client_id: 'your_client_id', // replace with your client ID
          client_secret: 'your_client_secret', // replace with your client secret
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data);

      // Assuming the response contains an access token
      const accessToken = data.access_token;

      // Set the access token as a cookie or store it securely (replace expiration accordingly)
      document.cookie = `access_token=${accessToken}`;

      // Redirect logic should be placed here
      redirectToProjectsIfContributor();
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error
    }

    resetForm();
  };

  const redirectToProjectsIfContributor = () => {
    // Read the access token from the cookie
    const accessToken = getCookie('access_token');

    // Decode the JWT (assuming it's a JWT)
    const decodedToken = decodeJWT(accessToken);

    // Check if the 'is_contributor' claim is true
    if (decodedToken && decodedToken.is_contributor) {
      // Redirect to the /projects page
      window.location.href = '/projects';
    }

    if (decodedToken && decodedToken.is_admin){
      window.location.href = '/list-contrib'
    }
  };

  // Function to get a cookie value by name
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  // Function to decode a JWT (example, replace with your decoding logic)
  const decodeJWT = (token) => {
    try {
      const decoded = atob(token.split('.')[1]);
      return JSON.parse(decoded);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  };

  return (
    <>
      <Header text1="Home" text2="About" text3="Contact" />
      <main className="cp6_main_signup">
        <div className="cp6_m_two">
          <h2>Login</h2>

          <input
            onChange={handleInput}
            value={email}
            type="text"
            name="email"
            placeholder="Email"
          />

          <input
            onChange={handleInput}
            value={password}
            type="password"
            name="password"
            placeholder="Password"
          />

          <button className="cp6_btnnnn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </main>
    </>
  );
}

export default Login;
