import React, { useState } from 'react';
import Home from './pages/Home';
import AuthModal from './components/AuthModal';

function App() {
  // Состояние для модального окна
  const [showAuthModal, setShowAuthModal] = useState(false);
  // Состояние для залогиненного пользователя
  const [user, setUser] = useState(null);

  const openModal = () => {
    setShowAuthModal(true);
  };

  const closeModal = () => {
    setShowAuthModal(false);
  };

  // Функция регистрации
  const handleRegister = (registerData) => {
    // registerData = { nickname, email, password, confirmPassword }
    // Получаем текущие аккаунты из localStorage (если их нет, пустой массив)
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    // Если аккаунт с такой почтой уже существует — уведомляем пользователя
    if (accounts.find(acc => acc.email === registerData.email)) {
      alert("Аккаунт с такой почтой уже существует!");
      return;
    }
    // Добавляем новый аккаунт
    accounts.push({
      email: registerData.email,
      password: registerData.password,
      nickname: registerData.nickname,
    });
    localStorage.setItem("accounts", JSON.stringify(accounts));
    // Логиним пользователя (устанавливаем его ник)
    setUser({ nickname: registerData.nickname });
    setShowAuthModal(false);
  };

  // Функция входа
  const handleLogin = (loginData) => {
    // loginData = { email, password }
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const found = accounts.find(
      acc => acc.email === loginData.email && acc.password === loginData.password
    );
    if (found) {
      setUser({ nickname: found.nickname });
      setShowAuthModal(false);
    } else {
      alert("Неверная почта или пароль");
    }
  };

  // Функция выхода
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Home onOpenAuthModal={openModal} user={user} onLogout={handleLogout} />
      {showAuthModal && (
        <AuthModal onClose={closeModal} onRegister={handleRegister} onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;