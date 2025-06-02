// src/components/EmployerVacancies.jsx
import React, { useState, useEffect } from "react";
import "./EmployerVacancies.scss";

function EmployerVacancies() {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("employerVacancies")) || [];
    setVacancies(saved);
  }, []);

  const handleDelete = (id) => {
    const updated = vacancies.filter((v) => v.id !== id);
    setVacancies(updated);
    localStorage.setItem("employerVacancies", JSON.stringify(updated));
  };

  return (
    <div className="employervacancies">
      <h2 className="employervacancies__title">Мои вакансии</h2>

      {vacancies.length === 0 ? (
        <p className="employervacancies__empty">
          У вас ещё нет опубликованных вакансий.
        </p>
      ) : (
        <ul className="employervacancies__list">
          {vacancies.map((v) => (
            <li key={v.id} className="employervacancies__item">
              <div className="employervacancies__info">
                <h3 className="employervacancies__jobtitle">{v.title}</h3>
                <p className="employervacancies__company">{v.company}</p>
                <p className="employervacancies__details">
                  {v.location} • {v.salary}
                </p>
              </div>
              <button
                className="employervacancies__deletebtn"
                onClick={() => handleDelete(v.id)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployerVacancies;