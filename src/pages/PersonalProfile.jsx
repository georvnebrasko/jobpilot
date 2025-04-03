// src/pages/PersonalProfile.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileNavigation from '../components/ProfileNavigation/ProfileNavigation';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
import ProfileSettings from '../components/ProfileSettings/ProfileSettings';
import ProfileApplications from '../components/ProfileApplications/ProfileApplications';

function PersonalProfile({ user, onLogout }) {
  // Локальный стейт для данных профиля (сохранённых через настройки)
  const [profile, setProfile] = useState({});

  // При монтировании пытаемся загрузить сохранённые данные из localStorage
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

  // Обработчик сохранения данных из ProfileSettings
  const handleProfileSave = (profileData) => {
    setProfile(profileData);
  };

  return (
    <div className="personalProfile">
      <div className="personalProfile__container">
        <h1 className="personalProfile__title">Личный кабинет</h1>
        
        {/* Навигация по разделам */}
        <ProfileNavigation />

        {/* Вложенные маршруты: основная информация или настройки */}
        <Routes>
          <Route path="/" element={<ProfileInfo user={profile} />} />
          <Route path="settings" element={<ProfileSettings onSave={handleProfileSave} />} />
          <Route path="applications" element={<ProfileApplications />} />
          {/* Пример для откликов:
          <Route path="applications" element={<ProfileApplications />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default PersonalProfile;