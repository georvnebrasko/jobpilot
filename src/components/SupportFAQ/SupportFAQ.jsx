import React, { useState } from 'react';
import './SupportFAQ.scss';

function SupportFAQ() {
  // Допустим, список вопросов и ответов лежит в массиве
  const [faqs] = useState([
    {
      question: 'Как я могу изменить имя аккаунта?',
      answer: 'Перейдите в настройки профиля и введите новое имя аккаунта в соответствующее поле.',
    },
    {
      question: 'Где я могу увидеть отклики на мои вакансии?',
      answer: 'Все отклики отображаются в разделе "Мои вакансии" вашей панели работодателя.',
    },
    {
      question: 'Как удалить свой аккаунт?',
      answer: 'Вы можете удалить аккаунт в настройках профиля, в самом низу страницы.',
    },
  ]);

  return (
    <div className="supportFAQ">
      <h2 className="supportFAQ__title">Часто задаваемые вопросы</h2>
      <ul className="supportFAQ__list">
        {faqs.map((item, idx) => (
          <li className="supportFAQ__item" key={idx}>
            <div className="supportFAQ__question">{item.question}</div>
            <div className="supportFAQ__answer">{item.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SupportFAQ;