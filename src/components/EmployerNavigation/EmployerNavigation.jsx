import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EmployerNavigation.scss';

export default function EmployerNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tabs = [
    { to: '',        label: 'Компания'      },
    { to: 'settings',label: 'Настройки'     },
    { to: 'vacancies', label: 'Мои вакансии' },
  ];

  return (
    <nav className="employerNavigation">
      {tabs.map(({ to, label }) => {
        // Строим полный путь вида "/employer-profile" или "/employer-profile/settings"
        const fullPath = to ? `/employer-profile/${to}` : '/employer-profile';
        const isActive = pathname === fullPath;

        return (
          <button
            key={to || 'index'}
            className={
              isActive
                ? 'employerNavigation__tab employerNavigation__tab--active'
                : 'employerNavigation__tab'
            }
            onClick={() => navigate(fullPath)}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
}