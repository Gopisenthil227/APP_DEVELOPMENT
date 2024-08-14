// src/Components/Settings.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSettings } from '../State/SettingsActions';
import './Settings.css';

const Settings = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [theme, setTheme] = useState('light'); // Default theme

  const dispatch = useDispatch();
  const { loading, error, success, user } = useSelector(state => state.settings || {});

  const email = user?.email || ''; // Use optional chaining and fallback to empty string

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    dispatch(updateSettings({ email, password, theme }));
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    dispatch(updateSettings({ email, theme: newTheme })); // Update theme in the settings
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value="727722euaia020@skcet.ac.in" 
            readOnly
          />
        </div>
        <div>
          <label>New Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </div>
        <div>
          <button type="button" onClick={handleThemeToggle}>
            Toggle Theme (Current: {theme})
          </button>
        </div>
        <button type="submit" disabled={loading}>Save Changes</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Settings updated successfully</p>}
      </form>
    </div>
  );  
};

export default Settings;
