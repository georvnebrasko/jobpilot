import React from 'react';
import SupportFAQ from '../components/SupportFAQ/SupportFAQ';
import SupportContactForm from '../components/SupportContactForm/SupportContactForm';

// Если нужно, можно добавить .scss для самой страницы
// import './SupportClients.scss';

function SupportClients() {
  return (
    <div className="supportClients" style={{ padding: '80px 20px', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Поддержка клиентов</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Секция с FAQ */}
        <SupportFAQ />

        {/* Секция с формой */}
        <SupportContactForm />
      </div>
    </div>
  );
}

export default SupportClients;