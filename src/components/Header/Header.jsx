// src/components/Header/Header.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

function Header({ onOpenAuthModal, user, onLogout }) {
  const location = useLocation();
  const navigate  = useNavigate();

  /* куда вести по нику (соискатель / работодатель) */
  const profilePath =
    user?.userType === 'employer' ? '/employer-profile' : '/personal-profile';

  /* выход */
  const handleLogoutClick = () => {
    onLogout();

    /* если выходим из профиля — возвращаемся на главную */
    if (
      location.pathname === '/personal-profile' ||
      location.pathname === '/employer-profile'
    ) {
      navigate('/');
    }
  };

  return (
    <header className="header">
      {/* ===== верхняя навигация ===== */}
      <div className="header__top">
        <nav className="header__navbar">
          <ul className="header__navbarList">
            <li className="header__navbarItem">
              <Link to="/">Главная</Link>
            </li>
            <li className="header__navbarItem">
              <Link to="/find-jobs">Найти работу</Link>
            </li>
            <li className="header__navbarItem">
              <Link to="/support">Поддержка клиентов</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* ===== нижняя зона (логотип, поиск, действия) ===== */}
      <div className="header__bottom">
        <Link to="/" className="header__logoLink">
          <img className="header__logo" src={logo} alt="JobPilot logo" />
        </Link>

        <div className="header__searchWrapper">
          <span className="header__myjob">Моя работа</span>
          <input
            className="header__search"
            type="text"
            placeholder="Название должности, ключевое слово, компания"
          />
        </div>

        <div className="header__buttons">
          {user ? (
            <>
              {/* ник + выход */}
              <div className="header__userloggedin">
                <Link to={profilePath} className="header__usernickname">
                  {user.nickname}
                </Link>
                <button
                  className="header__logoutbtn"
                  type="button"
                  onClick={handleLogoutClick}
                >
                  Выйти
                </button>
              </div>

              {/* «опубликовать вакансию» — только для работодателя */}
              {user.userType === 'employer' && (
                <button className="header__publishbtn" type="button">
                  Опубликовать вакансию
                </button>
              )}
            </>
          ) : (
            <button
              className="header__loginbtn"
              type="button"
              onClick={onOpenAuthModal}
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;