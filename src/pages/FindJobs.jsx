// src/pages/FindJobs.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import appleImg from '../assets/images/apple.svg';
import googleImg from '../assets/images/google.svg';
import facebookImg from '../assets/images/facebook.svg';
import yandexImg from '../assets/images/yandexicon.svg';

import FindJobsSearch from '../components/FindJobsSearch/FindJobsSearch';
import JobCardsGrid from '../components/JobCardsGrid/JobCardsGrid';
import PaginationBlock from '../components/PaginationBlock/PaginationBlock';

const initialJobs = [
  {
    id: 0,
    title: 'Старший UX-дизайнер',
    city: 'Москва',
    salary: '30 000 - 35 000',
    category: 'design',
    company: 'Apple',
    companyIcon: appleImg,
    postedDate: '15 августа 2025',
    dueDate: '15 октября 2025',
    education: 'Высшее',
    experience: '7 лет',
    description: 'Описание работы для Старшего UX-дизайнера...',
    responsibilities: [
      'Разрабатывать UX-стратегию',
      'Взаимодействовать с командой разработчиков',
      'Проводить юзабилити-тестирования',
    ],
  },
  {
    id: 1,
    title: 'Младший графический дизайнер',
    city: 'Санкт-Петербург',
    salary: '50 000 - 70 000',
    category: 'design',
    company: 'Apple',
    companyIcon: appleImg,
    postedDate: '1 сентября 2025',
    dueDate: '1 ноября 2025',
    education: 'Среднее специальное',
    experience: '1-3 года',
    description: 'Описание работы для Младшего графического дизайнера...',
    responsibilities: [
      'Создавать баннеры и макеты',
      'Помогать старшим дизайнерам',
      'Выполнять правки по макетам',
    ],
  },
  {
    id: 2,
    title: 'Визуальный дизайнер',
    city: 'Ростов',
    salary: '20 000 - 25 000',
    category: 'design',
    company: 'Google',
    companyIcon: googleImg,
    postedDate: '20 июля 2025',
    dueDate: '20 сентября 2025',
    education: 'Высшее',
    experience: '3-5 лет',
    description: 'Описание работы для Визуального дизайнера...',
    responsibilities: [
      'Разработка визуальных концепций',
      'Работа с брендбуком',
      'Контроль качества графики',
    ],
  },
  {
    id: 3,
    title: 'Инженер-программист',
    city: 'Казань',
    salary: '15 000 - 20 000',
    category: 'it',
    company: 'Google',
    companyIcon: googleImg,
    postedDate: '10 июня 2025',
    dueDate: '10 августа 2025',
    education: 'Высшее',
    experience: '5-7 лет',
    description: 'Описание работы для Инженера-программиста...',
    responsibilities: [
      'Разработка алгоритмов',
      'Оптимизация производительности',
      'Поддержка существующего кода',
    ],
  },
  {
    id: 4,
    title: 'Фронтенд-разработчик',
    city: 'Астрахань',
    salary: '50 000 - 60 000',
    category: 'it',
    company: 'Facebook',
    companyIcon: facebookImg,
    postedDate: '5 мая 2025',
    dueDate: '5 июля 2025',
    education: 'Высшее',
    experience: '3-5 лет',
    description: 'Описание работы для Фронтенд-разработчика...',
    responsibilities: [
      'Разработка UI на React',
      'Верстка адаптивных интерфейсов',
      'Интеграция с backend-API',
    ],
  },
  {
    id: 5,
    title: 'Бэкенд-разработчик',
    city: 'Москва',
    salary: '35 000 - 40 000',
    category: 'it',
    company: 'Facebook',
    companyIcon: facebookImg,
    postedDate: '12 апреля 2025',
    dueDate: '12 июня 2025',
    education: 'Высшее',
    experience: '4-6 лет',
    description: 'Описание работы для Бэкенд-разработчика...',
    responsibilities: [
      'Проектирование баз данных',
      'Создание REST API',
      'Оптимизация запросов',
    ],
  },
  {
    id: 6,
    title: 'Маркетолог',
    city: 'Казань',
    salary: '20 000 - 25 000',
    category: 'marketing',
    company: 'Яндекс',
    companyIcon: yandexImg,
    postedDate: '1 марта 2025',
    dueDate: '1 мая 2025',
    education: 'Высшее',
    experience: '2-4 года',
    description: 'Описание работы для Маркетолога...',
    responsibilities: [
      'Проведение маркетинговых исследований',
      'Разработка рекламных кампаний',
      'Анализ эффективности продвижения',
    ],
  },
  {
    id: 7,
    title: 'Таргетолог',
    city: 'Санкт-Петербург',
    salary: '50 000 - 90 000',
    category: 'marketing',
    company: 'Яндекс',
    companyIcon: yandexImg,
    postedDate: '20 февраля 2025',
    dueDate: '20 апреля 2025',
    education: 'Среднее специальное',
    experience: '1-2 года',
    description: 'Описание работы для Таргетолога...',
    responsibilities: [
      'Настройка таргетированной рекламы',
      'Анализ аудитории',
      'Оптимизация рекламных бюджетов',
    ],
  },
];

// Три "страницы" — разный порядок индексов
const pageOrders = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [3, 0, 2, 5, 1, 7, 6, 4],
  [2, 4, 7, 1, 3, 6, 0, 5],
];

function FindJobs() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialJobParam = searchParams.get('job') || '';
  const initialLoc = searchParams.get('loc') || '';

  // Поля для поиска:
  const [companySearch] = useState('');
  const [keyword, setKeyword] = useState(initialJobParam);
  const [location, setLocation] = useState(initialLoc);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setKeyword(searchParams.get('job') || '');
    setLocation(searchParams.get('loc') || '');
  }, [searchParams]);

  // Пагинация:
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

  // Фильтрация вакансий:
  const filteredJobs = initialJobs.filter((job) => {
    const matchesCompany = job.company.toLowerCase().includes(companySearch.toLowerCase());
    const matchesTitle = job.title.toLowerCase().includes(keyword.toLowerCase());
    const matchesLocation = job.city.toLowerCase().includes(location.toLowerCase());
    const matchesCategory = selectedCategory ? job.category === selectedCategory : true;
    return matchesCompany && matchesTitle && matchesLocation && matchesCategory;
  });

  const order = pageOrders[currentPage - 1];
  const finalJobs = order
    .map((i) => filteredJobs[i])
    .filter((job) => job !== undefined);

  // При клике на вакансию переходим на новый маршрут /vacancy/:jobId
  const handleJobClick = (index) => {
    navigate(`/vacancy/${index}`);
  };

  return (
    <>
      {/* Header теперь общий, поэтому его не импортируем здесь */}
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
        <JobCardsGrid finalJobs={finalJobs} onJobClick={handleJobClick} />
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