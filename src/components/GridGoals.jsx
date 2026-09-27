import React from "react";
import meet from "../assets/meet.png";
import money from "../assets/money.png";
import volunteer from "../assets/volunteering.png";
import { useLanguage } from "../context/LanguageContext";

const goalImages = [meet, money, volunteer];

export default function GridGoals() {
  const { t } = useLanguage();

  return (
    <section className="py-4 bg-transparent">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
        {t.goals.gridCards.map((item, index) => (
          <article
            key={index}
            className="group relative overflow-hidden rounded-sm bg-[#192048] p-6 shadow-none transition-colors duration-200 hover:bg-[#232b57] flex flex-col justify-between gap-4 min-h-[120px]"
          >
            <div className="flex items-center justify-between gap-4 w-full h-full">
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm sm:text-base text-white leading-snug m-0">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-center w-16 h-16 shrink-0 rounded-sm bg-white/10 p-2">
                <img
                  src={goalImages[index % goalImages.length]}
                  alt="Goal illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}