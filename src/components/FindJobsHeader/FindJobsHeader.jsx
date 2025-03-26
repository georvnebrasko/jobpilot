// src/components/FindJobsHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './FindJobsHeader.scss';

function FindJobsHeader({ companySearch, setCompanySearch }) {
  return (
    <header className="jobsHeader">
      {/* Верхняя навигация */}
      <div className="jobsHeader__nav">
        <ul className="jobsHeader__navList">
          <li className="jobsHeader__navItem">
            <Link to="/">Главная</Link>
          </li>
          <li className="jobsHeader__navItem">
            <a href="#!">Найти работу</a>
          </li>
          <li className="jobsHeader__navItem">
            <a href="#!">Работодатели</a>
          </li>
          <li className="jobsHeader__navItem">
            <a href="#!">Кандидаты</a>
          </li>
          <li className="jobsHeader__navItem">
            <a href="#!">Цены</a>
          </li>
          <li className="jobsHeader__navItem">
            <a href="#!">Поддержка клиентов</a>
          </li>
        </ul>
      </div>

      {/* Нижняя часть шапки */}
      <div className="jobsHeader__bottom">
        <Link to="/">
          <img src={logo} alt="JobPilot Logo" className="jobsHeader__logo" />
        </Link>

        <div className="jobsHeader__searchWrapper">
          <span className="jobsHeader__myJob">Моя работа</span>
          <input
            type="text"
            placeholder="Поиск по названию компании"
            className="jobsHeader__search"
            value={companySearch}
            onChange={(e) => setCompanySearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}

export default FindJobsHeader;