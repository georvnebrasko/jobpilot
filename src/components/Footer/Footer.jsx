// src/components/Footer.jsx
import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__col">
          <h4>Моя работа</h4>
          <p>Позвоните сейчас: +7 (918) 825 51 15</p>
          <p>Москва</p>
          <p>Связаться с нами</p>
        </div>

        <div className="footer__col">
          <h4>О нас</h4>
          <ul>
            <li>Контакты</li>
            <li>Ценообразование</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Кандидат</h4>
          <ul>
            <li>Посмотреть вакансии</li>
            <li>Посмотреть работодателей</li>
            <li>Панель управления</li>
            <li>Сохраненные вакансии</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Работодатели</h4>
          <ul>
            <li>Опубликовать вакансию</li>
            <li>Просмотр кандидатов</li>
            <li>Панель управления работодателя</li>
            <li>Вакансии</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Поддержка</h4>
          <ul>
            <li>Часто задаваемые вопросы</li>
            <li>Политика конфиденциальности</li>
            <li>Условия и положения</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>@2025 Моя работа - Портал вакансий. Все права сохранены.</p>
      </div>
    </footer>
  );
}

export default Footer;