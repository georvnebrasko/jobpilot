// src/pages/SupportClients.jsx
import React from 'react';
import SupportFAQ from '../components/SupportFAQ/SupportFAQ';
import SupportContactForm from '../components/SupportContactForm/SupportContactForm';
import ChatWidget from '../components/ChatWidget/ChatWidget'; // ← импортируем

function SupportClients() {
  return (
    <div
      className="supportClients"
      style={{ padding: '80px 20px', minHeight: '100vh' }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Поддержка клиентов
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <SupportFAQ />
        <SupportContactForm />
      </div>

      {/* Встраиваем чат-бот */}
      <ChatWidget />
    </div>
  );
}

export default SupportClients;