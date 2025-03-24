// src/components/Stats.jsx
import React from 'react';

// Уже существующие иконки
import companyIcon from '../../assets/images/company.svg';
import candidatesIcon from '../../assets/images/candidates.svg';

// Новые иконки для первого и четвёртого пункта
import jobIcon from '../../assets/images/job.svg';
import vacanciesIcon from '../../assets/images/job.svg';

import './_stats.scss';

function Stats() {
  return (
    <section className="container stats">
      {/* 1. Рабочее место (с новой иконкой jobIcon) */}
      <div className="stats-item">
        <img 
          src={jobIcon} 
          alt="Рабочее место" 
          className="stats-icon"
          style={{ width: '40px', marginBottom: '10px' }}
        />
        <h3>175 324</h3>
        <p>Рабочее место в реальном времени</p>
      </div>

      {/* 2. Компании (сохранено, как было) */}
      <div className="stats-item">
        <img 
          src={companyIcon} 
          alt="Компании" 
          className="stats-icon" 
          style={{ width: '40px', marginBottom: '10px' }}
        />
        <h3>97 354</h3>
        <p>Компании</p>
      </div>

      {/* 3. Кандидаты (сохранено, как было) */}
      <div className="stats-item">
        <img 
          src={candidatesIcon} 
          alt="Кандидаты" 
          className="stats-icon" 
          style={{ width: '40px', marginBottom: '10px' }}
        />
        <h3>384 715</h3>
        <p>Кандидаты</p>
      </div>

      {/* 4. Новые Вакансии (с новой иконкой vacanciesIcon) */}
      <div className="stats-item">
        <img 
          src={vacanciesIcon} 
          alt="Новые Вакансии"
          className="stats-icon"
          style={{ width: '40px', marginBottom: '10px' }}
        />
        <h3>7 532</h3>
        <p>Новые Вакансии</p>
      </div>
    </section>
  );
}

export default Stats;