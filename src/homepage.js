import React from 'react';

const products = [
  { name: 'Dell XPS 13', price: '$999', originalPrice: '$1,299', discount: '20% off', imageUrl: 'https://s.yimg.com/fz/api/res/1.2/eFo6h15H8uPP9h3oafR8GQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTQwMA--/https://i.pinimg.com/736x/76/1e/d3/761ed3f968fc5f90fb56215266de2e6e.jpg' },
  { name: 'MacBook Air M2', price: '$1,099', originalPrice: '$1,299', discount: '15% off', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.i53HF4N4Uquh-Ic0WmTPBwHaFj&pid=Api&P=0&h=220' },
  { name: 'HP Spectre x360', price: '$1,199', originalPrice: '$1,399', discount: '15% off', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.tKKN8t9Auf64_Z8zX-m6xwHaEo&pid=Api&P=0&h=220' },
  { name: 'Lenovo ThinkPad X1 Carbon', price: '$1,299', originalPrice: '$1,699', discount: '22% off', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.LD6hkI3vXMed18hpr3O7vwHaFj&pid=Api&P=0&h=220' },
];

const homeProducts = [...products, ...products];

function HomePage() {
  return (
    <div className="container mx-auto p-6 flex-grow">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to Laptop Reviews</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Deals & Pricing</h3>
        <p className="text-gray-600">Check out the latest deals and best prices on top laptops.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {homeProducts.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform hover:scale-105">
            <img src={product.imageUrl} alt={product.name} className="mx-auto mb-4 w-full h-auto object-cover rounded-md" />
            <h4 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h4>
            <p className="text-xl font-bold text-indigo-600 mb-1">
              <span className="text-sm text-gray-500 line-through mr-2">{product.originalPrice}</span>
              {product.price}
              <span className="text-sm font-medium text-green-600"> ({product.discount})</span>
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Review</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
