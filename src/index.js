// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// 1) Подключаем наши глобальные SCSS-стили (точку входа)
import './assets/scss/main.scss';

// 2) Подключаем корневой компонент
import App from './App';

// 3) Рендерим приложение в элемент с id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);