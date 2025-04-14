// src/components/Header.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

function Header({ onOpenAuthModal, user, onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogoutClick() {
    onLogout();
    if (location.pathname === '/personal-profile') {
      navigate('/');
    }
  }

  return (
    <header className="header">
      <div className="header__top">
        <nav className="header__navbar">
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/find-jobs">Найти работу</Link>
            </li>
            <li>
              {/* Переходим по маршруту /support */}
              <Link to="/support">Поддержка клиентов</Link>
            </li>
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
              <Link to="/personal-profile" className="header__usernickname">
                {user.nickname}
              </Link>
              <button
                type="button"
                className="header__logoutbtn"
                onClick={handleLogoutClick}
              >
                Выйти
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="header__loginbtn"
              onClick={onOpenAuthModal}
            >
              Войти
            </button>
          )}

          <button className="header__publishbtn" type="button">
            Опубликовать вакансию
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;