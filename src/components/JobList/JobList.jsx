// src/components/JobList.jsx
import React from 'react';
import './JobList.scss';

// Импортируем useNavigate для навигации
import { useNavigate } from 'react-router-dom';

// Импортируем картинки/логотипы (SVG, PNG, JPEG...):
import appleLogo from '../../assets/images/apple.svg';
import facebookLogo from '../../assets/images/facebook.svg';
import googleLogo from '../../assets/images/google.svg';
import yandexImg from '../../assets/images/yandexicon.svg';

// Пример массива (можете добавить/убрать вакансии):
const jobsData = [
  {
    id: 1,
    companyLogo: appleLogo,
    title: 'Младший графический дизайнер',
    type: 'Полный рабочий день',
    location: 'Майами',
    salary: '$3500',
    daysLeft: 'Осталось 9 дней',
  },
  {
    id: 2,
    companyLogo: googleLogo,
    title: 'Визуальный дизайнер',
    type: 'Полный рабочий день',
    location: 'Вашингтон',
    salary: '$5000',
    daysLeft: 'Осталось 4 дня',
  },
  {
    id: 4,
    companyLogo: facebookLogo,
    title: 'Фронтенд-разработчик',
    type: 'Полный рабочий день',
    location: 'Чикаго',
    salary: '$7500',
    daysLeft: 'Осталось 3 дня',
  },
  {
    id: 6,
    companyLogo: yandexImg,
    title: 'Маркетолог',
    type: 'Полный рабочий день',
    location: 'Москва',
    salary: '$1500',
    daysLeft: 'Осталось 4 дня',
  },
  {
    id: 0,
    companyLogo: appleLogo,
    title: 'Старший UX-дизайнер',
    type: 'Стажировка',
    location: 'Нью-Йорк',
    salary: '$11000',
    daysLeft: 'Осталось 11 дней',
  },
  {
    id: 7,
    companyLogo: yandexImg,
    title: 'Таргетолог',
    type: 'Полный рабочий день',
    location: 'Санкт-Петербург',
    salary: '$2000',
    daysLeft: 'Осталось 5 дней',
  },
];

function JobList() {
  // Подключаем навигацию
  const navigate = useNavigate();

  // Функция, которая будет вызываться при нажатии на кнопку "Откликнуться"
  const handleApply = (jobId) => {
    // Переходим на страницу подробного описания вакансии
    navigate(`/vacancy/${jobId}`);
  };

  return (
    <section className="container jobList">
      {jobsData.map((job) => (
        <div className="jobList__card" key={job.id}>
          {/* Левая часть: Логотип + Основная инфо */}
          <div className="jobList__cardleft">
            <img
              src={job.companyLogo}
              alt={job.title}
              className="jobList__logo"
              style={{ width: '40px', marginRight: '15px' }}
            />
            <div className="jobList__info">
              <h3 className="jobList__title">{job.title}</h3>
              <span className="jobList__type">{job.type}</span>
              <div className="jobList__meta">
                <span className="jobList__location">{job.location}</span>
                <span className="jobList__salary">{job.salary}</span>
                <span className="jobList__daysleft">{job.daysLeft}</span>
              </div>
            </div>
          </div>

          {/* Правая часть: Кнопка отклика, иконка сохранения, etc. */}
          <div className="jobList__cardright">
            <button 
              className="jobList__applybtn"
              onClick={() => handleApply(job.id)}
            >
              Откликнуться <span style={{ marginLeft: '8px' }}>→</span>
            </button>
            {/* Иконка закладки можно добавить <i className="jobList__bookmarkIcon" /> */}
          </div>
        </div>
      ))}
    </section>
  );
}

export default JobList;