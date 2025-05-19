// src/components/DetailedJobView/DetailedJobView.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DetailedJobView.scss';

function DetailedJobView({ jobData }) {
  // 1) Хуки всегда первыми, без условий:
  const navigate = useNavigate();
  const [hasApplied, setHasApplied] = useState(false);

  // 2) Собираем переменные, не связанные с ранним return:
  //    — текущий пользователь
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))?.nickname;
  //    — ключ для его заявок
  const storageKey = `jobApplications_${currentUser}`;
  //    — единый uid вакансии
  const uid = jobData
    ? jobData.jobId ?? `${jobData.title}___${jobData.company}`
    : null;

  // 3) Эффект тоже сразу — чтобы всегда вызывался в одном порядке:
  useEffect(() => {
    if (!uid) return; // ждём, пока uid определится
    const existing = JSON.parse(localStorage.getItem(storageKey)) || [];
    const found = existing.some(app => {
      const key = app.jobId ?? `${app.title}___${app.company}`;
      return key === uid;
    });
    setHasApplied(found);
  }, [storageKey, uid]);

  // 4) Только теперь guard-возврат:
  if (!jobData) {
    return null;
  }

  // 5) Безопасно деструктурируем остальное:
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

  // 6) Обработчики:
  const handleGoBack = () => navigate(-1);

  const handleApply = () => {
    if (hasApplied) return;
    const existing = JSON.parse(localStorage.getItem(storageKey)) || [];
    existing.push(jobData);
    localStorage.setItem(storageKey, JSON.stringify(existing));
    setHasApplied(true);
  };

  // 7) JSX-разметка:
  return (
    <div className="detailedJob">
      <div className="detailedJob__backWrapper">
        <button className="detailedJob__backBtn" onClick={handleGoBack}>
          ←
        </button>
      </div>

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
          className={`detailedJob__applyTopBtn ${
            hasApplied ? 'detailedJob__applyTopBtn--applied' : ''
          }`}
          onClick={handleApply}
          disabled={hasApplied}
        >
          {hasApplied ? 'Заявка уже подана' : 'Подать заявку'}
        </button>
      </div>

      <div className="detailedJob__content">
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
        </div>
      </div>
    </div>
  );
}

export default DetailedJobView;