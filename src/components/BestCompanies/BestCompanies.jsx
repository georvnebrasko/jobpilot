import React from 'react';
import './_best-companies.scss';

// Импорт логотипов
import freepikImg from '../../assets/images/aeroflot.svg';
import appleImg from '../../assets/images/apple.svg';
import facebookImg from '../../assets/images/facebook.svg';
import figmaImg from '../../assets/images/figma.svg';
import gazpromImg from '../../assets/images/gazprom.svg';
import googleImg from '../../assets/images/google.svg';

function BestCompanies() {
  return (
    <section className="best-companies">
      <h2>Лучшие компании</h2>
      <div className="companies-grid">

        <div className="company-card">
          <img
            src={freepikImg}
            alt="Freepik"
            className="company-logo"
          />
          <h4>Freepik</h4>
          <p>Казань</p>
          <button>Открыть</button>
        </div>

        <div className="company-card">
          <img
            src={appleImg}
            alt="Apple"
            className="company-logo"
          />
          <h4>Apple</h4>
          <p>Москва</p>
          <button>Открыть</button>
        </div>

        <div className="company-card">
          <img
            src={facebookImg}
            alt="Facebook"
            className="company-logo"
          />
          <h4>Facebook</h4>
          <p>Ростов</p>
          <button>Открыть</button>
        </div>

        <div className="company-card">
          <img
            src={figmaImg}
            alt="Figma"
            className="company-logo"
          />
          <h4>Figma</h4>
          <p>Сочи</p>
          <button>Открыть</button>
        </div>

        <div className="company-card">
          <img
            src={gazpromImg}
            alt="Газпром"
            className="company-logo"
          />
          <h4>Slack</h4>
          <p>Новосибирск</p>
          <button>Открыть</button>
        </div>

        <div className="company-card">
          <img
            src={googleImg}
            alt="Google"
            className="company-logo"
          />
          <h4>Google</h4>
          <p>Санкт-Петербург</p>
          <button>Открыть</button>
        </div>

      </div>
    </section>
  );
}

export default BestCompanies;