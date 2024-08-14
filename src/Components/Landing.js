import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faSms } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    'https://www.shutterstock.com/shutterstock/videos/1072028707/preview/stock-footage-e-learning-hexagonal-touch-screen-concept-hexagonal-virtual-touch-screen-concept-with-man-touching.webm',
    'https://www.shutterstock.com/shutterstock/videos/1100838953/preview/stock-footage-software-programmer-working-on-computer-engineering-neural-network-creating-machine-learning-app.webm',
    'https://www.shutterstock.com/shutterstock/videos/1048614721/preview/stock-footage-young-student-watching-lesson-online-and-studying-from-home-young-woman-taking-notes-while-looking.webm',
    'https://www.shutterstock.com/shutterstock/videos/1101736887/preview/stock-footage-children-studying-in-classroom-with-a-tablet-e-learning-programming-school.webm',
    'https://www.shutterstock.com/shutterstock/videos/1058135743/preview/stock-footage-asian-little-girl-taking-online-class-education-technology-edtech.webm'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 2000); // Change video every 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [videos.length]);

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="header-logo">
          <img src="https://cdnb.artstation.com/p/assets/covers/images/016/855/009/large/kyle-miller-edtech-logo-solo.jpg?1553720994" alt="Logo" className="logo" />
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="hero-button">Login</Link>
          <Link to="/register" className="hero-button">Register</Link>
        </div>
      </header>
      
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Unlock Your Potential with Our E-Learning Portal</h1>
          <p className="hero-subheading">Explore a wide range of courses designed to help you succeed.</p>
        </div>
        <div className="carousel">
          <video
            className="carousel-video"
            src={videos[currentIndex]}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
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

      <footer className="landing-footer">
        <div className="footer-left footer-map">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.234164370411!2d-122.08273368468141!3d37.38605167983143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb57777d3a9b3%3A0x6c8c6e5b39eebcf9!2sGoogleplex!5e0!3m2!1sen!2sus!4v1629880568657!5m2!1sen!2sus"
            width="100%"
            height="300" // Increased height
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="footer-right footer-contact">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send</button>
            </form>
          </div>
        </div>
      </footer>

      {/* <div className="contact-details">
        <p>Email: contact@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="contact-icons">
            <a href="mailto:contact@example.com" className="contact-icon" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="tel:+1234567890" className="contact-icon" aria-label="Call">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="sms:+1234567890" className="contact-icon" aria-label="SMS">
              <FontAwesomeIcon icon={faSms} />
            </a>
          </div> */}
    </div>
  );
};

export default Landing;
