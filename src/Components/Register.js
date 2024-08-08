import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/users', { username, email, password });
            console.log(response.data);
            navigate('/login'); // Redirect to login page on successful registration
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('Error creating the user.');
            }
            console.error('Error registering:', error);
        }
    };

    return (
        <div className="app-container">
            <div className="background-container">
                <video autoPlay muted loop>
                    <source src="https://www.google.com/imgres?q=background%20video%20with%20white%20laptop%20in%20mp4&imgurl=https%3A%2F%2Fimages.pond5.com%2Fopening-laptop-animated-mockup-transparent-footage-153006315_iconl.jpeg&imgrefurl=https%3A%2F%2Fwww.pond5.com%2Fsearch%3Fkw%3Dlaptop-opening%26media%3Dfootage&docid=3jo5SU38-SVSqM&tbnid=B7s6a6Dho1g_aM&vet=12ahUKEwj0qZnax-SHAxXaxDgGHUKLGuwQM3oFCIgBEAA..i&w=480&h=270&hcb=2&ved=2ahUKEwj0qZnax-SHAxXaxDgGHUKLGuwQM3oFCIgBEAA" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                    />
                    {error && <div className="error">{error}</div>}
                    <button type="submit">Register</button>
                </form>
                <p>
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
