import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';

import './index.css';

const AboutUs = lazy(() => import('./pages/AboutUs'));
const Goals = lazy(() => import('./pages/Goals'));
const Events = lazy(() => import('./pages/Events'));
const Sharings = lazy(() => import('./pages/Sharing'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));

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
            <Suspense
              fallback={
                <div className="flex-grow flex items-center justify-center min-h-[50vh]">
                  <div className="w-8 h-8 border-4 border-[#192048]/20 border-t-[#FF383C] rounded-full animate-spin"></div>
                </div>
              }
            >
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
            </Suspense>
          </article>
        </main>

        <Footer />
      </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;