import React from 'react';
import { FaUser } from 'react-icons/fa'; // Подключаем иконку пользователя
import './Testimonials.scss';

function Testimonials() {
  return (
    <section className="testimonialsBlock">
      <h2 className="testimonialsBlock__title">Отзывы клиентов</h2>

      <div className="testimonialsBlock__list">
        <div className="testimonialsBlock__item">
          <div className="testimonialsBlock__stars">★★★★★</div>
          <div className="testimonialsBlock__header">
            <FaUser className="testimonialsBlock__icon" />
            <h4 className="testimonialsBlock__name">Роберт</h4>
          </div>
          <p className="testimonialsBlock__position">UI/UX дизайнер</p>
        </div>

        <div className="testimonialsBlock__item">
          <div className="testimonialsBlock__stars">★★★★★</div>
          <div className="testimonialsBlock__header">
            <FaUser className="testimonialsBlock__icon" />
            <h4 className="testimonialsBlock__name">Александ</h4>
          </div>
          <p className="testimonialsBlock__position">Креативный директор</p>
        </div>

        <div className="testimonialsBlock__item">
          <div className="testimonialsBlock__stars">★★★★★</div>
          <div className="testimonialsBlock__header">
            <FaUser className="testimonialsBlock__icon" />
            <h4 className="testimonialsBlock__name">Артем</h4>
          </div>
          <p className="testimonialsBlock__position">Фотограф</p>
        </div>

        <div className="testimonialsBlock__item">
          <div className="testimonialsBlock__stars">★★★★★</div>
          <div className="testimonialsBlock__header">
            <FaUser className="testimonialsBlock__icon" />
            <h4 className="testimonialsBlock__name">Олег</h4>
          </div>
          <p className="testimonialsBlock__position">Веб-разработчик</p>
        </div>

        <div className="testimonialsBlock__item">
          <div className="testimonialsBlock__stars">★★★★★</div>
          <div className="testimonialsBlock__header">
            <FaUser className="testimonialsBlock__icon" />
            <h4 className="testimonialsBlock__name">Денис</h4>
          </div>
          <p className="testimonialsBlock__position">Менеджер</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;