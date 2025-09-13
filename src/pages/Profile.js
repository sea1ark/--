import React from 'react';
import './Profile.css';

// Страница профиля пользователя (пока статичная)
const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-circle">
            <span className="avatar-initial">Д</span>
          </div>
        </div>
        <h1 className="profile-name">Мой Профиль</h1>
        <p className="profile-status">Онлайн • Разработчик</p>
      </div>
      
      <div className="profile-content">
        <div className="profile-section">
          <h2>Личная информация</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Имя пользователя</label>
              <span>@developer</span>
            </div>
            <div className="info-item">
              <label>Email</label>
              <span>dev@teamspirit.com</span>
            </div>
            <div className="info-item">
              <label>Местоположение</label>
              <span>Таганрог</span>
            </div>
            <div className="info-item">
              <label>Участник с</label>
              <span>1337</span>
            </div>
          </div>
        </div>

        // таганрог трезвеет, шанхай бухает. коллапсу блинк молнии сбили
        
        <div className="profile-section">
          <h2>Статистика</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-value">52</span>
              <span className="stat-label">Проекты</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">1,337</span>
              <span className="stat-label">Строк кода</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">0.1%</span>
              <span className="stat-label">Время работы</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
