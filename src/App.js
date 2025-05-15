// src/App.js
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import ScrollToTop   from './components/ScrollToTop';
import Header        from './components/Header/Header';
import Footer        from './components/Footer/Footer';
import AuthModal     from './components/AuthModal/AuthModal';

import Home              from './pages/Home';
import FindJobs          from './pages/FindJobs';
import DetailedJobPage   from './pages/DetailedJobPage';
import PersonalProfile   from './pages/PersonalProfile';
import EmployerProfile   from './pages/EmployerProfile';
import CompanyDetail     from './components/CompanyDetail/CompanyDetail';
import SupportClients    from './pages/SupportClients';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser]                   = useState(null);

  // При старте поднимаем текущего пользователя из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('currentUser');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error('Ошибка чтения currentUser из localStorage', e);
      }
    }
  }, []);

  const openModal  = () => setShowAuthModal(true);
  const closeModal = () => setShowAuthModal(false);

  const handleRegister = (data) => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    if (accounts.find(acc => acc.email === data.email)) {
      alert('Аккаунт с такой почтой уже существует');
      return;
    }
    const newAcc = {
      email:    data.email,
      password: data.password,
      nickname: data.nickname,
      userType: data.userType    // 'applicant' или 'employer'
    };
    localStorage.setItem('accounts', JSON.stringify([...accounts, newAcc]));

    const current = { nickname: newAcc.nickname, userType: newAcc.userType };
    localStorage.setItem('currentUser', JSON.stringify(current));
    setUser(current);
    closeModal();
  };

  const handleLogin = (data) => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const found = accounts.find(
      acc =>
        acc.email    === data.email &&
        acc.password === data.password &&
        acc.userType === data.userType
    );
    if (!found) {
      alert('Неверные данные для входа');
      return;
    }
    const current = { nickname: found.nickname, userType: found.userType };
    localStorage.setItem('currentUser', JSON.stringify(current));
    setUser(current);
    closeModal();
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userProfile');
    localStorage.removeItem('employerProfile');
  };

  return (
    <BrowserRouter basename="/jobpilot">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <ScrollToTop />

        <Header
          onOpenAuthModal={openModal}
          user={user}
          onLogout={handleLogout}
        />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Профиль соискателя — только если userType == 'applicant' */}
            <Route
              path="/personal-profile/*"
              element={
                user?.userType === 'applicant'
                  ? <PersonalProfile user={user} onLogout={handleLogout} />
                  : <Navigate to="/" replace />
              }
            />

            {/* Профиль работодателя — только если userType == 'employer' */}
            <Route
              path="/employer-profile/*"
              element={
                user?.userType === 'employer'
                  ? <EmployerProfile user={user} onLogout={handleLogout} />
                  : <Navigate to="/" replace />
              }
            />

            {/* Поиск и детали вакансий */}
            <Route path="/find-jobs"          element={<FindJobs />} />
            <Route path="/vacancy/:jobId"     element={<DetailedJobPage />} />
            <Route path="/company/:companyId" element={<CompanyDetail />} />

            {/* Поддержка клиентов */}
            <Route path="/support" element={<SupportClients />} />
          </Routes>
        </main>

        <Footer />

        {showAuthModal && (
          <AuthModal
            onClose={closeModal}
            onRegister={handleRegister}
            onLogin={handleLogin}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;