// src/pages/Home.jsx
import React from 'react';

// Импортируем все основные компоненты из папки ../components
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Stats from '../components/Stats';
import PopularJobs from '../components/PopularJobs';
import HowItWorks from '../components/HowItWorks';
import PopularCategories from '../components/PopularCategories';

// ВАЖНО: Вот наш новый список вакансий
import JobList from '../components/JobList';

import BestCompanies from '../components/BestCompanies';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">
      {/* Шапка сайта */}
      <Header />

      {/* Главный баннер (Hero) с полем поиска */}
      <HeroSection />

      {/* Статистика (Рабочие места, Компании, Кандидаты...) */}
      <Stats />

      {/* Популярные вакансии (Хирург, Анестезиолог, etc.) */}
      <PopularJobs />

      {/* Как работает jobpilot */}
      <HowItWorks />

      {/* Популярные категории (Код, Маркетинг, Здравоохранение...) */}
      <PopularCategories />

      {/* Новый блок: Список вакансий (JobList) с иконками и кнопкой "Откликнуться" */}
      <JobList />

      {/* Лучшие компании (Яндекс, Газпром, Google и т.д.) */}
      <BestCompanies />

      {/* Отзывы клиентов */}
      <Testimonials />

      {/* Призыв к действию (CTA) */}
      <CTA />

      {/* Подвал (Footer) */}
      <Footer />
    </div>
  );
}

export default Home;