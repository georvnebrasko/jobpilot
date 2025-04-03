// src/components/AuthModal/AuthModal.jsx
import React, { useState } from 'react';
import './AuthModal.scss'; // Файл стилей с новыми названиями классов

function AuthModal({ onClose, onRegister, onLogin }) {
  const [activeTab, setActiveTab] = useState('login');

  // Стейт для регистрации (добавляем новое поле userType)
  const [registerData, setRegisterData] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'applicant', // 'applicant' – соискатель, 'employer' – работодатель
  });

  // Стейт для логина
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // Отправка формы регистрации
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    onRegister(registerData); 
  };

  // Отправка формы входа
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(loginData); 
  };

  return (
    <div className="authModal__overlay">
      <div className="authModal">
        <button className="authModal__close" onClick={onClose}>×</button>

        <div className="authModal__tabs">
          <button
            className={activeTab === 'login' ? 'authModal__tabs-button authModal__tabs-button--active' : 'authModal__tabs-button'}
            onClick={() => setActiveTab('login')}
          >
            Войти
          </button>
          <button
            className={activeTab === 'register' ? 'authModal__tabs-button authModal__tabs-button--active' : 'authModal__tabs-button'}
            onClick={() => setActiveTab('register')}
          >
            Создать аккаунт
          </button>
        </div>

        <div className="authModal__content">
          {/* Вкладка "Войти" */}
          {activeTab === 'login' && (
            <form
              className="authModal__form authModal__form--login"
              action="https://georvnebrasko.github.io/jobpilot"
              method="post"
              onSubmit={handleLoginSubmit}
              autoComplete="on"
            >
              <h3>Войти в аккаунт</h3>
              <input
                type="email"
                name="email"
                placeholder="Электронная почта"
                required
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                required
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
              <div className="authModal__form-actions">
                <label>
                  <input type="checkbox" name="remember" /> Запомнить
                </label>
                <a href="#!" className="authModal__form-forgotPassword">Забыли пароль?</a>
              </div>
              <button type="submit">Войти</button>
            </form>
          )}

          {/* Вкладка "Создать аккаунт" */}
          {activeTab === 'register' && (
            <form
              className="authModal__form authModal__form--register"
              onSubmit={handleRegisterSubmit}
              autoComplete="on"
            >
              <h3>Создать аккаунт</h3>
              <input
                type="text"
                placeholder="Логин"
                required
                value={registerData.nickname}
                onChange={(e) => setRegisterData({ ...registerData, nickname: e.target.value })}
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
              {/* Новый блок для выбора типа регистрации */}
              <div className="authModal__form-userType">
                <span>Регистрация как:</span>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="applicant"
                    checked={registerData.userType === 'applicant'}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, userType: e.target.value })
                    }
                  />
                  Соискатель
                </label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="employer"
                    checked={registerData.userType === 'employer'}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, userType: e.target.value })
                    }
                  />
                  Работодатель
                </label>
              </div>
              <label className="authModal__form-terms">
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