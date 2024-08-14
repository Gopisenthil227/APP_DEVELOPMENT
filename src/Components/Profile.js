import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css'; // Ensure to create this CSS file for styling

const Profile = () => {
    // Assuming user data is stored in Redux store
    const user = useSelector((state) => state.user);

    // Check if user data exists
    if (!user) {
        return <div className="profile-container">Loading...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>Profile</h1>
            </div>
            <div className="profile-content">
                <div className="profile-picture">
                    <img src={user.profilePicture || '/default-avatar.png'} alt="Profile" />
                </div>
                <div className="profile-details">
                    <h2>{user.username}</h2>
                    <p>Email: {user.email}</p>
                    <p>Joined: {new Date(user.joinedDate).toLocaleDateString()}</p>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Phone: {user.phone || 'Not Provided'}</p>
                    <p>Address: {user.address || 'Not Provided'}</p>
                    {/* Add more personal details as needed */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
