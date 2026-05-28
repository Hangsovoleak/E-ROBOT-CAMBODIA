import React from 'react';
import ERobotLogo from '../assets/ERobot.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Location from '../assets/google-maps.png'


function Footer() {
    return (
        <footer className="bg-[#192048] text-white py-16 px-8 md:px-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <img
                        src={ERobotLogo}
                        alt="E-Robot"
                        className="h-10 w-10 rounded-full"
                    />  
                        <p className="text-4xl font-black tracking-tighter italic">E-ROBOT</p>
                    </div>
                    
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                        ចូលរួមជាមួយយើងដើម្បីកុមារកម្ពុជា និងជាផ្នែកមួយនៃការជំរុញការអប់រំផ្នែកបច្ចេកវិទ្យាឱ្យកាន់តែរីកចម្រើន។
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/share/1bJ4sJVeN8/?mibextid=wwXIfr" className="p-2 bg-white/10 rounded-full hover:scale-110 transition-colors">
                            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:scale-110 transition-colors">
                            <img src={Instagram} alt="Instagram" className="w-6 h-6" />
                        </a>
                        <div className="flex items-center gap-2 p-2 bg-white/10 rounded-full transition-colors">
                            <img src={Location} alt="Location" className="w-6 h-6" />
                            <span className="text-xs pr-2">ភ្នំពេញ, ប្រទេសកម្ពុជា</span>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Quick Links */}
                <div className="flex flex-col gap-4">
                    <p className="text-xl font-bold uppercase tracking-widest text-white/40">មាតិកា</p>
                    <ul className="space-y-2 text-white/80 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">អំពីយើង</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">គោលដៅ</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">ព្រឹត្តិការណ៍</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">មាតិកាសិក្សា</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">ម្ចាស់ឧបត្ថម្ភ</a></li>
                    </ul>
                </div>

                {/* Right Section: Contact Info */}
                <div className="flex flex-col gap-4">
                    <p className="text-xl font-bold uppercase tracking-widest text-white/40">ទំនាក់ទំនង</p>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-center gap-3 text-white/80">
                            <span>erobotkh.org</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/80">
                            <span>+855 10 567 014</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;