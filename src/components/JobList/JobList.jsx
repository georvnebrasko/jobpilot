// src/components/JobList.jsx
import React from 'react';
import './_job-list.scss';

// Импортируем картинки/логотипы (SVG, PNG, JPEG...):
import upworkLogo from '../../assets/images/up.svg';
import appleLogo from '../../assets/images/apple.svg';
import figmaLogo from '../../assets/images/figma.svg';
import uwLogo from '../../assets/images/gazprom.svg'; // или другое
import facebookLogo from '../../assets/images/facebook.svg';
import googleLogo from '../../assets/images/google.svg';

// Пример массива (можете добавить/убрать вакансии):
const jobsData = [
  {
    id: 1,
    companyLogo: upworkLogo,
    title: 'Старший дизайнер пользовательского опыта',
    type: 'Полный рабочий день',
    location: 'Пятигорск',
    salary: '30 000 – 35 000',
    daysLeft: 'Осталось 4 дня',
  },
  {
    id: 2,
    companyLogo: appleLogo,
    title: 'Программист',
    type: 'Полный рабочий день',
    location: 'Астрахань',
    salary: '50 000 - 60 000',
    daysLeft: 'Осталось 4 дня',
  },
  {
    id: 3,
    companyLogo: figmaLogo,
    title: 'Младший графический дизайнер',
    type: 'Полный рабочий день',
    location: 'Москва',
    salary: '50 000 - 70 000',
    daysLeft: 'Осталось 4 дня',
  },
  {
    id: 4,
    companyLogo: uwLogo, // Условно для «Udemy» или «Upwork»
    title: 'Дизайнер',
    type: 'Полный рабочий день',
    location: 'Санкт-Петербург',
    salary: '35 000 - 40 000',
    daysLeft: 'Осталось 4 дня',
  },
  {
    id: 5,
    companyLogo: facebookLogo,
    title: 'Маркетинговый специалист',
    type: 'Стажировка',
    location: 'Казань',
    salary: '50 000 - 90 000',
    daysLeft: 'Осталось 4 дня',
  },
  {
    id: 6,
    companyLogo: googleLogo,
    title: 'Дизайнер взаимодействия',
    type: 'Полный рабочий день',
    location: 'Москва',
    salary: '55 000 - 100 000',
    daysLeft: 'Осталось 4 дня',
  },
];

function JobList() {
  return (
    <section className="container job-list">
      {jobsData.map((job) => (
        <div className="job-card" key={job.id}>
          {/* Левая часть: Логотип + Основная инфо */}
          <div className="job-card-left">
            <img
              src={job.companyLogo}
              alt={job.title}
              className="image__logo"
              style={{ width: '40px', marginRight: '15px' }}
            />
            <div className="job-info">
              <h3 className="job-title">{job.title}</h3>
              <span className="job-type">{job.type}</span>
              <div className="job-meta">
                <span className="job-location">{job.location}</span>
                <span className="job-salary">{job.salary}</span>
                <span className="job-days-left">{job.daysLeft}</span>
              </div>
            </div>
          </div>

          {/* Правая часть: Кнопка отклика, иконка сохранения, etc. */}
          <div className="job-card-right">
            <button className="apply-btn">
              Откликнуться <span style={{ marginLeft: '8px' }}>→</span>
            </button>
            {/* Иконка закладки можно добавить <i className="bookmark-icon" /> */}
          </div>
        </div>
      ))}
    </section>
  );
}

export default JobList;