import React, { useEffect, useState } from 'react';
import './Signup.css';

function Signup() {
  // STATE
  const [admin, setAdmin] = useState(false);
  const [contributor, setContributor] = useState(false);

  const [inputValue, setInputValue] = useState({
    organisation: '',
    email: '',
    password: '',
    confirmPassword: '',
    is_admin: false,
    is_contributor: false,
  });

  const [loading, setLoading] = useState(false); // New state for loading

  const { organisation, email, password, confirmPassword } = inputValue;

  const url = "https://barbareek.xyz/users";

  const sendSignupData = async (formData) => {
    try {
      setLoading(true); // Set loading to true before the API call
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Error occurred ${response.status} -- ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log(`Signup Successful ${responseData}`);
    } catch (error) {
      console.log(`${error}`);
    } finally {
      setLoading(false); // Set loading to false after the API call completes
    }
  };

  // TOGGLE FUNCTION
  const handleToggle = (type) => {
    setAdmin(type === 'admin' && !admin);
    setContributor(type === 'contributor' && !contributor);

    setInputValue((prevInputValues) => ({
      ...prevInputValues,
      is_admin: type === 'admin' && !admin,
      is_contributor: type === 'contributor' && !contributor,
    }));
  };

  // RESET FORM
  const resetForm = () => {
    setInputValue({
      organisation: '',
      email: '',
      password: '',
      confirmPassword: '',
      is_admin: setAdmin(false),
      is_contributor: setContributor(false),
    });
  };

  // FORM HANDLING
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await sendSignupData(inputValue);
    resetForm();
  };

  // COMPONENT RENDER

  return (
    <main className="main_signup">
      <div className="m_one"></div>
      <div className="m_two">
        <h2>Sign Up</h2>

        <input
          onChange={handleInput}
          name="organisation"
          value={organisation}
          type="text"
          placeholder="Organisation"
        />
        <input
          onChange={handleInput}
          name="email"
          value={email}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={handleInput}
          name="password"
          value={password}
          type="text"
          placeholder="Password"
        />
        <input
          onChange={handleInput}
          name="confirmPassword"
          value={confirmPassword}
          type="text"
          placeholder="Confirm Password"
        />

        <div className="options">
          <div
            onClick={() => handleToggle('admin')}
            className={admin ? 'isAdmin1' : 'isAdmin'}
          >
            Admin
          </div>
          <div
            onClick={() => handleToggle('contributor')}
            className={contributor ? 'isContributor1' : 'isContributor'}
          >
            Contributor
          </div>
        </div>

        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <button onClick={handleSubmit} className="btnnnn">
            Sign Up
          </button>
        )}
      </div>
    </main>
  );
}

export default Signup;
