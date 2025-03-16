import React from 'react';
import kodIcon from '../assets/images/kod.svg';
import marcetingIcon from '../assets/images/marceting.svg';
import musicIcon from '../assets/images/music.svg';
import healthIcon from '../assets/images/health.svg';
import naykaIcon from '../assets/images/nayka.svg';

function PopularCategories() {
  return (
    <section className="popular-categories">
      <h2>Популярные категории</h2>
      <div className="categories-list">
        
        <div className="category-card">
          <img
            src={kodIcon}
            alt="Код и программирование"
            style={{ width: '50px', marginBottom: '8px' }}
          />
          <h4>Код и программирование</h4>
          <p>312 Открытых позиций</p>
        </div>

        <div className="category-card">
          <img
            src={marcetingIcon}
            alt="Маркетинг"
            style={{ width: '50px', marginBottom: '8px' }}
          />
          <h4>Цифровой маркетинг</h4>
          <p>297 Открытых позиций</p>
        </div>

        <div className="category-card">
          <img
            src={musicIcon}
            alt="Музыка и аудио"
            style={{ width: '50px', marginBottom: '8px' }}
          />
          <h4>Музыка и аудио</h4>
          <p>204 Открытых позиций</p>
        </div>

        <div className="category-card">
          <img
            src={healthIcon}
            alt="Здравоохранение"
            style={{ width: '50px', marginBottom: '8px' }}
          />
          <h4>Здравоохранение</h4>
          <p>125 Открытых позиций</p>
        </div>

        <div className="category-card">
          <img
            src={naykaIcon}
            alt="Данные и наука"
            style={{ width: '50px', marginBottom: '8px' }}
          />
          <h4>Данные и наука</h4>
          <p>57 Открытых позиций</p>
        </div>

        {/* ... можно добавить ещё, если есть design.jpeg, etc. */}
      </div>
    </section>
  );
}

export default PopularCategories;