import React from 'react';
import kodIcon from '../../assets/images/kod.svg';
import marcetingIcon from '../../assets/images/marceting.svg';
import musicIcon from '../../assets/images/music.svg';
import healthIcon from '../../assets/images/health.svg';
import naykaIcon from '../../assets/images/nayka.svg';
import './PopularCategories.scss';

function PopularCategories() {
  return (
    <section className="popularCategories">
      <h2>Популярные категории</h2>
      <div className="popularCategories__list">
        
        <div className="popularCategories__card">
          <img
            src={kodIcon}
            alt="Код и программирование"
            className="popularCategories__icon"
            style={{ width: '50px', marginBottom: '8px' }}
          />
          <h4 className="popularCategories__cardTitle">Кодирование</h4>
          <p className="popularCategories__positions">312 Открытых позиций</p>
        </div>

        <div className="popularCategories__card">
          <img
            src={marcetingIcon}
            alt="Маркетинг"
            className="popularCategories__icon"
            style={{ width: '50px', marginBottom: '8px' }}
          />
          <h4 className="popularCategories__cardTitle">Цифровой маркетинг</h4>
          <p className="popularCategories__positions">297 Открытых позиций</p>
        </div>

        <div className="popularCategories__card">
          <img
            src={musicIcon}
            alt="Музыка и аудио"
            className="popularCategories__icon"
            style={{ width: '50px', marginBottom: '8px' }}
          />
          <h4 className="popularCategories__cardTitle">Музыка и аудио</h4>
          <p className="popularCategories__positions">204 Открытых позиций</p>
        </div>

        <div className="popularCategories__card">
          <img
            src={healthIcon}
            alt="Здравоохранение"
            className="popularCategories__icon"
            style={{ width: '50px', marginBottom: '8px' }}
          />
          <h4 className="popularCategories__cardTitle">Медицина</h4>
          <p className="popularCategories__positions">125 Открытых позиций</p>
        </div>

        <div className="popularCategories__card">
          <img
            src={naykaIcon}
            alt="Данные и наука"
            className="popularCategories__icon"
            style={{ width: '50px', marginBottom: '8px' }}
          />
          <h4 className="popularCategories__cardTitle">Данные и наука</h4>
          <p className="popularCategories__positions">57 Открытых позиций</p>
        </div>

        {/* ... можно добавить ещё, если есть design.jpeg, etc. */}
      </div>
    </section>
  );
}

export default PopularCategories;