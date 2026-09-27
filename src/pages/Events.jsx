import React from 'react';
import ImageFrame from '../components/ImageFrame';
import { Calendar, MapPin, Cpu, Code, Palette, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import p1 from '../assets/s3.png';
import g2 from '../assets/s2.png';
import g3 from '../assets/s1.png';
import g4 from '../assets/p3.jpg';
import p2 from '../assets/g0.jpg';
import ps from '../assets/ps.jpg';

const pillarIcons = [Cpu, Code, Palette, HeartHandshake];
const activityImages = [p1, g2, g4, p2, g3, ps];

export default function Events() {
  const { t, language } = useLanguage();

  return (
    <section className="min-h-screen bg-[#F7F7F7] py-8 sm:py-12 text-[#192048]">
      <div className="container max-w-5xl mx-auto px-4 space-y-12 sm:space-y-16">
        
        <div className="max-w-2xl mx-auto text-center space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <span className="text-xs uppercase font-extrabold text-[#FF383C] tracking-wider block">{t.events.badge}</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#192048] m-0 tracking-tight leading-snug">
            {t.events.title}
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#192048]/80 font-medium max-w-xl mx-auto leading-relaxed">
            {t.events.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.events.pillars.map((item, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div 
                key={idx}
                className="rounded-sm bg-[#192048] p-5 text-white flex flex-col justify-between shadow-none"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-white/10 text-white flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-extrabold text-white m-0">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-white/80 font-medium leading-relaxed m-0">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <h2 className="text-2xl sm:text-3xl font-black text-[#192048] m-0">
            {t.events.missionTitle}
          </h2>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {t.events.activities.map((act, index) => {
            const isEven = index % 2 === 0;
            const displayIndex = (index + 1).toString().padStart(2, '0');
            const numText = language === "km" ? (
              index + 1 === 1 ? "០១" : index + 1 === 2 ? "០២" : index + 1 === 3 ? "០៣" : index + 1 === 4 ? "០៤" : index + 1 === 5 ? "០៥" : "០៦"
            ) : displayIndex;

            return (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2 flex justify-center">
                  <ImageFrame src={activityImages[index % activityImages.length]} alt={act.title} />
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="rounded-sm bg-white p-6 border border-[#192048]/10 flex flex-col relative shadow-none">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#192048] text-white rounded-full text-xs font-bold">
                        {t.events.actLabel} {numText}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#192048] bg-[#F7F7F7] px-2.5 py-1 rounded-full border border-[#192048]/10">
                        <Calendar className="w-3.5 h-3.5 text-[#FF383C]" />
                        <span>{act.year}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#192048] bg-[#F7F7F7] px-2.5 py-1 rounded-full border border-[#192048]/10">
                        <MapPin className="w-3.5 h-3.5 text-[#FF383C]" />
                        <span>{act.location}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#192048] m-0 leading-snug">
                      {act.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 my-3">
                      {act.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-bold text-[#192048]/70 bg-[#F7F7F7] px-2 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#192048]/80 font-medium m-0">
                      {act.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}