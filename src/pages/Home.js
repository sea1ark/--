import React from 'react';
import './Home.css';

// портфолио
const Home = () => {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1 className="home-title">Добро пожаловать</h1>
        <p className="home-subtitle">Мое портфолио с крутыми эффектами</p>
        <div className="home-features">
          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Удобство</h3>
            <p>Все что нужно в одном месте</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Скорость</h3>
            <p>Быстрая навигация и взаимодействие</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨 </div>
            <h3>Красота</h3>
            <p>Крутые визуальные эффекты и анимации</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
