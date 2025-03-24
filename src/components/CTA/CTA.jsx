import React from 'react';
import arrowIcon from '../../assets/images/arrow.svg';
import './CTA.scss';

function CTA() {
  return (
    <section className="cta">
      <div className="cta__block">
        <h3 className="cta__title">Стать кандидатом</h3>
        <button className="cta__button">
          Зарегистрируйтесь сейчас
          <img 
            src={arrowIcon} 
            alt="стрелка" 
            style={{ width: '16px', marginLeft: '8px' }} 
          />
        </button>
      </div>

      <div className="cta__block">
        <h3 className="cta__title">Стать работодателем</h3>
        <button className="cta__button">
          Зарегистрируйтесь сейчас
          <img 
            src={arrowIcon} 
            alt="стрелка" 
            style={{ width: '16px', marginLeft: '8px' }} 
          />
        </button>
      </div>
    </section>
  );
}

export default CTA;