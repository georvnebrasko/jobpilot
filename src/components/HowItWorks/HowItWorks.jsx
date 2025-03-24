import React from 'react';
import './_how-it-works.scss';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>Как работает jobpilot</h2>
      <div className="steps">
        <div className="step howit-step">
          <h3>Создать учетную запись</h3>
        </div>
        <div className="step howit-step">
          <h3>Загрузить резюме</h3>
        </div>
        <div className="step howit-step">
          <h3>Найти подходящую работу</h3>
        </div>
        <div className="step howit-step">
          <h3>Начать работать</h3>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;