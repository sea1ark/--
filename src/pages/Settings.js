import React, { useState } from 'react';
import './Settings.css';

// Страница настроек приложения (базовая функциональность)
const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1 className="settings-title">Настройки</h1>
        <p className="settings-subtitle">Настройте свой опыт</p>
      </div>
      
      <div className="settings-content">
        <div className="settings-section">
          <h2>Внешний вид</h2>
          <div className="setting-item">
            <div className="setting-info">
              <label>Темная тема</label>
              <span>Переключение между светлой и темной темами</span>
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
              <label>Анимации</label>
              <span>Включить плавные переходы и эффекты</span>
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
          <h2>Уведомления</h2>
          <div className="setting-item">
            <div className="setting-info">
              <label>Push уведомления</label>
              <span>Получать обновления и оповещения</span>
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
          <h2>Производительность</h2>
          <div className="setting-item">
            <div className="setting-info">
              <label>Аппаратное ускорение</label>
              <span>Использовать GPU для лучшей производительности</span>
            </div>
            <div className="setting-value">Включено</div>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <label>Размер кэша</label>
              <span>Хранилище для временных файлов</span>
            </div>
            <div className="setting-value">256 МБ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
