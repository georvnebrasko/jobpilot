import React, { useState } from 'react';
import './AuthModal.scss';

function AuthModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="auth-modal-close" onClick={onClose}>×</button>
        <div className="auth-modal-tabs">
          <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
          >
            Войти
          </button>
          <button
            className={activeTab === 'register' ? 'active' : ''}
            onClick={() => setActiveTab('register')}
          >
            Создать аккаунт
          </button>
        </div>
        <div className="auth-modal-content">
          {activeTab === 'login' && (
            <form className="auth-form login-form">
              <h3>Войти в аккаунт</h3>
              <input type="email" placeholder="Электронная почта" required />
              <input type="password" placeholder="Пароль" required />
              <div className="auth-form-actions">
                <label>
                  <input type="checkbox" /> Помни меня
                </label>
                <a href="#!" className="forgot-password">Забыть пароль?</a>
              </div>
              <button type="submit">Войти</button>
            </form>
          )}
          {activeTab === 'register' && (
            <form className="auth-form register-form">
              <h3>Создать аккаунт</h3>
              <input type="text" placeholder="Полное имя" required />
              <input type="email" placeholder="Электронная почта" required />
              <input type="password" placeholder="Пароль" required />
              <input type="password" placeholder="Подтвердите пароль" required />
              <label className="terms">
                <input type="checkbox" required /> Я прочитал(а) и согласен(на) с условиями предоставления услуг.
              </label>
              <button type="submit">Создать аккаунт</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;