import React from 'react';
import { Link } from 'react-router-dom';
import './FindJobsNav.scss';

function FindJobsNav() {
  return (
    <div className="findJobsNav">
      <ul className="findJobsNav__list">
        <li className="findJobsNav__item">
          <Link to="/" className="findJobsNav__link">Главная</Link>
        </li>
        <li className="findJobsNav__item">
          <a href="#!" className="findJobsNav__link">Найти работу</a>
        </li>
        <li className="findJobsNav__item">
          <a href="#!" className="findJobsNav__link">Работодатели</a>
        </li>
        <li className="findJobsNav__item">
          <a href="#!" className="findJobsNav__link">Кандидаты</a>
        </li>
        <li className="findJobsNav__item">
          <a href="#!" className="findJobsNav__link">Цены</a>
        </li>
        <li className="findJobsNav__item">
          <a href="#!" className="findJobsNav__link">Поддержка</a>
        </li>
      </ul>
    </div>
  );
}

export default FindJobsNav;