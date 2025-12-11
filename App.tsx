
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useParams, Outlet } from 'react-router-dom';
import GlobalNavbar from './components/GlobalNavbar';
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

const ValidatedLangLayout = () => {
  const { lang } = useParams();
  const validLangs = ['vn', 'en', 'eg'];

  // If language is invalid, redirect to 'vn'
  if (!lang || !validLangs.includes(lang)) {
    return <Navigate to="/vn" replace />;
  }

  useEffect(() => {
    // Update HTML attributes for language and direction
    document.documentElement.lang = lang === 'vn' ? 'vi-VN' : (lang === 'eg' ? 'ar-EG' : 'en-US');
    document.documentElement.dir = lang === 'eg' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className="bg-white min-h-screen font-sans" dir={lang === 'eg' ? 'rtl' : 'ltr'}>
      <GlobalNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const LangRedirect = () => {
    const { lang } = useParams();
    return <Navigate to={`/${lang}`} replace />;
};

const App: React.FC = () => {
  return (
    <Routes>
      {/* Root redirects to Vietnamese by default */}
      <Route path="/" element={<Navigate to="/vn" replace />} />

      {/* Language Route Wrapper */}
      <Route path="/:lang" element={<ValidatedLangLayout />}>
          <Route index element={<HomePage />} />
          <Route path="mac/*" element={<MacPage />} />
          <Route path="ipad/*" element={<IPadPage />} />
          <Route path="iphone/*" element={<IPhonePage />} />
          <Route path="watch/*" element={<WatchPage />} />
          <Route path="apple-vision-pro/*" element={<VisionProPage />} />
          <Route path="airpods/*" element={<AirPodsPage />} />
          <Route path="tv-home/*" element={<TVHomePage />} />
          <Route path="services/*" element={<ServicesPage />} />
          <Route path="shop/accessories/all" element={<AccessoriesPage />} />
          <Route path="accessories/*" element={<AccessoriesPage />} />
          <Route path="support/*" element={<SupportPage />} />
          <Route path="store/*" element={<StorePage />} />
          <Route path="choose-country-region" element={<ChooseCountryPage />} />
          
          {/* Catch all within lang redirects to lang home */}
          <Route path="*" element={<LangRedirect />} />
      </Route>
      
      {/* Global Catch all redirects to default root */}
      <Route path="*" element={<Navigate to="/vn" replace />} />
    </Routes>
  );
};

export default App;
