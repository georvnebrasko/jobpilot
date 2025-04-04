// src/components/BestCompanies.jsx
import React from 'react';
import './BestCompanies.scss';

// Импортируем хук навигации
import { useNavigate } from 'react-router-dom';

// Импорт логотипов
import freepikImg from '../../assets/images/aeroflot.svg';
import appleImg from '../../assets/images/apple.svg';
import facebookImg from '../../assets/images/facebook.svg';
import figmaImg from '../../assets/images/figma.svg';
import yandexImg from '../../assets/images/yandexicon.svg';
import googleImg from '../../assets/images/google.svg';

function BestCompanies() {
  const navigate = useNavigate();

  // Обработчик перехода на страницу компании по имени
  const handleOpenCompany = (companyName) => {
    // Переходим на страницу компании, например: /company/apple
    navigate(`/company/${companyName.toLowerCase()}`);
  };

  return (
    <section className="bestCompanies">
      <h2 className="bestCompanies__title">Лучшие компании</h2>
      
      <div className="bestCompanies__grid">
        <div className="bestCompanies__card">
          <img
            src={freepikImg}
            alt="Freepik"
            className="bestCompanies__logo"
          />
          <h4>Freepik</h4>
          <p>Мадрид</p>
          <button onClick={() => handleOpenCompany('freepik')}>Открыть</button>
        </div>

        <div className="bestCompanies__card">
          <img
            src={appleImg}
            alt="Apple"
            className="bestCompanies__logo"
          />
          <h4>Apple</h4>
          <p>Купертино</p>
          <button onClick={() => handleOpenCompany('apple')}>Открыть</button>
        </div>

        <div className="bestCompanies__card">
          <img
            src={facebookImg}
            alt="Facebook"
            className="bestCompanies__logo"
          />
          <h4>Facebook</h4>
          <p>Менло-Парк</p>
          <button onClick={() => handleOpenCompany('facebook')}>Открыть</button>
        </div>

        <div className="bestCompanies__card">
          <img
            src={figmaImg}
            alt="Figma"
            className="bestCompanies__logo"
          />
          <h4>Figma</h4>
          <p>Сан-Франциско</p>
          <button onClick={() => handleOpenCompany('figma')}>Открыть</button>
        </div>

        <div className="bestCompanies__card">
          <img
            src={yandexImg}
            alt="Газпром"
            className="bestCompanies__logo"
          />
          <h4>Яндекс</h4>
          <p>Москва</p>
          <button onClick={() => handleOpenCompany('yandex')}>Открыть</button>
        </div>

        <div className="bestCompanies__card">
          <img
            src={googleImg}
            alt="Google"
            className="bestCompanies__logo"
          />
          <h4>Google</h4>
          <p>Маунтин-Вью</p>
          <button onClick={() => handleOpenCompany('google')}>Открыть</button>
        </div>
      </div>
    </section>
  );
}

export default BestCompanies;