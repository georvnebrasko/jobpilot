// src/components/DetailedJobView/DetailedJobView.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DetailedJobView.scss';

function DetailedJobView({ jobData }) {
  const navigate = useNavigate();

  if (!jobData) return null;

  const {
    title,
    company,
    companyIcon,
    description,
    responsibilities,
    postedDate,
    dueDate,
    education,
    experience,
    salary,
    city,
  } = jobData;

  // Обработчик возврата назад
  const handleGoBack = () => {
    navigate(-1);
  };

  // Обработчик подачи заявки: сохраняем данные вакансии в localStorage
  const handleApply = () => {
    // Читаем текущие отклики или создаём пустой массив, если их ещё нет
    const existingApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
    // Добавляем новую заявку; можно добавить проверку на уникальность, если нужно
    existingApplications.push(jobData);
    localStorage.setItem('jobApplications', JSON.stringify(existingApplications));
    alert('Ваша заявка успешно подана!');
  };

  return (
    <div className="detailedJob">
      {/* Плашка "Детали вакансии" может быть здесь */}

      {/* Кнопка «Назад» */}
      <div className="detailedJob__backWrapper">
        <button className="detailedJob__backBtn" onClick={handleGoBack}>
          ←
        </button>
      </div>

      {/* Заголовок: логотип + название + кнопка "Подать заявку" */}
      <div className="detailedJob__headerRow">
        <div className="detailedJob__titleWrapper">
          {companyIcon && (
            <img
              src={companyIcon}
              alt={company}
              className="detailedJob__companyLogo"
            />
          )}
          <h2 className="detailedJob__title">{title}</h2>
        </div>
        <button 
          className="detailedJob__applyTopBtn" 
          onClick={handleApply}
        >
          Подать заявку
        </button>
      </div>

      {/* Основной контент */}
      <div className="detailedJob__content">
        {/* Левая колонка */}
        <div className="detailedJob__left">
          <div className="detailedJob__section">
            <h3 className="detailedJob__sectionTitle">Описание работы</h3>
            <p>{description}</p>
          </div>
          <div className="detailedJob__section">
            <h3 className="detailedJob__sectionTitle">Обязанности</h3>
            <ul className="detailedJob__responsList">
              {responsibilities?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="detailedJob__right">
          <div className="detailedJob__overviewBox">
            <h3 className="detailedJob__sectionTitle">Обзор работы</h3>
            <ul className="detailedJob__infoList">
              {postedDate && (
                <li>
                  <strong>Вакансия размещена:</strong> {postedDate}
                </li>
              )}
              {dueDate && (
                <li>
                  <strong>Срок действия:</strong> {dueDate}
                </li>
              )}
              {education && (
                <li>
                  <strong>Образование:</strong> {education}
                </li>
              )}
              {experience && (
                <li>
                  <strong>Опыт работы:</strong> {experience}
                </li>
              )}
              {salary && (
                <li>
                  <strong>Зарплата:</strong> {salary}
                </li>
              )}
              {city && (
                <li>
                  <strong>Местоположение:</strong> {city}
                </li>
              )}
            </ul>
          </div>
          {/* Если снизу кнопка "Подать заявку" была убрана, не добавляем её */}
        </div>
      </div>
    </div>
  );
}

export default DetailedJobView;