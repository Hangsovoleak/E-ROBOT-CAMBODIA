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
    <section className="py-4 bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((item, index) => (
          <article
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-xs
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#0E79B2]/40
              hover:shadow-md
              flex
              flex-col
              justify-between
              gap-4
            "
          >
            <div
              className="
                absolute
                left-0
                top-0
                h-1
                w-0
                bg-[#0E79B2]
                transition-all
                duration-500
                group-hover:w-full
              "
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
              <div className="flex-1 text-center sm:text-left min-w-0 order-2 sm:order-1">
                <p 
                  className="
                    font-bold 
                    text-sm 
                    sm:text-base 
                    text-slate-900 
                    leading-relaxed 
                    transition-colors 
                    duration-300 
                    group-hover:text-[#0E79B2]
                  "
                >
                  {item.desc}
                </p>
              </div>

              <div 
                className="
                  flex 
                  items-center 
                  justify-center 
                  w-20 
                  h-20 
                  shrink-0 
                  bg-sky-50 
                  rounded-2xl 
                  p-3.5 
                  border 
                  border-sky-100 
                  transition-all 
                  duration-300 
                  group-hover:border-[#0E79B2]/30 
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