import React from "react";
import meet from "../assets/meet.png";
import money from "../assets/money.png";
import volunteer from "../assets/volunteering.png";

export default function GridGoals() {
  const cardData = [
    {
      image: meet,
      desc: "សិក្សាឥតគិតថ្លៃ តាមរយះអនឡាញ Google Meet",
    },
    {
      image: money,
      desc: "ទទួលបានសម្ភារះសិក្សាពីសប្បុរសជន",
    },
    {
      image: volunteer,
      desc: "ទទួលបានការបណ្ដុះបណ្ដាលពីយុវជន ស្ម័គ្រចិត្តដែលមានជំនាញ",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-[var(--surface)] rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 overflow-hidden"
          >
            {/* Minimal left border accent line on hover */}
            <div className="absolute left-0 inset-y-0 w-[3px] bg-brand-blue/0 group-hover:bg-brand-blue transition-colors duration-300" />

            {/* Layout Box */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 min-h-[11rem]">
              
              {/* Text Description */}
              <div className="flex-1 text-center sm:text-left min-w-0">
                <p className="font-sans font-bold text-base sm:text-lg text-brand-charcoal dark:text-[var(--text-h)] leading-relaxed group-hover:text-brand-blue transition-colors duration-200">
                  {item.desc}
                </p>
              </div>

              {/* Graphic Asset Wrapper */}
              <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-[var(--bg)] dark:bg-brand-charcoal/20 rounded-xl p-3 border border-[var(--border)] transition-colors duration-300 group-hover:border-brand-blue/20 shadow-inner">
                <img
                  src={item.image}
                  alt="Goal asset vector"
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}