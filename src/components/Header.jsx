import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';

function Header({ onOpenAuthModal, user, onLogout }) {
  const [showLogout, setShowLogout] = useState(false);

  const handleNicknameClick = () => {
    setShowLogout((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-top">
        <nav className="navbar">
          <ul>
            <li><a href="#!">Главная</a></li>
            <li><a href="#!">Найти работу</a></li>
            <li><a href="#!">Работодатели</a></li>
            <li><a href="#!">Кандидаты</a></li>
            <li><a href="#!">Цены</a></li>
            <li><a href="#!">Поддержка клиентов</a></li>
          </ul>
        </nav>
      </div>

      <div className="header-bottom">
        <img src={logo} alt="JobPilot Logo" className="header-logo" />

        <div className="header-search-wrapper">
          <span className="my-job">Моя работа</span>
          <input
            type="text"
            placeholder="Название должности, ключевое слово, компания"
            className="header-search"
          />
        </div>

        <div className="header-buttons">
          {user ? (
            <div className="user-logged-in">
              <span className="user-nickname" onClick={handleNicknameClick}>
                {user.nickname}
              </span>
              {showLogout && (
                <button className="logout-btn" onClick={onLogout}>
                  Выйти
                </button>
              )}
            </div>
          ) : (
            <button className="login-btn" onClick={onOpenAuthModal}>
              Войти
            </button>
          )}
          <button className="publish-btn">Опубликовать вакансию</button>
        </div>
      </div>
    </header>
  );
}

export default Header;