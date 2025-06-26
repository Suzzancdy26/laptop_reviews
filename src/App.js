import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ReviewsPage from './components/ReviewsPage';
import ContactPage from './components/ContactPage';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'reviews': return <ReviewsPage />;
      case 'contact': return <ContactPage />;
      case 'home':
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header activePage={page} setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;
