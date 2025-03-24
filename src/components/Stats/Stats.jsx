import React from 'react';

// Иконки
import companyIcon from '../../assets/images/company.svg';
import candidatesIcon from '../../assets/images/candidates.svg';
import jobIcon from '../../assets/images/job.svg';
import vacanciesIcon from '../../assets/images/job.svg';

import './Stats.scss';

function Stats() {
  return (
    <section className="container statsBlock">
      {/* 1. Рабочее место */}
      <div className="statsBlock__item">
        <img
          src={jobIcon}
          alt="Рабочее место"
          className="statsBlock__icon"
          style={{ width: '40px', marginBottom: '10px' }}
        />
        <h3 className="statsBlock__number">175 324</h3>
        <p className="statsBlock__text">Рабочее место в реальном времени</p>
      </div>

      {/* 2. Компании */}
      <div className="statsBlock__item">
        <img
          src={companyIcon}
          alt="Компании"
          className="statsBlock__icon"
          style={{ width: '40px', marginBottom: '10px' }}
        />
        <h3 className="statsBlock__number">97 354</h3>
        <p className="statsBlock__text">Компании</p>
      </div>

      {/* 3. Кандидаты */}
      <div className="statsBlock__item">
        <img
          src={candidatesIcon}
          alt="Кандидаты"
          className="statsBlock__icon"
          style={{ width: '40px', marginBottom: '10px' }}
        />
        <h3 className="statsBlock__number">384 715</h3>
        <p className="statsBlock__text">Кандидаты</p>
      </div>

      {/* 4. Новые Вакансии */}
      <div className="statsBlock__item">
        <img
          src={vacanciesIcon}
          alt="Новые Вакансии"
          className="statsBlock__icon"
          style={{ width: '40px', marginBottom: '10px' }}
        />
        <h3 className="statsBlock__number">7 532</h3>
        <p className="statsBlock__text">Новые Вакансии</p>
      </div>
    </section>
  );
}

export default Stats;