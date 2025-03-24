import React from 'react';
import './PopularJobs.scss';

function PopularJobs() {
  return (
    <section className="container popularJobs">
      <h2 className="popularJobs__title">Самые популярные вакансии</h2>

      <div className="popularJobs__list">
        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Анестезиолог</h4>
          <span className="popularJobs__positions">45,904 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Хирург</h4>
          <span className="popularJobs__positions">50,364 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Акушер-гинеколог</h4>
          <span className="popularJobs__positions">4,339 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Ортодонт</h4>
          <span className="popularJobs__positions">20,079 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Нейро-хирург</h4>
          <span className="popularJobs__positions">74,875 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Разработчик</h4>
          <span className="popularJobs__positions">43,359 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Психиатр</h4>
          <span className="popularJobs__positions">18,599 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Мастер по обработке данных</h4>
          <span className="popularJobs__positions">28,200 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Финансовый менеджер</h4>
          <span className="popularJobs__positions">61,391 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Анализ управления</h4>
          <span className="popularJobs__positions">93,046 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Менеджер по технологиям</h4>
          <span className="popularJobs__positions">50,963 Открытых вакансий</span>
        </div>

        <div className="popularJobs__item">
          <h4 className="popularJobs__jobTitle">Анализ операций исследования</h4>
          <span className="popularJobs__positions">16,627 Открытых вакансий</span>
        </div>
      </div>
    </section>
  );
}

export default PopularJobs;