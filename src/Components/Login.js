import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Fetch users from the backend
      const response = await axios.get('http://127.0.0.1:8000/api/read_users/');
      const users = response.data;

      // Check if user exists with the provided email and password
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        // Redirect to home page on successful login
        navigate('/home');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Error logging in:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img 
          src="https://gurupanda.com.my/wp-content/uploads/2021/11/ezgif.com-gif-maker-5.gif" 
          alt="Decorative animated background"
          aria-hidden="true"
        />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              id="email"
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              id="password"
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
        <p>
          Admin? <a href="/adminlogin">Admin Login</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
