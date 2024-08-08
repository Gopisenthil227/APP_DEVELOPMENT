import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this matches the exact case of your CSS file

const Header = () => {
  const authState = useSelector(state => state.auth); // Adjust based on your state structure
  const isAuthenticated = authState?.isAuthenticated; // Safeguard against undefined

  const logoUrl = 'https://cdnb.artstation.com/p/assets/covers/images/016/855/009/large/kyle-miller-edtech-logo-solo.jpg?1553720994'; // Replace with your actual logo URL

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/become-a-teacher">Become a Teacher</Link>
        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
