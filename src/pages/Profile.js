import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-circle">
            <span className="avatar-initial">U</span>
          </div>
        </div>
        <h1 className="profile-name">User Profile</h1>
        <p className="profile-status">Online • Premium Member</p>
      </div>
      
      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Username</label>
              <span>@username</span>
            </div>
            <div className="info-item">
              <label>Email</label>
              <span>user@example.com</span>
            </div>
            <div className="info-item">
              <label>Location</label>
              <span>Digital World</span>
            </div>
            <div className="info-item">
              <label>Member Since</label>
              <span>2024</span>
            </div>
          </div>
        </div>
        
        <div className="profile-section">
          <h2>Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">42</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">1,337</span>
              <span className="stat-label">Lines of Code</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
