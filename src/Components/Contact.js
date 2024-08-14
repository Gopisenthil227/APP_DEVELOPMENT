import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.subject && formData.message) {
            setSuccess('Your message has been sent successfully!');
            setError('');
        } else {
            setError('Please fill in all fields.');
            setSuccess('');
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-form">
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                        />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="5"
                            required
                        />
                        {error && <div className="error">{error}</div>}
                        {success && <div className="success">{success}</div>}
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="contact-footer">
                    <div className="location-map">
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.234164370411!2d-122.08273368468141!3d37.38605167983143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb57777d3a9b3%3A0x6c8c6e5b39eebcf9!2sGoogleplex!5e0!3m2!1sen!2sus!4v1629880568657!5m2!1sen!2sus"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="contact-details">
                        <h3>Contact Details</h3>
                        <p>Address: 123 E-Learning St, Education City, ED 45678</p>
                        <p>Email: contact@elearningportal.com</p>
                        <p>Call: +1 234 567 890</p>
                    </div>
                </div>
            </div>
            <div className="team-section">
                <div className="team-member">
                    <img src="https://theimagesculptors.wordpress.com/wp-content/uploads/2015/10/linkedin-perfect-profile.jpg" alt="Team Member 1" />
                    <div className="team-info">
                        <h2>Gopikasri</h2>
                        <h5>Chief Education Officer</h5>
                        <p>Gopikasri has over 15 years of experience in the education sector and is passionate about improving learning outcomes for students.</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src="https://annemariesegal.com/wp-content/uploads/2017/04/adobestock_86346713-cropped-young-woman-in-suit.jpg?w=300&h=280" alt="Team Member 2" />
                    <div className="team-info">
                        <h2>Bhavanishree</h2>
                        <h5>Lead Instructor</h5>
                        <p>Bhavanishree specializes in technology and has a knack for making complex subjects easy to understand.</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/045/782/394/small/professional-young-woman-smiling-in-modern-office-setting-ideal-for-business-leadership-and-corporate-promotions-photo.jpg" alt="Team Member 3" />
                    <div className="team-info">
                        <h2>Kaniga</h2>
                        <h5>Founder</h5>
                        <p>Kaniga founded our e-learning portal with a vision to make high-quality education accessible to everyone. She specializes in technology and is committed to innovating the learning experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
