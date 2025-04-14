import React, { useState } from 'react';
import './SupportContactForm.scss';

function SupportContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можно отправить formData на сервер или показать alert
    alert('Заявка успешно принята!');
    // Сбрасываем форму
    setFormData({
      name: '',
      email: '',
      topic: '',
      message: '',
    });
  };

  return (
    <div className="supportContactForm">
      <h2 className="supportContactForm__title">Связаться с поддержкой</h2>
      <form className="supportContactForm__form" onSubmit={handleSubmit}>
        <div className="supportContactForm__field">
          <label>Ваше имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="supportContactForm__field">
          <label>Ваш email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="supportContactForm__field">
          <label>Тема обращения</label>
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="supportContactForm__field">
          <label>Сообщение</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button className="supportContactForm__submitBtn" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default SupportContactForm;