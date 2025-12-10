import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalNavbar from './components/GlobalNavbar';
import Ribbon from './components/Ribbon';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MacPage from './pages/MacPage';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <GlobalNavbar />
      <Ribbon />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mac" element={<MacPage />} />
          {/* Placeholder routes for other nav items */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;