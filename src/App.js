import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import FaultyTerminal from './components/FaultyTerminal';
import Waves from './components/Waves';
import Dock from './components/Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from './components/Icons';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function AppContent() {
  const [currentEffect, setCurrentEffect] = useState('terminal');
  const [demoContentEnabled, setDemoContentEnabled] = useState(false);
  const navigate = useNavigate();

  const dockItems = [
    { 
      icon: <VscHome size={18} />, 
      label: 'Home', 
      onClick: () => navigate('/') 
    },
    { 
      icon: <VscArchive size={18} />, 
      label: 'Archive', 
      onClick: () => navigate('/archive') 
    },
    { 
      icon: <VscAccount size={18} />, 
      label: 'Profile', 
      onClick: () => navigate('/profile') 
    },
    { 
      icon: <VscSettingsGear size={18} />, 
      label: 'Settings', 
      onClick: () => navigate('/settings') 
    },
  ];

  const toggleDemoContent = () => {
    setDemoContentEnabled(prev => !prev);
    setCurrentEffect(prev => prev === 'terminal' ? 'waves' : 'terminal');
  };

  return (
    <div className="App">
      {/* Фоновые эффекты */}
      <div className="fullscreen-terminal">
        {currentEffect === 'terminal' ? (
          <FaultyTerminal
            scale={2}
            gridMul={[3, 2]}
            digitSize={1.5}
            timeScale={0.8}
            pause={false}
            scanlineIntensity={0.8}
            glitchAmount={1.2}
            flickerAmount={0.8}
            noiseAmp={1.5}
            chromaticAberration={0.1}
            dither={0.3}
            curvature={0.1}
            tint="#8fdf7e"
            mouseReact={true}
            mouseStrength={0.6}
            pageLoadAnimation={true}
            brightness={1.2}
          />
        ) : (
          <Waves
            lineColor="#8fdf7e"
            backgroundColor="rgba(143, 223, 126, 0.1)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        )}
      </div>
      
      {/* Основной контент */}
      <Routes>
        <Route path="/" element={
          <div className="central-content">
            <button className="new-bg-btn">
              <span className="btn-icon">#</span>
              New Background
            </button>
            
            <h1 className="main-title">
              It works on my machine,<br />
              please check again
            </h1>
            
            <div className="cta-buttons">
              <button className="cta-btn primary">Get Started</button>
              <button className="cta-btn secondary">Learn More</button>
            </div>
          </div>
        } />
        
        <Route path="/archive" element={<Archive />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      
      {/* Переключатель эффектов */}
      <div className="demo-toggle">
        <span>Demo Content</span>
        <div 
          className={`toggle-switch ${demoContentEnabled ? 'active' : ''}`}
          onClick={toggleDemoContent}
        >
          <div className="toggle-slider"></div>
        </div>
      </div>
      
      {/* Навигационная панель */}
      <Dock 
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        distance={200}
        dockHeight={256}
        spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
