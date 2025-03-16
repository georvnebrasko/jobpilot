import React from 'react';
import logo from '../assets/images/logo.svg';

function Header({ onOpenAuthModal }) {
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
        <div className="header-bottom-left">
          <span className="my-job">Моя работа</span>
          <input
            type="text"
            placeholder="Название должности, ключевое слово, компания"
            className="header-search"
          />
        </div>
        <div className="header-bottom-right">
          <button className="login-btn" onClick={onOpenAuthModal}>Войти</button>
          <button className="publish-btn">Опубликовать вакансию</button>
        </div>
      </div>
    </header>
  );
}

export default Header;