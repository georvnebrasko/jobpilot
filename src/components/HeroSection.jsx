import React from 'react';
import illustration from '../assets/images/Illustration.svg';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Найдите работу, которая <br />
          подходит вам по интересам и навыкам. <br />
        </h1>
        <div className="search-block">
          <input
            type="text"
            className="search-input"
            placeholder="Должность, ключевое слово"
          />
          <input
            type="text"
            className="location-input"
            placeholder="Ваше местоположение"
          />
          <button className="search-button">Найти работу</button>
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