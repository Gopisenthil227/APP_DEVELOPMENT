// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import Header from './Header';
// const Home = () => {
//   return (
//     <div className="home-page">
//       </Header>
//       <div className="main-content">
//         <h1 className="main-heading">Welcome to Our E-Learning Portal</h1>
//         <Link to="/courses" className="hero-button">Learn Now</Link>
//       </div>
//       <div className="social-icons">
//         <a href="https://instagram.com" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faInstagram} />
//         </a>
//         <a href="https://facebook.com" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faFacebook} />
//         </a>
//         <a href="https://twitter.com" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faTwitter} />
//         </a>
//         <a href="https://linkedin.com" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faLinkedin} />
//         </a>
//       </div>
//     </div>
    
//   );
// };

// export default Home;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import Header from './Header';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// // Import Header component

// const Home = () => {
//   return (
//     <div className="home-page">
//        <Header />
//       <div className="main-content">
//         <h1 className="main-heading">Welcome to Our E-Learning Portal</h1>
//         <Link to="/courses" className="hero-button">Learn Now</Link>
//       </div>
//       <div className="social-icons">
//         <a href="https://instagram.com" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faInstagram} />
//         </a>
//         <a href="https://facebook.com" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faFacebook} />
//         </a>
//         <a href="https://twitter.com" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faTwitter} />
//         </a>
//         <a href="https://linkedin.com" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faLinkedin} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="main-content">
        <h1 className="main-heading">Welcome to Our E-Learning Portal</h1>
        <Link to="/courses" className="hero-button">Learn Now</Link>
      </div>
      <div className="social-icons">
        <a href="https://instagram.com" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://facebook.com" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://linkedin.com" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Home;
