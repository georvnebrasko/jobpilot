// src/pages/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ДОБАВЛЕНО: для навигации
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Stats from '../components/Stats';
import PopularJobs from '../components/PopularJobs';
import HowItWorks from '../components/HowItWorks';
import PopularCategories from '../components/PopularCategories';
import JobList from '../components/JobList';
import BestCompanies from '../components/BestCompanies';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function Home({ onOpenAuthModal, user, onLogout }) {
  // Состояния для контекстного поиска:
  // Верхняя строка — поиск по компании, вакансии и ключевым словам
  const [topSearch, setTopSearch] = useState('');
  // В HeroSection: левая область для вакансии и ключевых слов
  const [vacancySearch, setVacancySearch] = useState('');
  // В HeroSection: правая область для места
  const [locationSearch, setLocationSearch] = useState('');

  // ДОБАВЛЕНО: хук для перехода на другую страницу
  const navigate = useNavigate();

  // ДОБАВЛЕНО: функция, вызываемая при нажатии "Найти работу" в HeroSection
  const handleHeroSearch = () => {
    // Формируем query из двух полей HeroSection
    const query = new URLSearchParams({
      job: vacancySearch,
      loc: locationSearch
    }).toString();
    // Переходим на /find-jobs?job=...&loc=...
    navigate(`/find-jobs?${query}`);
  };

  return (
    <div className="home-page">
      <Header 
        onOpenAuthModal={onOpenAuthModal} 
        user={user} 
        onLogout={onLogout}
        topSearch={topSearch}
        onChangeTopSearch={setTopSearch}
      />
      <HeroSection 
        vacancySearch={vacancySearch}
        onChangeVacancy={setVacancySearch}
        locationSearch={locationSearch}
        onChangeLocation={setLocationSearch}
        onSearchClick={handleHeroSearch} // <-- ПЕРЕДАЁМ в HeroSection
      />
      <Stats />
      <PopularJobs />
      <HowItWorks />
      <PopularCategories />
      <JobList />
      <BestCompanies />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;