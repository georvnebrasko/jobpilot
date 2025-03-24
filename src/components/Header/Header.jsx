// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

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
      <div className="header__top">
        <nav className="header__navbar">
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
      <div className="header__bottom">
        <Link to="/">
          <img src={logo} alt="JobPilot Logo" className="header__logo" />
        </Link>
        <div className="header__searchWrapper">
          <span className="header__myjob">Моя работа</span>
          <input
            type="text"
            placeholder="Название должности, ключевое слово, компания"
            className="header__search"
          />
        </div>
        <div className="header__buttons">
          {user ? (
            <div className="header__userloggedin">
              <span className="header__usernickname" onClick={handleNicknameClick}>
                {user.nickname}
              </span>
              {showLogout && (
                <button className="header__logoutbtn" onClick={onLogout}>
                  Выйти
                </button>
              )}
            </div>
          ) : (
            <button className="header__loginbtn" onClick={onOpenAuthModal}>
              Войти
            </button>
          )}
          <button className="header__publishbtn">Опубликовать вакансию</button>
        </div>
      </div>
    </header>
  );
}

export default Header;