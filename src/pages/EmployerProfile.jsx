import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import EmployerNavigation from '../components/EmployerNavigation/EmployerNavigation';
import EmployerInfo       from '../components/EmployerInfo/EmployerInfo';
import EmployerSettings   from '../components/EmployerSettings/EmployerSettings';
import EmployerVacancies  from '../components/EmployerVacancies/EmployerVacancies';

function EmployerProfile({ user, onLogout }) {
  const [company, setCompany] = useState({});

  // Загрузить данные из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('employerProfile');
    if (saved) setCompany(JSON.parse(saved));
  }, []);

  // Сохранить из настроек
  const handleSave = (data) => {
    setCompany(data);
    localStorage.setItem('employerProfile', JSON.stringify(data));
  };

  // Редирект, если не залогинен или не работодатель
  if (!user || user.userType !== 'employer') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="employer-profile">
      <div className="employer-profile__container">
        <header className="employer-profile__header">
          <h1 className="employer-profile__title">Профиль работодателя</h1>
          <button
            className="employer-profile__logout-btn"
            onClick={onLogout}
          >
            Выйти
          </button>
        </header>

        <EmployerNavigation />

        <div className="employer-profile__content">
          <Routes>
            <Route index element={<EmployerInfo company={company} />} />
            <Route
              path="settings"
              element={<EmployerSettings company={company} onSave={handleSave} />}
            />
            <Route path="vacancies" element={<EmployerVacancies />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default EmployerProfile;