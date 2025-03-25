
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-sky-100">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
          Welcome to TemplateHub
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Your central hub for all templates
        </p>
        <div className="flex justify-center space-x-4">
          <button className="rounded-md bg-blue-600 px-6 py-3 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Get Started
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as they become available */}
      </Routes>
    </Router>
  );
};

export default App;
