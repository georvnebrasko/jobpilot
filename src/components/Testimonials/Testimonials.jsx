import React from 'react';
import { FaUser } from 'react-icons/fa'; // Подключаем иконку пользователя

import './_testimonials.scss';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Отзывы клиентов</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <div className="testimonial-stars">★★★★★</div>
          <div className="testimonial-header">
            <FaUser className="user-icon" />
            <h4>Роберт</h4>
          </div>
          <p>UI/UX дизайнер</p>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-stars">★★★★★</div>
          <div className="testimonial-header">
            <FaUser className="user-icon" />
            <h4>Александ</h4>
          </div>
          <p>Креативный директор</p>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-stars">★★★★★</div>
          <div className="testimonial-header">
            <FaUser className="user-icon" />
            <h4>Артем</h4>
          </div>
          <p>Фотограф</p>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-stars">★★★★★</div>
          <div className="testimonial-header">
            <FaUser className="user-icon" />
            <h4>Олег</h4>
          </div>
          <p>Веб-разработчик</p>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-stars">★★★★★</div>
          <div className="testimonial-header">
            <FaUser className="user-icon" />
            <h4>Денис</h4>
          </div>
          <p>Менеджер</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;