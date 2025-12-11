import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalNavbar from './components/GlobalNavbar';
import Ribbon from './components/Ribbon';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MacPage from './pages/MacPage';
import StorePage from './pages/StorePage';
import IPadPage from './pages/iPadPage';
import IPhonePage from './pages/IPhonePage';
import WatchPage from './pages/WatchPage';
import VisionProPage from './pages/VisionProPage';
import AirPodsPage from './pages/AirPodsPage';
import TVHomePage from './pages/TVHomePage';
import ServicesPage from './pages/ServicesPage';
import AccessoriesPage from './pages/AccessoriesPage';
import SupportPage from './pages/SupportPage';
import ChooseCountryPage from './pages/ChooseCountryPage';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <GlobalNavbar />
      <Ribbon />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Using /* allows sub-routes (e.g. /mac/macbook-air) to render the main category page for this demo */}
          <Route path="/mac/*" element={<MacPage />} />
          <Route path="/ipad/*" element={<IPadPage />} />
          <Route path="/iphone/*" element={<IPhonePage />} />
          <Route path="/watch/*" element={<WatchPage />} />
          <Route path="/apple-vision-pro/*" element={<VisionProPage />} />
          <Route path="/airpods/*" element={<AirPodsPage />} />
          <Route path="/tv-home/*" element={<TVHomePage />} />
          <Route path="/services/*" element={<ServicesPage />} />
          <Route path="/shop/accessories/all" element={<AccessoriesPage />} />
          <Route path="/accessories/*" element={<AccessoriesPage />} />
          <Route path="/support/*" element={<SupportPage />} />
          <Route path="/store/*" element={<StorePage />} />
          <Route path="/choose-country-region" element={<ChooseCountryPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;