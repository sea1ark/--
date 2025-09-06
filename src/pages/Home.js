import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1 className="home-title">Welcome Home</h1>
        <p className="home-subtitle">Your digital sanctuary awaits</p>
        <div className="home-features">
          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Comfort</h3>
            <p>Find everything you need in one place</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Speed</h3>
            <p>Lightning-fast navigation and interactions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beauty</h3>
            <p>Stunning visual effects and animations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
