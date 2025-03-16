import React, { useState } from 'react';
import Home from './pages/Home';
import AuthModal from './components/AuthModal';

// ===== ВАШЕ ДОПОЛНИТЕЛЬНОЕ (ИЛИ СТАРОЕ) ИМПОРТЫ, ЕСЛИ НУЖНО =====
// import SomethingElse from './components/SomethingElse'; // пример

function App() {
  // СТАРАЯ ЛОГИКА (если у вас была) - сохраните, например, стейты, эффекты
  // ...

  // НОВАЯ ЛОГИКА ДЛЯ АВТОРИЗАЦИИ
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState(null);

  // Открываем модальное окно
  const openModal = () => {
    setShowAuthModal(true);
  };

  // Закрываем модальное окно
  const closeModal = () => {
    setShowAuthModal(false);
  };

  // При регистрации (mock, без сервера)
  const handleRegister = (registerData) => {
    // registerData: { fullName, email, password, ... }
    // Здесь вы могли бы сделать запрос к серверу,
    // но пока просто имитируем успех
    setUser({ nickname: registerData.fullName || 'User' });
    setShowAuthModal(false);
  };

  // При входе (mock, без сервера)
  const handleLogin = (loginData) => {
    // loginData: { email, password }
    // Имитируем успешный логин, берем nickname из "БД"
    setUser({ nickname: 'ИмяИзБД' });
    setShowAuthModal(false);
  };

  // Выход из аккаунта
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {/* 
        Если у вас была другая логика App.js, оставьте её.
        Мы просто рендерим Home, передавая нужные пропсы.
      */}
      <Home
        onOpenAuthModal={openModal}
        user={user}
        onLogout={handleLogout}
      />

      {/* Модальное окно входа/регистрации */}
      {showAuthModal && (
        <AuthModal
          onClose={closeModal}
          onRegister={handleRegister}
          onLogin={handleLogin}
        />
      )}
    </>
  );
}

export default App;