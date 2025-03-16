import React, { useState } from 'react';
import logo from '../assets/images/logo.svg'; // Логотип (портфель внутри)

function Header({ onOpenAuthModal, user, onLogout }) {
  // локальный стейт, чтобы показать/скрыть кнопку «Выйти»
  const [showLogout, setShowLogout] = useState(false);

  const handleNicknameClick = () => {
    // переключаем отображение кнопки «Выйти»
    setShowLogout((prev) => !prev);
  };

  return (
    <header className="header">
      {/* Верхняя навигационная панель */}
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

      {/* Нижняя часть: центрируем заголовок и строку поиска */}
      <div className="header-bottom">
        {/* Логотип */}
        <img
          src={logo}
          alt="JobPilot Logo"
          className="header-logo"
        />

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
            // если залогинен, показываем ник
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
            // если не залогинен, кнопка "Войти"
            <button className="login-btn" onClick={onOpenAuthModal}>
              Войти
            </button>
          )}

          <button className="publish-btn">
            Опубликовать вакансию
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;