import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './State/AuthContext';
import Login from './Components/Login';
import Home from './Components/Home';
import Courses from './Components/Courses';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Contact from './Components/Contact';
import Settings from './Components/Settings';
import About from './Components/About'; 
import Payments from './Components/Payments'; 
import LandingPage from './Components/Landing';
import AdminLogin from './Components/AdminLogin';
import Admin from './Components/Admin';
import Dashboard from './Components/Dashboard';
import Assessment from './Components/Assessment';
import leaderboard from './Components/Leaderboard';
import Leaderboard from './Components/Leaderboard';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
       <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
