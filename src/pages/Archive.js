import React from 'react';
import './Archive.css';

const Archive = () => {
  return (
    <div className="archive-page">
      <div className="archive-header">
        <h1 className="archive-title">Archive</h1>
        <p className="archive-subtitle">Your digital memories and collections</p>
      </div>
      
      <div className="fluid-glass-demo">
        <h2 className="demo-title">Fluid Glass Effect</h2>
        <p className="demo-description">
          Experience the smooth, glassmorphic design that adapts to your interactions
        </p>
        
        <div className="glass-cards">
          <div className="glass-card">
            <h3>Card 1</h3>
            <p>This card demonstrates the fluid glass effect with backdrop blur and transparency.</p>
            <button className="glass-button">Learn More</button>
          </div>
          
          <div className="glass-card">
            <h3>Card 2</h3>
            <p>Hover over this card to see the smooth animations and glass effects.</p>
            <button className="glass-button">Explore</button>
          </div>
          
          <div className="glass-card">
            <h3>Card 3</h3>
            <p>Each card has its own unique glassmorphic styling and interactions.</p>
            <button className="glass-button">Discover</button>
          </div>
        </div>
        
        <div className="glass-stats">
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Smooth</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">60fps</span>
            <span className="stat-label">Performance</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Possibilities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
