import React from 'react';
import './_footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-col">
          <h4>Моя работа</h4>
          <p>Позвоните сейчас: +7 (918) 825 51 15</p>
          <p>Москва</p>
          <a href="#!">Связаться с нами</a>
        </div>

        <div className="footer-col">
          <h4>О нас</h4>
          <ul>
            <li><a href="#!">Контакты</a></li>
            <li><a href="#!">Ценообразование</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Кандидат</h4>
          <ul>
            <li><a href="#!">Посмотреть вакансии</a></li>
            <li><a href="#!">Посмотреть работодателей</a></li>
            <li><a href="#!">Панель управления</a></li>
            <li><a href="#!">Сохраненные вакансии</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Работодатели</h4>
          <ul>
            <li><a href="#!">Опубликовать вакансию</a></li>
            <li><a href="#!">Просмотр кандидатов</a></li>
            <li><a href="#!">Панель управления работодателя</a></li>
            <li><a href="#!">Вакансии</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Поддержка</h4>
          <ul>
            <li><a href="#!">Часто задаваемые вопросы</a></li>
            <li><a href="#!">Политика конфиденциальности</a></li>
            <li><a href="#!">Условия и положения</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>@2025 Моя работа - Портал вакансий. Все права сохранены.</p>
      </div>
    </footer>
  );
}

export default Footer;