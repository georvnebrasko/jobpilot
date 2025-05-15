import React, { useState, useEffect } from 'react';
import './EmployerVacancies.scss';

function EmployerVacancies() {
  const [vacancies, setVacancies] = useState([]);

  // Предположим, что вакансии мы тоже храним в localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('employerVacancies')) || [];
    setVacancies(saved);
  }, []);

  return (
    <div className="employer-vacancies">
      <h2 className="employer-vacancies__title">Мои вакансии</h2>

      {vacancies.length === 0 ? (
        <p className="employer-vacancies__empty">
          У вас ещё нет опубликованных вакансий.
        </p>
      ) : (
        <ul className="employer-vacancies__list">
          {vacancies.map((v, i) => (
            <li key={i} className="employer-vacancies__item">
              <h3 className="employer-vacancies__jobTitle">{v.title}</h3>
              <p className="employer-vacancies__info">
                {v.city} • {v.salary}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployerVacancies;