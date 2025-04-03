// src/components/ProfileNavigation/ProfileNavigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProfileNavigation.scss';

function ProfileNavigation() {
  return (
    <nav className="profileNavigation">
      <ul className="profileNavigation__list">
        <li className="profileNavigation__item">
          <NavLink 
            to="/personal-profile" 
            className="profileNavigation__link"
            activeclassname="profileNavigation__link--active"
          >
            Основная информация
          </NavLink>
        </li>
        <li className="profileNavigation__item">
          <NavLink 
            to="/personal-profile/settings" 
            className="profileNavigation__link"
            activeclassname="profileNavigation__link--active"
          >
            Настройки
          </NavLink>
        </li>
        <li className="profileNavigation__item">
          <NavLink 
            to="/personal-profile/applications" 
            className="profileNavigation__link"
            activeclassname="profileNavigation__link--active"
          >
            Мои отклики
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ProfileNavigation;