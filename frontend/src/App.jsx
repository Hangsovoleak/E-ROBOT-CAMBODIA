import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; // Import here
import Footer from './components/Footer'; // Import here
import AboutUs from './pages/AboutUs';
import Goals from './pages/Goals';
import Events from './pages/Events'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white/90 w-full flex flex-col">
        {/* Navbar stays at the top of every page */}
        <Navbar /> 

        {/* This main tag ensures content expands to push footer down */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/goals" element={<Goals />} />
            
            <Route path="/events" element={<Events />} />
            {/* <Route path="/contents" element={<Contents />} />
            <Route path="/sponsors" element={<Sponsors />} />  */}
           
          </Routes>
        </main>

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;