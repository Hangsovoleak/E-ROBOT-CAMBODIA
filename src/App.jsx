import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Goals from './pages/Goals';
import Events from './pages/Events';
import Sharings from './pages/Sharing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';

import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="min-h-screen bg-[#F7F7F7] w-full flex flex-col font-kantumruy text-[#192048] antialiased">
        <ScrollToTop />
        <Navbar />

        <main className="flex-grow flex flex-col w-full relative bg-[#F7F7F7]">
          <article key={location.pathname} className="page-transition flex-grow flex flex-col w-full">
            <Routes location={location}>
              <Route path="/" element={<AboutUs />} />
              <Route path="/home" element={<AboutUs />} />
              <Route path="/about" element={<Goals />} />
              <Route path="/services" element={<Events />} />
              <Route path="/sharings" element={<Sharings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<AboutUs />} />
            </Routes>
          </article>
        </main>

        <Footer />
      </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;