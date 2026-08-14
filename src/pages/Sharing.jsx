import React, { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
import s6 from '../assets/s6.png';

export default function Sharing() {
  const [activeCategory, setActiveCategory] = useState("ទាំងអស់");

  const cards = [
    { id: 1, title: "Mission in Battambang - ដំណើរចុះបេសកកម្មអប់រំបច្ចេកវិទ្យានៅបាត់ដំបង", img: s1, link: "https://www.facebook.com/share/p/18twdnpAQF/?mibextid=wwXIfr", category: "បេសកកម្ម" },
    { id: 2, title: "Mission in Takeo - វគ្គបណ្តុះបណ្តាល និងចែករំលែកនៅខេត្តតាកែវ", img: s2, link: "https://www.facebook.com/share/p/1GUgJj9w4e/?mibextid=wwXIfr", category: "បេសកកម្ម" },
    { id: 3, title: "Mission in Ratanakiri - ការពង្រីកចំណេះដឹងឌីជីថលដល់តំបន់ដាច់ស្រយាល", img: s3, link: "https://www.facebook.com/share/p/1B72MKeHpV/?mibextid=wwXIfr", category: "បេសកកម្ម" },
    { id: 4, title: "Solar System Knowledge - ស្វែងយល់អំពីប្រព័ន្ធព្រះអាទិត្យ", img: s4, link: "https://www.facebook.com/share/p/1EMn1QqX6R/?mibextid=wwXIfr", category: "ចំណេះដឹង" },
    { id: 5, title: "What is SDGs? - គោលដៅអភិវឌ្ឍន៍ប្រកបដោយចីរភាព", img: s5, link: "https://www.facebook.com/share/p/1L3GZH5AgZ/?mibextid=wwXIfr", category: "ចំណេះដឹង" },
    { id: 6, title: "E-Robot Update News - បច្ចុប្បន្នភាព និងព័ត៌មានថ្មីៗពី E-ROBOT", img: s6, link: "https://www.facebook.com/share/p/18BiVrTEi1/?mibextid=wwXIfr", category: "ព័ត៌មាន" },
  ];

  const categories = ["ទាំងអស់", "បេសកកម្ម", "ចំណេះដឹង", "ព័ត៌មាន"];

  const filteredCards = activeCategory === "ទាំងអស់"
    ? cards
    : cards.filter(c => c.category === activeCategory);

  return (
    <section className="min-h-screen py-10 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title Card */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-white p-6 sm:p-8 shadow-xs border border-slate-200 text-center mb-8 sm:mb-10 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-[#0E79B2] rounded-full" />
          <span className="text-xs uppercase text-[#0E79B2] font-extrabold tracking-wider">បណ្ណាល័យចែករំលែក</span>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 m-0">
            មាតិការចែករំលែកចំណេះដឹង <span className="text-[#0E79B2]">E-ROBOT</span>
          </h1>
        </div>

        {/* Category Tabs - Mobile Scrollable & Desktop Responsive */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-extrabold transition-all border whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? "bg-[#0E79B2] text-white border-[#0E79B2] shadow-xs"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Knowledge Cards Grid - 1 col on mobile, 2 on tablet, 3 on laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredCards.map((card) => (
            <a 
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full block group cursor-pointer no-underline"
            >

              <div className="relative w-full bg-white rounded-3xl shadow-xs hover:shadow-md p-4 border border-slate-200 hover:border-sky-300 overflow-hidden transition-all duration-200 flex flex-col gap-3.5">
                
                {/* Image Box */}
                <div className="w-full h-48 sm:h-56 overflow-hidden rounded-2xl bg-slate-100 relative">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-center block transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white text-slate-900 border border-slate-200 text-[11px] font-extrabold rounded-full shadow-2xs">
                    {card.category}
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-1 flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-900 text-sm sm:text-base font-bold leading-snug break-words line-clamp-2 w-full transition-colors duration-200 group-hover:text-[#0E79B2] m-0">
                      {card.title}
                    </h4>
                    <p className="text-slate-500 font-semibold text-[11px] uppercase tracking-wider mt-1.5 m-0 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-[#0E79B2]" />
                      <span>ចុចដើម្បីអានលើ Facebook</span>
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0E79B2] border border-sky-100 group-hover:bg-[#0E79B2] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45" />
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}