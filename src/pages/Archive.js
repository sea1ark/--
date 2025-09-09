import React from 'react';
import './Archive.css';

// архив демо эффект (в разработке)
const Archive = () => {
  return (
    <div className="archive-page">
      <div className="archive-header">
        <h1 className="archive-title">Архив</h1>
        <p className="archive-subtitle">Мои работы и коллекции</p>
      </div>
      
      <div className="fluid-glass-demo">
        <h2 className="demo-title">Стеклянный эффект</h2>
        <p className="demo-description">
          Плавный glassmorphic дизайн, который адаптируется к взаимодействиям
        </p>
        
        <div className="glass-cards">
          <div className="glass-card">
            <h3>Карточка 1</h3>
            <p>Демонстрация стеклянного эффекта с размытием фона и прозрачностью.</p>
            <button className="glass-button">Узнать больше</button>
          </div>
          
          <div className="glass-card">
            <h3>Карточка 2</h3>
            <p>Наведите курсор, чтобы увидеть плавные анимации и стеклянные эффекты.</p>
            <button className="glass-button">Исследовать</button>
          </div>
          
          <div className="glass-card">
            <h3>Карточка 3</h3>
            <p>Каждая карточка имеет свой уникальный glassmorphic стиль и взаимодействия.</p>
            <button className="glass-button">Открыть</button>
          </div>
        </div>
        
        <div className="glass-stats">
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Плавность</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">60fps</span>
            <span className="stat-label">Производительность</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Возможности</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
