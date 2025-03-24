import React from 'react';
import './HowItWorks.scss';

function HowItWorks() {
  return (
    <section className="howitworks">
      <h2>Как работает jobpilot</h2>
      <div className="howitworks__steps">
        <div className="howitworks__step">
          <h3>Создать учетную запись</h3>
        </div>
        <div className="howitworks__step">
          <h3>Загрузить резюме</h3>
        </div>
        <div className="howitworks__step">
          <h3>Найти подходящую работу</h3>
        </div>
        <div className="howitworks__step">
          <h3>Начать работать</h3>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;