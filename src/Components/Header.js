import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../State/AuthContext'; // Adjust the path if needed
import './Header.css';

const Header = () => {
  const { isAuthenticated } = useAuth();
  const logoUrl = 'https://cdnb.artstation.com/p/assets/covers/images/016/855/009/large/kyle-miller-edtech-logo-solo.jpg?1553720994';
  const profileIconUrl = 'https://example.com/profile-icon.png'; // Replace with your actual profile icon URL

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      <nav className="header-nav">
        {isAuthenticated ? (
          <>
            <Link to="/become-a-teacher">Become a Teacher</Link>
            {/* You can add more links here for authenticated users if needed */}
          </>
        ) : (
          <div className="auth-buttons">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            {/* <Link to="/settings">Settings</Link> */}
            <Link to="/profile" className="header-profile">
              <img src="https://static.vecteezy.com/system/resources/previews/036/280/650/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg" alt="" />
            </Link>
            {/* Uncomment if needed
            <Link to="/login" className="hero-button">Get Started</Link>
            <Link to="/register" className="hero-button">Register</Link> */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
