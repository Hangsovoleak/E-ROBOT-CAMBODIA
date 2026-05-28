import { useState } from 'react';
import ERobotLogo from '../assets/ERobot.png';
import { Menu, X } from 'lucide-react'; 
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Helper to toggle and close
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        /* Changed relative to sticky so it stays at the top during scroll */
        <nav className="bg-white text-[#192048] px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
            <div className="w-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" onClick={closeMenu}>
                    <img src={ERobotLogo} alt="E-Robot" className="h-10 w-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-xs font-medium">
                    <li>
                        <Link to="/about" className="px-4 py-2 transition-all duration-300 rounded-xl hover:text-[#FF383C] hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg border border-transparent hover:border-white/20 font-bold">
                            អំពី E-ROBOT
                        </Link>
                    </li>
                    <li>
                        <Link to="/goals" className="px-4 py-2 transition-all duration-300 rounded-xl hover:text-[#FF383C] hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg border border-transparent hover:border-white/20 font-bold">
                            គោលដៅ
                        </Link>
                    </li>
                    <li>
                        <Link to="/events" className="px-4 py-2 transition-all duration-300 rounded-xl hover:text-[#FF383C] hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg border border-transparent hover:border-white/20 font-bold">
                            ព្រឹត្តិការណ៍សំខាន់ៗ
                        </Link>
                    </li>
                    <li>
                        <Link to="/contents" className="px-4 py-2 transition-all duration-300 rounded-xl hover:text-[#FF383C] hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg border border-transparent hover:border-white/20 font-bold">
                            មាតិកាសិក្សាផ្សេងៗ
                        </Link>
                    </li>
                    <li>
                        <Link to="/sponsors" className="px-4 py-2 transition-all duration-300 rounded-xl hover:text-[#FF383C] hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg border border-transparent hover:border-white/20 font-bold">
                            ការឧបត្ថម្ភ​ និង ការទទូលស្គាល់
                        </Link>
                    </li>
                </ul>

                {/* Right Actions (Desktop) */}
                <div className="hidden md:flex items-center">
                    <button className="bg-[#FF383C] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#FF383C]/80 transition-all active:scale-95">
                        ឧបត្ថម្ភមកពួកយើង
                    </button>
                    <button className="ml-4 bg-[#192048] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#192048]/80 transition-all active:scale-95">
                        ចូលរួមជាមួយពួកយើង
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-[#192048] focus:outline-none hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-[#192048] rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
                    {/* Added onClick={closeMenu} to every link below */}
                    <Link to="/about" onClick={closeMenu} className="px-4 py-3 text-white text-sm font-bold rounded-xl hover:bg-white/10">About Us</Link>
                    <Link to="/goals" onClick={closeMenu} className="px-4 py-3 text-white text-sm font-bold rounded-xl hover:bg-white/10">Goals</Link>
                    <Link to="/events" onClick={closeMenu} className="px-4 py-3 text-white text-sm font-bold rounded-xl hover:bg-white/10">Events</Link>
                    <Link to="/contents" onClick={closeMenu} className="px-4 py-3 text-white text-sm font-bold rounded-xl hover:bg-white/10">Contents</Link>
                    <Link to="/sponsors" onClick={closeMenu} className="px-4 py-3 text-white text-sm font-bold rounded-xl hover:bg-white/10">Sponsors</Link>

                    <div className="border-t border-white/10 mt-2 pt-4 flex flex-col gap-3">
                        <button className="w-full bg-[#FF383C] text-white text-sm font-bold py-3 rounded-xl active:scale-95">
                            Donate
                        </button>
                        <button className="w-full bg-white text-[#192048] text-sm font-bold py-3 rounded-xl active:scale-95">
                            Join Us
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;