import React, { useState } from 'react';
import './AuthModal.scss';

function AuthModal({ onClose, onRegister, onLogin }) {
  const [activeTab, setActiveTab] = useState('login');

  // стейт для регистрации
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // стейт для логина
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // отправка формы регистрации
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // вызываем onRegister, передаём registerData
    onRegister(registerData);
  };

  // отправка формы логина
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // вызываем onLogin, передаём loginData
    onLogin(loginData);
  };

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
            <form className="auth-form login-form" onSubmit={handleLoginSubmit}>
              <h3>Войти в аккаунт</h3>
              <input
                type="email"
                placeholder="Электронная почта"
                required
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Пароль"
                required
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
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
            <form className="auth-form register-form" onSubmit={handleRegisterSubmit}>
              <h3>Создать аккаунт</h3>
              <input
                type="text"
                placeholder="Полное имя"
                required
                value={registerData.fullName}
                onChange={(e) => setRegisterData({ ...registerData, fullName: e.target.value })}
              />
              <input
                type="email"
                placeholder="Электронная почта"
                required
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Пароль"
                required
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              />
              <input
                type="password"
                placeholder="Подтвердите пароль"
                required
                value={registerData.confirmPassword}
                onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
              />
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