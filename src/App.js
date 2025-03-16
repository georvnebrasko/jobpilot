import React, { useState } from 'react';
import Home from './pages/Home';
import AuthModal from './components/AuthModal';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const openModal = () => {
    setShowAuthModal(true);
  };

  const closeModal = () => {
    setShowAuthModal(false);
  };

  return (
    <>
      <Home onOpenAuthModal={openModal} />
      {showAuthModal && <AuthModal onClose={closeModal} />}
    </>
  );
}

export default App;