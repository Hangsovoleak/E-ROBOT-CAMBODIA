import React from 'react';
import { ArrowUpRight, Share2 } from 'lucide-react';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
import s6 from '../assets/s7.jpg';

const Sharing = () => {
  const cards = [
    { id: 1, title: "Mission in Battambang", img: s1, link: "https://www.facebook.com/share/p/18twdnpAQF/?mibextid=wwXIfr", category: "បេសកកម្ម" },
    { id: 2, title: "Mission in Takeo", img: s2, link: "https://www.facebook.com/share/p/1GUgJj9w4e/?mibextid=wwXIfr", category: "បេសកកម្ម" },
    { id: 3, title: "Mission in Ratanakiri", img: s3, link: "https://www.facebook.com/share/p/1B72MKeHpV/?mibextid=wwXIfr", category: "បេសកកម្ម" },
    { id: 4, title: "Solar System Knowledge", img: s4, link: "https://www.facebook.com/share/p/1EMn1QqX6R/?mibextid=wwXIfr", category: "ចំណេះដឹង" },
    { id: 5, title: "What is SDGs?", img: s5, link: "https://www.facebook.com/share/p/1L3GZH5AgZ/?mibextid=wwXIfr", category: "ការយល់ដឹង" },
    { id: 6, title: "E-Robot Update News", img: s6, link: "https://www.facebook.com/share/p/18BiVrTEi1/?mibextid=wwXIfr", category: "ព័ត៌មានថ្មីៗ" },
  ];

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================
            HEADER TITLE BANNER CARD
        ========================== */}
        <div className="max-w-2xl mx-auto rounded-[2rem] bg-white p-8 shadow-2xl border border-slate-200/80 text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[4px] bg-[#ff383c] rounded-full" />
          <p className="text-sm uppercase tracking-[0.35em] text-[#ff383c] font-black">បណ្ណាល័យចំណែករំលែក</p>
          <p className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-[#192048] m-0">
            មាតិកាផ្សេងៗរបស់ <span className="text-[#ff383c]">E-ROBOT</span>
          </p>
        </div>

        {/* =========================
            FRIENDLY KNOWLEDGE GRID FLOW
        ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-12">
          {cards.map((card) => (
            <a 
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full block group cursor-pointer min-h-[10rem] transition-all duration-300 hover:-translate-y-2 no-underline"
            >

              {/* Folder Frame Layout Card */}
              <div className="relative w-full bg-white rounded-b-[2rem] rounded-tr-[2rem] shadow-xl group-hover:shadow-2xl p-4 border border-slate-200/80 overflow-hidden transition-all duration-300 flex flex-col gap-4">
                
                {/* Brand Indicator Line top */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#ff383c] rounded-tr-[2rem]" />

                {/* Content Graphic Element Frame */}
                <div className="w-full h-64 overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 relative shadow-inner">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Interactive Friendly Floating Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md text-[#192048] text-[11px] font-bold rounded-full shadow-sm">
                    {card.category}
                  </div>

                  {/* Absolute Interactive Inner Hover Mask */}
                  <div className="absolute inset-0 bg-[#192048]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white/90 px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xl text-[#192048] text-xs font-bold transition-transform duration-300 scale-90 group-hover:scale-100">
                      <Share2 className="w-3.5 h-3.5 text-[#ff383c]" />
                      អានអត្ថបទពេញនៅលើ Facebook
                    </div>
                  </div>
                </div>

                {/* Text Content Info Description Segment */}
                <div className="px-1 flex items-center justify-between gap-4 mt-1">
                  <div className="flex-1">
                    <h4 className="text-[#192048] text-lg font-black leading-snug m-0 break-words line-clamp-1">
                      {card.title || "មាតិកាថ្មីៗពីយើងខ្ញុំ"}
                    </h4>
                    <p className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mt-1 m-0">
                      ចុចដើម្បីអានអត្ថបទលម្អិត
                    </p>
                  </div>

                  {/* Micro-animated directional round action badge */}
                  <div className="w-10 h-10 rounded-full bg-[#ff383c]/10 text-[#ff383c] group-hover:bg-[#ff383c] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sharing;