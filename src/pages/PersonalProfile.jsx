// src/pages/PersonalProfile.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProfileNavigation from '../components/ProfileNavigation/ProfileNavigation';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
import ProfileSettings from '../components/ProfileSettings/ProfileSettings';
import ProfileApplications from '../components/ProfileApplications/ProfileApplications';

function PersonalProfile({ user, onLogout }) {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
      } catch (error) {
        console.error('Ошибка парсинга userProfile из localStorage:', error);
      }
    }
  }, []);

  // Сохранение настроек из ProfileSettings
  const handleProfileSave = (profileData) => {
    setProfile(profileData);
  };

  // Удаляем аккаунт из массива 'accounts' в localStorage
  // + стираем userProfile, чтобы пропали настройки
  // + делаем onLogout() и уводим пользователя на главную
  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm('Вы действительно хотите удалить аккаунт?');
    if (!confirmDelete) return;

    // 1) Удаляем из массива 'accounts'
    const allAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
    // Предполагается, что user.email хранит email:
    const updatedAccounts = allAccounts.filter(acc => acc.email !== user?.email);
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));

    // 2) Стираем данные профиля, если есть
    localStorage.removeItem('userProfile');

    // 3) Вызываем onLogout, чтобы сбросить состояние
    onLogout();

    // 4) Перенаправляем на главную
    navigate('/');
  };

  return (
    <div className="personalProfile">
      <div className="personalProfile__container">
        <h1 className="personalProfile__title">Личный кабинет</h1>
        
        <ProfileNavigation />

        <Routes>
          <Route path="/" element={<ProfileInfo user={profile} />} />
          <Route path="settings" element={<ProfileSettings onSave={handleProfileSave} />} />
          <Route path="applications" element={<ProfileApplications />} />
        </Routes>

        {/* Блок с кнопкой "Удалить аккаунт" */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button 
            style={{
              backgroundColor: '#d32f2f',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
            onClick={handleDeleteAccount}
          >
            Удалить аккаунт
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;