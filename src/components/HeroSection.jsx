// src/components/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ДОБАВЛЕНО: для навигации
import illustration from '../assets/images/Illustration.svg';
import { useState } from 'react';

function HeroSection({
  onJobChange,   // функция, вызываемая при изменении левого инпута
  onPlaceChange, // функция, вызываемая при изменении правого инпута
  onSearchClick  // функция, вызываемая при нажатии на кнопку "Найти работу" (если нужна)
}) {
  // ДОБАВЛЕНО: для перехода на /find-jobs
  const navigate = useNavigate();
  const [jobValue, setJobValue] = useState('');
  const [placeValue, setPlaceValue] = useState('');

  // ДОБАВЛЕНО: обработчик нажатия кнопки
  const handleSearch = () => {
    // Если есть внешняя функция onSearchClick, вызовем её
    if (onSearchClick) {
      onSearchClick();
    }
    // Сформируем query из двух полей
    const query = new URLSearchParams({
      job: jobValue,
      loc: placeValue
    }).toString();

    // Переходим на /find-jobs?job=...&loc=...
    navigate(`/find-jobs?${query}`);
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Найдите работу, которая <br />
          подходит вам по интересам и навыкам. <br />
        </h1>
        <div className="search-block">
          {/* Левый инпут - Должность, ключевое слово */}
          <input
            type="text"
            className="search-input"
            placeholder="Должность, ключевое слово"
            value={jobValue}
            onChange={event => setJobValue(event.target.value)}
          />

          {/* Правый инпут - Местоположение */}
          <input
            type="text"
            className="location-input"
            placeholder="Ваше местоположение"
            value={placeValue}
            onChange={event => setPlaceValue(event.target.value)}
          />

          {/* Кнопка - вызов общего поиска */}
          <button
            className="search-button"
            // ИСПРАВЛЕНО: вместо onClick={() => onSearchClick && onSearchClick()}
            // вызываем handleSearch, где и формируем navigate
            onClick={handleSearch}
          >
            Найти работу
          </button>
        </div>
      </div>

      {/* Правая часть — иллюстрация */}
      <div className="hero-right">
        <img
          src={illustration}
          alt="Hero Illustration"
          style={{ width: '400px' }}
        />
      </div>
    </section>
  );
}

export default HeroSection;