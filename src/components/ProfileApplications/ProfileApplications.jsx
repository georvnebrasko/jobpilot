// src/components/ProfileApplications/ProfileApplications.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileApplications.scss';

function ProfileApplications() {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  // Загружаем отклики из localStorage при монтировании
  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
    setApplications(storedApplications);
  }, []);

  // Переход на страницу вакансии по клику
  const handleApplicationClick = (jobId) => {
    navigate(`/vacancy/${jobId}`);
  };

  // Обработчик удаления вакансии
  const handleDeleteApplication = (e, jobId) => {
    // Предотвращаем всплытие события, чтобы не срабатывал переход по клику на элемент
    e.stopPropagation();
    const updatedApplications = applications.filter(job => job.id !== jobId);
    setApplications(updatedApplications);
    localStorage.setItem('jobApplications', JSON.stringify(updatedApplications));
  };

  return (
    <div className="profileApplications">
      <h2 className="profileApplications__title">Мои отклики</h2>
      {applications.length === 0 ? (
        <p className="profileApplications__empty">У вас пока нет откликов.</p>
      ) : (
        <ul className="profileApplications__list">
          {applications.map((job, index) => (
            <li
              key={index}
              className="profileApplications__item"
              onClick={() => handleApplicationClick(job.id)}
            >
              <div className="profileApplications__info">
                <h3 className="profileApplications__jobTitle">{job.title}</h3>
                <p className="profileApplications__company">{job.company}</p>
                <p className="profileApplications__details">
                  {job.city && <span><strong>Город:</strong> {job.city}</span>}
                  {job.salary && <span> | <strong>Зарплата:</strong> {job.salary}</span>}
                </p>
              </div>
              <button 
                className="profileApplications__deleteBtn"
                onClick={(e) => handleDeleteApplication(e, job.id)}
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

export default ProfileApplications;