import React from 'react';
import './EmployerInfo.scss';

function EmployerInfo({ company }) {
  return (
    <div className="employer-info">
      <h2 className="employer-info__title">Информация о компании</h2>
      <div className="employer-info__grid">
        <div className="employer-info__item">
          <span className="employer-info__label">Название:</span>
          <span className="employer-info__value">{company.name || '—'}</span>
        </div>
        <div className="employer-info__item">
          <span className="employer-info__label">Город:</span>
          <span className="employer-info__value">{company.city || '—'}</span>
        </div>
        <div className="employer-info__item">
          <span className="employer-info__label">Телефон:</span>
          <span className="employer-info__value">{company.phone || '—'}</span>
        </div>
        <div className="employer-info__item">
          <span className="employer-info__label">Сайт:</span>
          <span className="employer-info__value">{company.website || '—'}</span>
        </div>
        <div className="employer-info__item">
          <span className="employer-info__label">Размер команды:</span>
          <span className="employer-info__value">{company.size || '—'}</span>
        </div>
        <div className="employer-info__item">
          <span className="employer-info__label">Отрасль:</span>
          <span className="employer-info__value">{company.industry || '—'}</span>
        </div>
        <div className="employer-info__item employer-info__item--full">
          <span className="employer-info__label">Описание:</span>
          <span className="employer-info__value">{company.about || '—'}</span>
        </div>
      </div>
    </div>
  );
}

export default EmployerInfo;