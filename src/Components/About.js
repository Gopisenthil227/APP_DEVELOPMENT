import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our e-learning portal! Our mission is to provide high-quality education and resources to learners around the world.
        We offer a diverse range of courses designed to help you achieve your educational goals. Our team of experienced instructors and
        industry experts are dedicated to delivering the best learning experience possible.
      </p>
      <p>
        Whether you're looking to advance your career, learn a new skill, or explore a new subject, we've got you covered. Our platform
        provides interactive and engaging content that is designed to fit into your busy schedule. Join us today and take the next step
        in your learning journey!
      </p>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="https://theimagesculptors.wordpress.com/wp-content/uploads/2015/10/linkedin-perfect-profile.jpg" alt="Team Member 1" />
          <div className="team-info">
            <h3>Gopikasri</h3>
            <p>Chief Education Officer</p>
            <p>Jane has over 15 years of experience in the education sector and is passionate about improving learning outcomes for students.</p>
          </div>
        </div>
        <div className="team-member">
          <img src="https://annemariesegal.com/wp-content/uploads/2017/04/adobestock_86346713-cropped-young-woman-in-suit.jpg?w=300&h=280" alt="Team Member 2" />
          <div className="team-info">
            <h3>Bhavanishree</h3>
            <p>Lead Instructor</p>
            <p>John specializes in technology and has a knack for making complex subjects easy to understand.</p>
          </div>
        </div>
        <div className="team-member">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/045/782/394/small/professional-young-woman-smiling-in-modern-office-setting-ideal-for-business-leadership-and-corporate-promotions-photo.jpg" alt="Team Member 2" />
          <div className="team-info">
            <h3>Kaniga</h3>
            <p>Founder</p>
            <p>John founded our e-learning portal with a vision to make high-quality education accessible to everyone. He specializes in technology and is committed to innovating the learning experience.</p>
            </div>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default About;
