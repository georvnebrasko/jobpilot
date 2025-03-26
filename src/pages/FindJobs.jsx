// src/pages/FindJobs.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// Импорт картинок:
import logo from '../assets/images/logo.svg';
import appleImg from '../assets/images/apple.svg';
import googleImg from '../assets/images/google.svg';
import facebookImg from '../assets/images/facebook.svg';
import yandexImg from '../assets/images/yandexicon.svg';

// Импорт созданных компонентов:
import FindJobsHeader from '../components/FindJobsHeader/FindJobsHeader';
import FindJobsSearch from '../components/FindJobsSearch/FindJobsSearch';
import JobCardsGrid from '../components/JobCardsGrid/JobCardsGrid';
import PaginationBlock from '../components/PaginationBlock/PaginationBlock';

// Массив вакансий (8 шт, 4 компании по 2 вакансии)
const initialJobs = [
  {
    title: 'Старший UX-дизайнер',
    city: 'Москва',
    salary: '30 000 - 35 000',
    category: 'design',
    company: 'Apple',
    companyIcon: appleImg,
  },
  {
    title: 'Младший графический дизайнер',
    city: 'Санкт-Петербург',
    salary: '50 000 - 70 000',
    category: 'design',
    company: 'Apple',
    companyIcon: appleImg,
  },
  {
    title: 'Визуальный дизайнер',
    city: 'Ростов',
    salary: '20 000 - 25 000',
    category: 'design',
    company: 'Google',
    companyIcon: googleImg,
  },
  {
    title: 'Инженер-программист',
    city: 'Казань',
    salary: '15 000 - 20 000',
    category: 'it',
    company: 'Google',
    companyIcon: googleImg,
  },
  {
    title: 'Фронтенд-разработчик',
    city: 'Астрахань',
    salary: '50 000 - 60 000',
    category: 'it',
    company: 'Facebook',
    companyIcon: facebookImg,
  },
  {
    title: 'Бэкенд-разработчик',
    city: 'Москва',
    salary: '35 000 - 40 000',
    category: 'it',
    company: 'Facebook',
    companyIcon: facebookImg,
  },
  {
    title: 'Маркетолог',
    city: 'Казань',
    salary: '20 000 - 25 000',
    category: 'marketing',
    company: 'Яндекс',
    companyIcon: yandexImg,
  },
  {
    title: 'Таргетолог',
    city: 'Санкт-Петербург',
    salary: '50 000 - 90 000',
    category: 'marketing',
    company: 'Яндекс',
    companyIcon: yandexImg,
  },
];

// Три "страницы" - разный порядок индексов
const pageOrders = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [3, 0, 2, 5, 1, 7, 6, 4],
  [2, 4, 7, 1, 3, 6, 0, 5],
];

function FindJobs() {
  // Считываем query-параметры через useSearchParams
  const [searchParams] = useSearchParams();

  // Берем значения 'job' и 'loc' из query (или пустую строку, если нет)
  const initialJobParam = searchParams.get('job') || '';
  const initialLoc = searchParams.get('loc') || '';

  // Поля для поиска:
  const [companySearch, setCompanySearch] = useState('');
  const [keyword, setKeyword] = useState(initialJobParam);
  const [location, setLocation] = useState(initialLoc);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Если query-параметры изменятся, обновляем поля keyword и location
  useEffect(() => {
    setKeyword(searchParams.get('job') || '');
    setLocation(searchParams.get('loc') || '');
  }, [searchParams]);

  // Пагинация
  const [currentPage, setCurrentPage] = useState(1);
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

  // Фильтрация вакансий
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
    .map((i) => filteredJobs[i])
    .filter((job) => job !== undefined);

  return (
    <>
      {/* Шапка на всю ширину (FindJobsHeader) вынесена за пределы основного контейнера */}
      <FindJobsHeader
        logo={logo}
        companySearch={companySearch}
        setCompanySearch={setCompanySearch}
      />

      {/* Остальной контент страницы (в контейнере с padding, если нужно) */}
      <div className="findJobsPage">
        <h1>Найти работу</h1>

        <FindJobsSearch
          keyword={keyword}
          setKeyword={setKeyword}
          location={location}
          setLocation={setLocation}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <JobCardsGrid finalJobs={finalJobs} />

        <PaginationBlock
          currentPage={currentPage}
          goToPage={goToPage}
          goPrev={goPrev}
          goNext={goNext}
        />
      </div>
    </>
  );
}

export default FindJobs;