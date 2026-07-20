import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Goals from './pages/Goals';
import Events from './pages/Events';
import Sharings from './pages/Sharing';
import Contact from './pages/Contact';

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
    /* CHANGED: Swapped bg-white/95 out for bg-slate-50 to give a premium, muted background tint */
    <div className="min-h-screen bg-slate-50 w-full flex flex-col font-kantumruy antialiased selection:bg-[#ff383c]/10 selection:text-[#ff383c]">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow flex flex-col w-full relative">
        <article key={location.pathname} className="page-transition flex-grow flex flex-col w-full">
          <Routes location={location}>
            <Route path="/" element={<AboutUs />} />
            <Route path="/home" element={<AboutUs />} />
            <Route path="/about" element={<Goals />} />
            <Route path="/services" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sharings" element={<Sharings />} />
            <Route path="*" element={<AboutUs />} />
          </Routes>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default App;