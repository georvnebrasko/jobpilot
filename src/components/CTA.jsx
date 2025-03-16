import React from 'react';
import arrowIcon from '../assets/images/arrow.svg';

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-block">
        <h3>Стать кандидатом</h3>
        <button className="cta-button">
          Зарегистрируйтесь сейчас
          <img 
            src={arrowIcon} 
            alt="стрелка" 
            style={{ width: '16px', marginLeft: '8px' }} 
          />
        </button>
      </div>

      <div className="cta-block">
        <h3>Стать работодателем</h3>
        <button className="cta-button">
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