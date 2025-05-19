// src/components/EmployerSettings/EmployerSettings.jsx
import React, { useState } from 'react';
import './EmployerSettings.scss';

function EmployerSettings({ company, onSave }) {
  // инициализируем форму однократно из пропса company
  const [form, setForm] = useState(() => ({ ...company }));

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className="employer-settings" onSubmit={handleSubmit}>
      <h2 className="employer-settings__title">Настройки профиля</h2>

      <div className="employer-settings__grid">
        <label className="employer-settings__field">
          Название компании
          <input
            name="name"
            value={form.name || ''}
            onChange={handleChange}
            required
          />
        </label>

        <label className="employer-settings__field">
          Город / Регион
          <input
            name="city"
            value={form.city || ''}
            onChange={handleChange}
            required
          />
        </label>

        <label className="employer-settings__field">
          Телефон
          <input
            name="phone"
            value={form.phone || ''}
            onChange={handleChange}
            required
          />
        </label>

        <label className="employer-settings__field">
          Сайт
          <input
            name="website"
            value={form.website || ''}
            onChange={handleChange}
          />
        </label>

        <label className="employer-settings__field">
          Размер команды
          <input
            name="size"
            value={form.size || ''}
            onChange={handleChange}
          />
        </label>

        <label className="employer-settings__field">
          Отрасль
          <input
            name="industry"
            value={form.industry || ''}
            onChange={handleChange}
          />
        </label>

        <label className="employer-settings__field employer-settings__field--full">
          Описание компании
          <textarea
            name="about"
            rows="4"
            value={form.about || ''}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit" className="employer-settings__saveBtn">
        Сохранить
      </button>
    </form>
  );
}

export default EmployerSettings;