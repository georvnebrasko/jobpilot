// src/pages/EmployerProfile.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import EmployerNavigation from '../components/EmployerNavigation/EmployerNavigation';
import EmployerInfo       from '../components/EmployerInfo/EmployerInfo';
import EmployerSettings   from '../components/EmployerSettings/EmployerSettings';
import EmployerVacancies  from '../components/EmployerVacancies/EmployerVacancies';

function EmployerProfile({ user, onLogout }) {
  const [company, setCompany] = useState(() => {
    const saved = localStorage.getItem('employerProfile');
    return saved ? JSON.parse(saved) : {};
  });
  const navigate = useNavigate();

  // Сохранить изменения из настроек
  const handleSave = (data) => {
    setCompany(data);
    localStorage.setItem('employerProfile', JSON.stringify(data));
  };

  // Удалить аккаунт
  const handleDeleteAccount = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('employerProfile');
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const filtered = accounts.filter(
      acc => !(acc.nickname === user.nickname && acc.userType === 'employer')
    );
    localStorage.setItem('accounts', JSON.stringify(filtered));
    onLogout();
    navigate('/', { replace: true });
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
        </header>

        <EmployerNavigation />

        <div className="employer-profile__content">
          <Routes>
            <Route index element={<EmployerInfo company={company} />} />
            <Route
              path="settings"
              element={
                <EmployerSettings
                  key={JSON.stringify(company)}  // при любом новом company смонтируется заново
                  company={company}
                  onSave={handleSave}
                />
              }
            />
            <Route path="vacancies" element={<EmployerVacancies />} />
          </Routes>
        </div>

        <div className="employer-profile__actions">
          <button
            type="button"
            className="employer-profile__deleteBtn"
            onClick={handleDeleteAccount}
          >
            Удалить аккаунт
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployerProfile;