import React from 'react';
import { Target, Compass, Sparkles, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import sticker from '../assets/erobotsticker.png';
import GridGoals from '../components/GridGoals';
import ImageGoal from '../components/ImageGoals'; 

const cardIcons = [Target, Compass, Layers, Sparkles];

export default function Goals() {
  const { t, language } = useLanguage();

  return (
    <section className="min-h-screen bg-[#F7F7F7] py-10 sm:py-14 text-slate-800">
      <div className="container max-w-7xl mx-auto px-4 space-y-12 md:space-y-16">
        
        {/* Goals Main Row Layout */}
        <div aria-labelledby="goals-heading" className="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          
          <div className="space-y-6 md:space-y-8">
            {/* Header Description */}
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs uppercase tracking-wider font-extrabold text-[#FF383C] block">{t.goals.badge1}</span>
              <h1 id="goals-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#192048] m-0 leading-snug">
                {t.goals.title1}
              </h1>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-slate-700 font-medium max-w-xl">
                {t.goals.desc1}
              </p>
            </div>

            {/* Grid List Elements */}
            <div className="grid gap-4 sm:grid-cols-2">
              {t.goals.items.map((item, index) => {
                const IconComponent = cardIcons[index % cardIcons.length];
                const displayId = (index + 1).toString().padStart(2, '0');
                const numText = language === "km" ? (index + 1 === 1 ? "០១" : index + 1 === 2 ? "០២" : index + 1 === 3 ? "០៣" : "០៤") : displayId;

                return (
                  <article
                    key={item.id || index}
                    className="group rounded-sm bg-white p-5 shadow-none border border-slate-200 hover:border-[#192048] transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-[#192048]/10 text-[#192048] border border-[#192048]/20 mb-3 transition-all duration-200 group-hover:bg-[#192048] group-hover:text-white shadow-none">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs uppercase text-[#FF383C] font-extrabold block tracking-wider">
                        {t.goals.goalLabel} {numText}
                      </span>
                      <p className="mt-2 text-xs sm:text-sm font-bold text-[#192048] leading-relaxed m-0">
                        {item.title}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Graphic Side Panel Banner */}
          <div className="rounded-sm bg-[#192048] p-6 sm:p-8 border-none text-white text-center flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden group shadow-none">
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#FF383C]">{t.goals.bannerBadge}</span>
            <h2 className="mt-3 text-lg sm:text-xl font-extrabold leading-tight max-w-xs m-0 text-white">
              {t.goals.bannerTitle}
            </h2>
            
            <div className="mt-6 w-full max-w-xs flex justify-center items-center p-4 rounded-sm bg-white/10 border border-white/20 shadow-none overflow-hidden transition-all duration-200 group-hover:bg-white/20">
              <img 
                alt="E-Robot Goals Illustration Sticker Mascot"
                src={sticker}
                className="w-full h-auto max-h-52 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

        {/* Dynamic Inner Grid Component Container */}
        <div>
          <GridGoals />
        </div>

        {/* Vision Component Section */}
        <div aria-labelledby="vision-heading" className="space-y-6 sm:space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#FF383C]">{t.goals.badge2}</span>
            <h2 id="vision-heading" className="text-2xl sm:text-3xl font-extrabold text-[#192048] m-0 tracking-tight">
              {t.goals.title2}
            </h2>
          </div>
          
          <ImageGoal />
        </div>

      </div>
    </section>
  );
}