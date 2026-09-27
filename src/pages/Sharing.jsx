import React, { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
import s6 from '../assets/s6.png';

const sharingImages = [s1, s2, s3, s4, s5, s6];
const sharingLinks = [
  "https://www.facebook.com/share/p/18twdnpAQF/?mibextid=wwXIfr",
  "https://www.facebook.com/share/p/1GUgJj9w4e/?mibextid=wwXIfr",
  "https://www.facebook.com/share/p/1B72MKeHpV/?mibextid=wwXIfr",
  "https://www.facebook.com/share/p/1EMn1QqX6R/?mibextid=wwXIfr",
  "https://www.facebook.com/share/p/1L3GZH5AgZ/?mibextid=wwXIfr",
  "https://www.facebook.com/share/p/18BiVrTEi1/?mibextid=wwXIfr",
];

export default function Sharing() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    { key: "ALL", label: t.sharings.categories.all },
    { key: "MISSION", label: t.sharings.categories.mission },
    { key: "KNOWLEDGE", label: t.sharings.categories.knowledge },
    { key: "NEWS", label: t.sharings.categories.news },
  ];

  const cards = t.sharings.cards.map((c, idx) => ({
    ...c,
    img: sharingImages[idx % sharingImages.length],
    link: sharingLinks[idx % sharingLinks.length],
  }));

  const filteredCards = activeCategory === "ALL"
    ? cards
    : cards.filter(c => {
        if (activeCategory === "MISSION") return c.id <= 3;
        if (activeCategory === "KNOWLEDGE") return c.id === 4 || c.id === 5;
        if (activeCategory === "NEWS") return c.id === 6;
        return true;
      });

  return (
    <section className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#F7F7F7] text-[#192048]">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <div className="max-w-2xl mx-auto text-center space-y-3 sm:space-y-4">
          <span className="text-xs uppercase text-[#FF383C] font-extrabold tracking-wider block">{t.sharings.badge}</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#192048] m-0 tracking-tight leading-snug">
            {t.sharings.title}
          </h1>
        </div>

        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-extrabold transition-colors border whitespace-nowrap shrink-0 shadow-none cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-[#192048] text-white border-[#192048]"
                  : "bg-white text-[#192048] border-[#192048]/20 hover:bg-[#192048]/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <a 
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full block group cursor-pointer no-underline"
            >

              <div className="relative w-full bg-white rounded-sm p-4 border border-[#192048]/10 overflow-hidden shadow-none transition-colors hover:border-[#FF383C] flex flex-col gap-3.5">
                
                <div className="w-full h-48 overflow-hidden rounded-sm bg-slate-100 relative">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-center block"
                  />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#192048] text-white border border-[#192048] text-[11px] font-extrabold rounded-full shadow-none">
                    {card.category}
                  </div>
                </div>

                <div className="px-1 flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#192048] text-sm font-bold leading-snug break-words line-clamp-2 w-full transition-colors group-hover:text-[#FF383C] m-0">
                      {card.title}
                    </h4>
                    <p className="text-[#192048]/60 font-semibold text-[11px] uppercase tracking-wider mt-1.5 m-0 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-[#FF383C]" />
                      <span>{t.sharings.readOnFb}</span>
                    </p>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-[#192048] transition-transform duration-200 group-hover:rotate-45 group-hover:text-[#FF383C]" />
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}