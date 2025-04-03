// src/components/ProfileInfo/ProfileInfo.jsx
import React from 'react';
import './ProfileInfo.scss';

function ProfileInfo({ user }) {
  return (
    <div className="profileInfo">
      <h2 className="profileInfo__title">Информация о пользователе</h2>
      <div className="profileInfo__row">
        <span className="profileInfo__label">Имя:</span>
        <span className="profileInfo__value">{user?.name || 'Не указано'}</span>
      </div>
      <div className="profileInfo__row">
        <span className="profileInfo__label">Дата рождения:</span>
        <span className="profileInfo__value">{user?.birthdate || 'Не указано'}</span>
      </div>
      <div className="profileInfo__row">
        <span className="profileInfo__label">Почта:</span>
        <span className="profileInfo__value">{user?.email || 'Не указано'}</span>
      </div>
      <div className="profileInfo__row">
        <span className="profileInfo__label">Номер телефона:</span>
        <span className="profileInfo__value">{user?.phone || 'Не указано'}</span>
      </div>
      <div className="profileInfo__row">
        <span className="profileInfo__label">Пол:</span>
        <span className="profileInfo__value">{user?.gender || 'Не указано'}</span>
      </div>
      <div className="profileInfo__row">
        <span className="profileInfo__label">Опыт:</span>
        <span className="profileInfo__value">{user?.experience || 'Не указано'}</span>
      </div>
      <div className="profileInfo__row">
        <span className="profileInfo__label">Семейное положение:</span>
        <span className="profileInfo__value">{user?.maritalStatus || 'Не указано'}</span>
      </div>
      <div className="profileInfo__row">
        <span className="profileInfo__label">Образование:</span>
        <span className="profileInfo__value">{user?.education || 'Не указано'}</span>
      </div>
      <div className="profileInfo__row">
        <span className="profileInfo__label">Место проживания:</span>
        <span className="profileInfo__value">{user?.location || 'Не указано'}</span>
      </div>
      <div className="profileInfo__row profileInfo__bio">
        <span className="profileInfo__label">Биография:</span>
        <span className="profileInfo__value">{user?.bio || 'Не указано'}</span>
      </div>
    </div>
  );
}

export default ProfileInfo;