// src/components/ProfileSettings/ProfileSettings.jsx
import React, { useState, useEffect } from 'react';
import './ProfileSettings.scss';

function ProfileSettings({ onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    email: '',
    phone: '',
    gender: '',
    experience: '',
    maritalStatus: '',
    education: '',
    location: '',
    bio: '',
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      try {
        const parsedData = JSON.parse(savedProfile);
        setFormData(parsedData);
      } catch (error) {
        console.error('Ошибка парсинга сохранённых данных:', error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(formData));
    if (onSave) onSave(formData);
    alert('Данные сохранены!');
  };

  return (
    <form className="profileSettings" onSubmit={handleSubmit}>
      <h2 className="profileSettings__title">Настройки профиля</h2>
      
      <div className="profileSettings__fields">
        {[
          { label: 'Имя', name: 'name', type: 'text' },
          { label: 'Дата рождения', name: 'birthdate', type: 'date' },
          { label: 'Почта', name: 'email', type: 'email' },
          { label: 'Номер телефона', name: 'phone', type: 'text' },
          { label: 'Пол', name: 'gender', type: 'text' },
          { label: 'Опыт', name: 'experience', type: 'text' },
          { label: 'Семейное положение', name: 'maritalStatus', type: 'text' },
          { label: 'Образование', name: 'education', type: 'text' },
          { label: 'Место проживания', name: 'location', type: 'text' },
        ].map(({ label, name, type }) => (
          <div className="profileSettings__field" key={name}>
            <label className="profileSettings__label" htmlFor={name}>
              {label}
            </label>
            <input
              className="profileSettings__input"
              id={name}
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div className="profileSettings__field">
          <label className="profileSettings__label" htmlFor="bio">
            Биография
          </label>
          <textarea
            className="profileSettings__textarea"
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="profileSettings__saveButton" type="submit">
        Сохранить
      </button>
    </form>
  );
}

export default ProfileSettings;
