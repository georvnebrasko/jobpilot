// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FindJobs from './pages/FindJobs';
import DetailedJobPage from './pages/DetailedJobPage';
import PersonalProfile from './pages/PersonalProfile';
import AuthModal from './components/AuthModal/AuthModal';
import Header from './components/Header/Header'; // Добавляем Header
import Footer from './components/Footer/Footer';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState(null);

  const openModal = () => setShowAuthModal(true);
  const closeModal = () => setShowAuthModal(false);

  // Регистрация (пример)
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

  // Вход (пример)
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
      {/* Header теперь отображается на всех страницах */}
      <Header 
        onOpenAuthModal={openModal} 
        user={user} 
        onLogout={handleLogout} 
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home 
              onOpenAuthModal={openModal} 
              user={user} 
              onLogout={handleLogout} 
            />
          }
        />
        <Route path="/personal-profile/*" element={<PersonalProfile onLogout={handleLogout} user={user} />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/vacancy/:jobId" element={<DetailedJobPage />} />
      </Routes>

      <Footer />

      {showAuthModal && (
        <AuthModal 
          onClose={closeModal} 
          onRegister={handleRegister} 
          onLogin={handleLogin} 
        />
      )}
    </BrowserRouter>
  );
}

export default App;