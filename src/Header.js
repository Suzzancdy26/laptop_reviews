import React from 'react';

function Header({ activePage, setPage }) {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">
        {activePage === 'home' ? 'Deals and Pricing'
         : activePage === 'reviews' ? 'Reviews'
         : 'Contact Us'}
      </h1>
      <nav className="flex justify-center space-x-4">
        {['home', 'reviews', 'contact'].map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              activePage === page
                ? 'bg-gray-700 text-white'
                : 'bg-gray-600 hover:bg-gray-700 text-gray-200'
            }`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
