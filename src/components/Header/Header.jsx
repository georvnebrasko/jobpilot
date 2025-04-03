// src/components/Header.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

function Header({ onOpenAuthModal, user, onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    // Если мы на странице PersonalProfile, переходим на главную страницу
    if (location.pathname === '/personal-profile') {
      navigate('/');
    }
  };

  return (
    <header
      className="header"
      style={{
        position: 'sticky', // или fixed, если требуется
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
      }}
    >
      <div className="header__top">
        <nav className="header__navbar">
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/find-jobs">Найти работу</Link></li>
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
              <Link to="/personal-profile" className="header__usernickname">
                {user.nickname}
              </Link>
              <button className="header__logoutbtn" onClick={handleLogoutClick}>
                Выйти
              </button>
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