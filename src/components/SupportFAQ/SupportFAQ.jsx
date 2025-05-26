// src/components/SupportFAQ/SupportFAQ.jsx
import React, { useState, useMemo } from 'react';
import './SupportFAQ.scss';

// Полный набор вопросов с категориями
const FAQ_DATA = [
  // Популярные (будут везде вверху)
  { category: 'Аккаунт', question: 'Как я могу изменить имя аккаунта?', answer: 'Перейдите в настройки профиля и введите новое имя аккаунта в соответствующее поле.' },
  { category: 'Вакансии', question: 'Где я могу увидеть отклики на мои вакансии?', answer: 'Все отклики отображаются в разделе "Мои вакансии" вашей панели работодателя.' },

  // Оригинальные 5
  { category: 'Аккаунт', question: 'Как удалить свой аккаунт?', answer: 'Вы можете удалить аккаунт в настройках профиля, в самом низу страницы.' },
  { category: 'Резюме', question: 'Как загрузить своё резюме на сайт?', answer: 'Перейдите в раздел "Моё резюме", нажмите кнопку "Загрузить файл" и выберите документ в формате PDF или DOCX.' },
  { category: 'Безопасность', question: 'Как восстановить забытый пароль?', answer: 'На странице входа нажмите «Забыли пароль?», введите ваш e-mail — мы вышлем вам ссылку для сброса.' },
  { category: 'Вакансии', question: 'Как опубликовать новую вакансию?', answer: 'Зайдите в раздел "Добавить вакансию", заполните поля и нажмите "Опубликовать".' },
  { category: 'Аккаунт', question: 'Как сменить электронную почту?', answer: 'В настройках профиля нажмите "Изменить почту", введите новую и подтвердите через ссылку.' },

  // Дополнительные вопросы по категориям (будут скрыты по умолчанию)
  // Аккаунт
  { category: 'Аккаунт', question: 'Можно ли сменить логин?', answer: 'Логин сменить нельзя, используйте поле "Имя аккаунта" для отображения.' },
  { category: 'Аккаунт', question: 'Как связать соцсети с профилем?', answer: 'В настройках профиля в разделе "Социальные сети" добавьте ссылки.' },
  { category: 'Аккаунт', question: 'Можно ли восстановить удалённый аккаунт?', answer: 'Нет, удалённые аккаунты восстановлению не подлежат.' },

  // Вакансии
  { category: 'Вакансии', question: 'Как отредактировать опубликованную вакансию?', answer: 'В разделе "Мои вакансии" нажмите на вакансию и выберите "Редактировать".' },
  { category: 'Вакансии', question: 'Как снять вакансию с публикации?', answer: 'В настройках вакансии нажмите "Снять с публикации".' },
  { category: 'Вакансии', question: 'Как продлить срок действия вакансии?', answer: 'В карточке вакансии выберите "Продлить действие" и подтвердите.' },

  // Резюме
  { category: 'Резюме', question: 'Как удалить загруженное резюме?', answer: 'В разделе "Моё резюме" нажмите значок корзины рядом с файлом.' },
  { category: 'Резюме', question: 'Можно ли сохранить несколько резюме?', answer: 'Да, вы можете загружать до трёх разных резюме.' },
  { category: 'Резюме', question: 'Как отредактировать текст резюме онлайн?', answer: 'Нажмите "Редактировать онлайн" рядом с вашим резюме.' },

  // Безопасность
  { category: 'Безопасность', question: 'Как включить двухфакторную аутентификацию?', answer: 'В настройках безопасности выберите "2FA" и следуйте инструкциям.' },
  { category: 'Безопасность', question: 'Как изменить пароль?', answer: 'В настройках безопасности нажмите "Сменить пароль", введите текущий и новый.' },
  { category: 'Безопасность', question: 'Куда сообщать о подозрительных письмах?', answer: 'Отправляйте их на support@example.com с темой "Фишинг".' },
];

// Извлекаем категории
const CATEGORIES = ['Все', ...Array.from(new Set(FAQ_DATA.map(f => f.category)))];

// Счетчики
const POPULAR_COUNT = 2;     // количество популярных
const DEFAULT_COUNT = 5;     // сколько показывать на табе без поиска

function SupportFAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');
  const [expandedKey, setExpandedKey] = useState(null);

  // Вычисляем популярные (первые POPULAR_COUNT)
  const popularFaqs = useMemo(() => FAQ_DATA.slice(0, POPULAR_COUNT), []);

  // Фильтрация по категории и поиску
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item, idx) => {
      // Исключаем популярные из общего списка, они рендерятся отдельно
      if (idx < POPULAR_COUNT) return false;
      // Категория
      if (activeCategory !== 'Все' && item.category !== activeCategory) return false;
      // Поиск
      const text = (item.question + ' ' + item.answer).toLowerCase();
      if (!text.includes(searchTerm.toLowerCase())) return false;
      return true;
    });
  }, [searchTerm, activeCategory]);

  // Определяем, какие из filtered показывать (если нет поиска, ограничиваем DEFAULT_COUNT)
  const visibleFaqs = useMemo(() => {
    if (searchTerm) return filteredFaqs;
    return filteredFaqs.slice(0, DEFAULT_COUNT);
  }, [filteredFaqs, searchTerm]);

  const toggleExpand = key =>
    setExpandedKey(prev => (prev === key ? null : key));

  return (
    <div className="supportFAQ">
      <h2 className="supportFAQ__title">Часто задаваемые вопросы</h2>

      {/* Поиск */}
      <div className="supportFAQ__search">
        <input
          type="text"
          placeholder="Поиск по вопросам..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Табы */}
      <div className="supportFAQ__tabs">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`supportFAQ__tab ${
              activeCategory === cat ? 'supportFAQ__tab--active' : ''
            }`}
            onClick={() => {
              setActiveCategory(cat);
              setExpandedKey(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Популярные */}
      <div className="supportFAQ__popular">
        <h3>Популярные вопросы</h3>
        <ul>
          {popularFaqs.map((item, idx) => (
            <li key={`pop-${idx}`}>
              <button
                className="supportFAQ__questionBtn"
                onClick={() => toggleExpand(`pop-${idx}`)}
              >
                {item.question}
              </button>
              {expandedKey === `pop-${idx}` && (
                <div className="supportFAQ__answer">{item.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Список остальных (видимые) */}
      <ul className="supportFAQ__list">
        {visibleFaqs.length > 0 ? (
          visibleFaqs.map((item, idx) => {
            // уникальный ключ: учитываем категорию и индекс
            const key = `${activeCategory}-${idx}`;
            return (
              <li className="supportFAQ__item" key={key}>
                <button
                  className="supportFAQ__questionBtn"
                  onClick={() => toggleExpand(key)}
                >
                  {item.question}
                </button>
                {expandedKey === key && (
                  <div className="supportFAQ__answer">{item.answer}</div>
                )}
              </li>
            );
          })
        ) : (
          <li className="supportFAQ__noResults">
            По вашему запросу ничего не найдено
          </li>
        )}
      </ul>
    </div>
  );
}

export default SupportFAQ;