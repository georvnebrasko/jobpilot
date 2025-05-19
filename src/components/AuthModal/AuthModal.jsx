// src/components/AuthModal/AuthModal.jsx
import React, { useState } from 'react';
import './AuthModal.scss';

function AuthModal({ onClose, onRegister, onLogin }) {
  const [activeTab, setActiveTab] = useState('login');

  const [registerData, setRegisterData] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'applicant',        // applicant | employer
    companyName: '',
    companyCity: '',
    companyPhone: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    userType: 'applicant',
  });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }

    // 1) Регистрируем аккаунт
    onRegister(registerData);

    // 2) Если работодатель — сразу сохраняем профиль компании
    if (registerData.userType === 'employer') {
      const employerProfile = {
        name: registerData.companyName,
        city: registerData.companyCity,
        phone: registerData.companyPhone,
        website: '',
        size: '',
        industry: '',
        about: '',
      };
      localStorage.setItem(
        'employerProfile',
        JSON.stringify(employerProfile)
      );
    }

    // 3) Удаляем старый общий ключ (если был)
    localStorage.removeItem('jobApplications');

    // 4) Создаём пустой массив заявок для нового пользователя
    const userJobKey = `jobApplications_${registerData.nickname}`;
    localStorage.setItem(userJobKey, JSON.stringify([]));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(loginData);
  };

  return (
    <div className="authModal__overlay">
      <div className="authModal">
        <button className="authModal__close" onClick={onClose}>×</button>

        {/* tabs */}
        <div className="authModal__tabs">
          <button
            className={`authModal__tabsButton ${
              activeTab === 'login' ? 'authModal__tabsButton--active' : ''
            }`}
            onClick={() => setActiveTab('login')}
          >
            Войти
          </button>
          <button
            className={`authModal__tabsButton ${
              activeTab === 'register' ? 'authModal__tabsButton--active' : ''
            }`}
            onClick={() => setActiveTab('register')}
          >
            Создать аккаунт
          </button>
        </div>

        {/* forms */}
        <div className="authModal__content">
          {activeTab === 'login' && (
            <form
              className="authModal__form authModal__form--login"
              onSubmit={handleLoginSubmit}
            >
              <h3>Войти в аккаунт</h3>
              <input
                type="email"
                placeholder="Электронная почта"
                required
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Пароль"
                required
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <div className="authModal__formUsertype">
                <span>Войти как:</span>
                <label>
                  <input
                    type="radio"
                    name="loginUserType"
                    value="applicant"
                    checked={loginData.userType === 'applicant'}
                    onChange={(e) =>
                      setLoginData({ ...loginData, userType: e.target.value })
                    }
                  />
                  Соискатель
                </label>
                <label>
                  <input
                    type="radio"
                    name="loginUserType"
                    value="employer"
                    checked={loginData.userType === 'employer'}
                    onChange={(e) =>
                      setLoginData({ ...loginData, userType: e.target.value })
                    }
                  />
                  Работодатель
                </label>
              </div>
              <button type="submit">Войти</button>
            </form>
          )}

          {activeTab === 'register' && (
            <form
              className="authModal__form authModal__form--register"
              onSubmit={handleRegisterSubmit}
            >
              <h3>Создать аккаунт</h3>
              <input
                type="text"
                placeholder="Логин"
                required
                value={registerData.nickname}
                onChange={(e) =>
                  setRegisterData({ ...registerData, nickname: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Электронная почта"
                required
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Пароль"
                required
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Подтвердите пароль"
                required
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <div className="authModal__formUsertype">
                <span>Регистрация как:</span>
                <label>
                  <input
                    type="radio"
                    name="regUserType"
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
                    name="regUserType"
                    value="employer"
                    checked={registerData.userType === 'employer'}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, userType: e.target.value })
                    }
                  />
                  Работодатель
                </label>
              </div>

              {registerData.userType === 'employer' && (
                <>
                  <input
                    type="text"
                    placeholder="Название компании"
                    required
                    value={registerData.companyName}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, companyName: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Город / Регион"
                    required
                    value={registerData.companyCity}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, companyCity: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Контактный телефон"
                    required
                    value={registerData.companyPhone}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, companyPhone: e.target.value })
                    }
                  />
                </>
              )}

              <button type="submit">Создать аккаунт</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;