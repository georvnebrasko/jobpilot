// src/pages/PublishJob.jsx
import React, { useState } from "react";

const PublishJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || currentUser.userType !== "employer") {
      alert("Только работодатели могут публиковать вакансии.");
      return;
    }

    const newVacancy = {
      id: Date.now(),
      title,
      company,
      education,
      experience,
      salary,
      location,
      description,
      responsibilities,
      createdAt: new Date().toISOString(),
    };

    // Сохраняем в employerVacancies
    const employerVacancies =
      JSON.parse(localStorage.getItem("employerVacancies")) || [];
    localStorage.setItem(
      "employerVacancies",
      JSON.stringify([newVacancy, ...employerVacancies])
    );

    // Также сохраняем в jobList (для "Найти работу")
    const jobList = JSON.parse(localStorage.getItem("jobList")) || [];
    localStorage.setItem("jobList", JSON.stringify([newVacancy, ...jobList]));

    // Очистка формы
    setTitle("");
    setCompany("");
    setEducation("");
    setExperience("");
    setSalary("");
    setLocation("");
    setDescription("");
    setResponsibilities("");
  };

  return (
    <div className="publishjob">
      <h1 className="publishjob__title">Опубликовать вакансию</h1>
      <form className="publishjob__form" onSubmit={handleSubmit}>
        <label className="publishjob__label">
          Название вакансии
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="publishjob__input"
            required
          />
        </label>

        <label className="publishjob__label">
          Название компании
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="publishjob__input"
            required
          />
        </label>

        <label className="publishjob__label">
          Образование
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="publishjob__input"
          />
        </label>

        <label className="publishjob__label">
          Опыт работы
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="publishjob__input"
          />
        </label>

        <label className="publishjob__label">
          Зарплата
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="publishjob__input"
          />
        </label>

        <label className="publishjob__label">
          Местоположение
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="publishjob__input"
          />
        </label>

        <label className="publishjob__label">
          Описание
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="publishjob__textarea"
            required
          />
        </label>

        <label className="publishjob__label">
          Обязанности
          <textarea
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            className="publishjob__textarea"
            required
          />
        </label>

        <button type="submit" className="publishjob__button">
          Опубликовать
        </button>
      </form>
    </div>
  );
};

export default PublishJob;