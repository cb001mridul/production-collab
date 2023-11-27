import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
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
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const { organisation, email, password, confirmPassword } = inputValue;
  const url = "https://barbareek.xyz/users";

  const navigate = useNavigate();

  const sendSignupData = async (formData) => {
    try {
      setLoading(true);
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
      setSuccessMessage(`Signup Successful. You will be now redirected to the landing page . Further steps will be informed to you via an email within few weeks.`);
    } catch (error) {
      console.log(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (type) => {
    setAdmin(type === 'admin' && !admin);
    setContributor(type === 'contributor' && !contributor);
    setInputValue((prevInputValues) => ({
      ...prevInputValues,
      is_admin: type === 'admin' && !admin,
      is_contributor: type === 'contributor' && !contributor,
    }));
  };

  const resetForm = () => {
    setInputValue({
      organisation: '',
      email: '',
      password: '',
      confirmPassword: '',
      is_admin: false,
      is_contributor: false,
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (successMessage) {
      // Redirect to the Main.jsx page after 3 seconds (adjust as needed)
      const redirectTimeout = setTimeout(() => {
        navigate('/'); // Replace '/main' with the actual path you want to redirect to
      }, 2000);

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(redirectTimeout);
    }
  }, [successMessage, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendSignupData(inputValue);
    resetForm();
  };

  return (
    <main className="main_signup">
      <div className="m_one"></div>
      {successMessage ? (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      ) : (
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
      )}
    </main>
  );
}

export default Signup;
