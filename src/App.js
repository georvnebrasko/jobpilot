// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FindJobs from './pages/FindJobs';
import DetailedJobPage from './pages/DetailedJobPage';
import AuthModal from './components/AuthModal/AuthModal';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState(null);

  const openModal = () => setShowAuthModal(true);
  const closeModal = () => setShowAuthModal(false);

  // Пример регистрации
  const handleRegister = (registerData) => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    if (accounts.find(acc => acc.email === registerData.email)) {
      alert("Аккаунт с такой почтой уже существует!");
      return;
    }
    accounts.push({
      email: registerData.email,
      password: registerData.password,
      nickname: registerData.nickname,
    });
    localStorage.setItem('accounts', JSON.stringify(accounts));
    setUser({ nickname: registerData.nickname });
    setShowAuthModal(false);
  };

  // Пример входа
  const handleLogin = (loginData) => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
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

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter basename="/jobpilot">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home 
                onOpenAuthModal={openModal} 
                user={user} 
                onLogout={handleLogout} 
              />
              {showAuthModal && (
                <AuthModal 
                  onClose={closeModal} 
                  onRegister={handleRegister} 
                  onLogin={handleLogin} 
                />
              )}
            </>
          }
        />
        <Route path="/find-jobs" element={<FindJobs />} />
        {/* Новый маршрут: детальная страница вакансии */}
        <Route path="/vacancy/:jobId" element={<DetailedJobPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;