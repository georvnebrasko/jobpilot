// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './_header.scss';

function Header({ onOpenAuthModal, user, onLogout }) {
  const [showLogout, setShowLogout] = useState(false);

  const handleNicknameClick = () => {
    setShowLogout(prev => !prev);
  };

  return (
    <header
      className="header"
      style={{
        position: 'fixed',  // <-- Делаем "прилипание" к верху
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999,        // <-- Чтобы перекрывать другие элементы
      }}
    >
      <div className="header-top">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/find-jobs">Найти работу</Link></li>
            <li><a href="#!">Работодатели</a></li>
            <li><a href="#!">Кандидаты</a></li>
            <li><a href="#!">Цены</a></li>
            <li><a href="#!">Поддержка клиентов</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-bottom">
        <Link to="/">
          <img src={logo} alt="JobPilot Logo" className="header-logo" />
        </Link>
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