// src/pages/FindJobs.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FindJobs.scss';
import logo from '../assets/images/logo.svg';

// Импорт иконок компаний
import appleImg from '../assets/images/apple.svg';
import googleImg from '../assets/images/google.svg';
import facebookImg from '../assets/images/facebook.svg';
import yandexImg from '../assets/images/yandexicon.svg';

// Массив вакансий (8 шт, 4 компании по 2 вакансии)
const initialJobs = [
  {
    title: 'Старший UX-дизайнер',
    city: 'Москва',
    salary: '30 000 - 35 000',
    category: 'design',
    company: 'Apple',
    companyIcon: appleImg
  },
  {
    title: 'Младший графический дизайнер',
    city: 'Санкт-Петербург',
    salary: '50 000 - 70 000',
    category: 'design',
    company: 'Apple',
    companyIcon: appleImg
  },
  {
    title: 'Визуальный дизайнер',
    city: 'Ростов',
    salary: '20 000 - 25 000',
    category: 'design',
    company: 'Google',
    companyIcon: googleImg
  },
  {
    title: 'Инженер-программист',
    city: 'Казань',
    salary: '15 000 - 20 000',
    category: 'it',
    company: 'Google',
    companyIcon: googleImg
  },
  {
    title: 'Фронтенд-разработчик',
    city: 'Астрахань',
    salary: '50 000 - 60 000',
    category: 'it',
    company: 'Facebook',
    companyIcon: facebookImg
  },
  {
    title: 'Бэкенд-разработчик',
    city: 'Москва',
    salary: '35 000 - 40 000',
    category: 'it',
    company: 'Facebook',
    companyIcon: facebookImg
  },
  {
    title: 'Маркетолог',
    city: 'Казань',
    salary: '20 000 - 25 000',
    category: 'marketing',
    company: 'Яндекс',
    companyIcon: yandexImg
  },
  {
    title: 'Таргетолог',
    city: 'Санкт-Петербург',
    salary: '50 000 - 90 000',
    category: 'marketing',
    company: 'Яндекс',
    companyIcon: yandexImg
  }
];

// Три "страницы" - разный порядок индексов
const pageOrders = [
  [0,1,2,3,4,5,6,7],
  [3,0,2,5,1,7,6,4],
  [2,4,7,1,3,6,0,5]
];

function FindJobs() {
  // Поля поиска
  const [companySearch, setCompanySearch] = useState('');
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Пагинация
  const [currentPage, setCurrentPage] = useState(1);

  // Фильтр (ваш старый код)
  const filteredJobs = initialJobs.filter((job) => {
    const matchesCompany = job.company.toLowerCase().includes(companySearch.toLowerCase());
    const matchesTitle = job.title.toLowerCase().includes(keyword.toLowerCase());
    const matchesLocation = job.city.toLowerCase().includes(location.toLowerCase());
    const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
    return matchesCompany && matchesTitle && matchesLocation && matchesCategory;
  });

  // Применяем порядок текущей страницы
  const order = pageOrders[currentPage - 1];
  const finalJobs = order
    .map(i => filteredJobs[i])
    .filter(job => job !== undefined);

  // Функции пагинации
  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= 3) {
      setCurrentPage(pageNum);
    }
  };
  const goNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="find-jobs-page">
      {/* Навигационная панель (вернули) */}
      <div className="find-jobs-nav">
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><a href="#!">Найти работу</a></li>
          <li><a href="#!">Работодатели</a></li>
          <li><a href="#!">Кандидаты</a></li>
          <li><a href="#!">Цены</a></li>
          <li><a href="#!">Поддержка</a></li>
        </ul>
      </div>

      {/* Верхняя панель */}
      <div className="find-jobs-header">
        <img src={logo} alt="Job Logo" className="jobs-logo" />
        <Link to="/" className="company-name">Моя работа</Link>
        <div className="jobs-search-input">
          <input
            type="text"
            placeholder="Поиск по названию компании"
            value={companySearch}
            onChange={(e) => setCompanySearch(e.target.value)}
          />
        </div>
      </div>

      <h1>Найти работу</h1>

      {/* Расширенная панель поиска */}
      <div className="find-jobs-search">
        <input
          type="text"
          className="job-keywords"
          placeholder="Я ищу вакансию (ключевые слова)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input
          type="text"
          className="job-location"
          placeholder="Место"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select
          className="job-category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Все категории</option>
          <option value="design">Дизайн</option>
          <option value="it">IT</option>
          <option value="marketing">Маркетинг</option>
        </select>
        <button className="search-button">Найти работу</button>
      </div>

      {/* Сетка карточек */}
      <div className="job-cards-grid">
        {finalJobs.map((job, idx) => (
          <div className="job-card" key={idx}>
            <div className="company-info">
              <img src={job.companyIcon} alt={job.company} className="company-icon" />
              <p>{job.company}</p>
            </div>
            <h4>{job.title}</h4>
            <p>{job.city}</p>
            <p>{job.salary}</p>
            <button>Откликнуться</button>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className="pagination">
        <button onClick={goPrev} className="arrow-btn">{'<'}</button>

        <button
          onClick={() => goToPage(1)}
          className={`page-btn ${currentPage === 1 ? 'active' : ''}`}
        >
          01
        </button>
        <button
          onClick={() => goToPage(2)}
          className={`page-btn ${currentPage === 2 ? 'active' : ''}`}
        >
          02
        </button>
        <button
          onClick={() => goToPage(3)}
          className={`page-btn ${currentPage === 3 ? 'active' : ''}`}
        >
          03
        </button>

        <button onClick={goNext} className="arrow-btn">{'>'}</button>
      </div>
    </div>
  );
}

export default FindJobs;