import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Customize your experience</p>
      </div>
      
      <div className="settings-content">
        <div className="settings-section">
          <h2>Appearance</h2>
          <div className="setting-item">
            <div className="setting-info">
              <label>Dark Mode</label>
              <span>Switch between light and dark themes</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="darkMode"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
              <label htmlFor="darkMode" className="toggle-slider"></label>
            </div>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <label>Animations</label>
              <span>Enable smooth transitions and effects</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="animations"
                checked={animations}
                onChange={(e) => setAnimations(e.target.checked)}
              />
              <label htmlFor="animations" className="toggle-slider"></label>
            </div>
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Notifications</h2>
          <div className="setting-item">
            <div className="setting-info">
              <label>Push Notifications</label>
              <span>Receive updates and alerts</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="notifications"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              <label htmlFor="notifications" className="toggle-slider"></label>
            </div>
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Performance</h2>
          <div className="setting-item">
            <div className="setting-info">
              <label>Hardware Acceleration</label>
              <span>Use GPU for better performance</span>
            </div>
            <div className="setting-value">Enabled</div>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <label>Cache Size</label>
              <span>Storage used for temporary files</span>
            </div>
            <div className="setting-value">256 MB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
