import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Goals from './pages/Goals';
import Events from './pages/Events';
import Sharings from './pages/Sharing';
import Contact from './pages/Contact';

// 2. Import your Tailwind CSS file
import './index.css';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white/95 w-full flex flex-col font-kantumruy">
      {/* Navbar stays at the top of every page */}
      <Navbar />

      {/* This main tag ensures content expands to push footer down */}
      <main className="flex-grow">
        <div key={location.pathname} className="page-transition">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/home" element={<AboutUs />} />
            <Route path="/about" element={<Goals />} />
            <Route path="/services" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sharings" element={<Sharings />} />
            <Route path="*" element={<AboutUs />} />
          </Routes>
        </div>
      </main>

      {/* Footer stays at the bottom of every page */}
      <Footer />
    </div>
  );
}

export default App;
