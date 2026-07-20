import React from "react";
import meet from "../assets/meet.png";
import money from "../assets/money.png";
import volunteer from "../assets/volunteering.png";

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

export default function GridGoals() {
  return (
    // Integrated your unified global section class
    <section className="section">
      {/* Integrated your unified global container class */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((item, index) => (
          <article
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[var(--border-light)]
              bg-[var(--surface)]
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-primary/40
              hover:shadow-xl
              flex
              flex-col
              justify-between
              gap-6
            "
          >
            {/* Top accent line matching your card layout choice */}
            <div
              className="
                absolute
                left-0
                top-0
                h-1
                w-0
                bg-primary
                transition-all
                duration-500
                group-hover:w-full
              "
            />

            {/* Content Layout Inner Box */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
              
              {/* Text Description - Inherits core text tokens and highlights primary on hover */}
              <div className="flex-1 text-center sm:text-left min-w-0 order-2 sm:order-1">
                <p 
                  className="
                    font-bold 
                    text-base 
                    sm:text-lg 
                    text-[var(--text-heading)] 
                    leading-relaxed 
                    transition-colors 
                    duration-300 
                    group-hover:text-primary
                  "
                >
                  {item.desc}
                </p>
              </div>

              {/* Graphic Asset Container */}
              <div 
                className="
                  flex 
                  items-center 
                  justify-center 
                  w-24 
                  h-24 
                  shrink-0 
                  bg-[var(--surface-light)] 
                  rounded-2xl 
                  p-4 
                  border 
                  border-[var(--border-light)] 
                  transition-all 
                  duration-300 
                  group-hover:border-primary/30 
                  shadow-inner
                  order-1
                  sm:order-2
                "
              >
                <img
                  src={item.image}
                  alt="Goal illustration"
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}