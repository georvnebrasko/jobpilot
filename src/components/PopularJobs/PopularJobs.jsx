import React from 'react';
import './_popular-jobs.scss';

function PopularJobs() {
  return (
    <section className="container popular-jobs">
      <h2>Самые популярные вакансии</h2>
      <div className="jobs-list">
        <div className="job-item">
          <h4>Анестезиолог</h4> <span>45,904 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Хирург</h4> <span>50,364 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Акушер-гинеколог</h4> <span>4,339 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Ортодонт</h4> <span>20,079 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Нейро-хирург</h4> <span>74,875 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Разработчик</h4> <span>43,359 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Психиатр</h4> <span>18,599 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Мастер по обработке данных</h4> <span>28,200 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Финансовый менеджер</h4> <span>61,391 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Анализ управления</h4> <span>93,046 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Менеджер по технологиям</h4> <span>50,963 Открытых вакансий</span>
        </div>
        <div className="job-item">
          <h4>Анализ операций исследования</h4> <span>16,627 Открытых вакансий</span>
        </div>
      </div>
    </section>
  );
}

export default PopularJobs;