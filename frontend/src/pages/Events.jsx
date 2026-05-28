import React from 'react';
import ImageFrame from '../components/ImageFrame'; // Your existing component

import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import sticker from '../assets/erobotsticker.png'

const Events = () => {
  const activities = [
    {
      title: "សាលាបឋមសិក្សា ឧត្តរ",
      year: "2022 ~ 2023",
      description: "ផ្តល់ជូននូវសម្ភារៈសិក្សាដូចជា កាតាប ប៊ិច សៀវភៅ ការលេងល្បែងកម្សាន្ត ព្រមទាំងអាហារដល់សិស្សានុសិស្ស។ ការបើកសាលាប្រជុំទាក់ទងនឹងសិក្ខាសាលាអំពី អ៊ី រ៉ូបូត និងការផ្តល់ជូននូវការបង្ហាត់បង្រៀនទាក់ទងនឹងបច្ចេកវិទ្យា Scratch & Arduino ទៅកាន់សិស្សានុសិស្ស។",
      imgSrc: g1
    },
    {
      title: "សាលាបឋមសិក្សា ឧត្តរ",
      year: "2022 ~ 2023",
      description: "ផ្តល់ជូននូវសម្ភារៈសិក្សាដូចជា កាតាប ប៊ិច សៀវភៅ ការលេងល្បែងកម្សាន្ត ព្រមទាំងអាហារដល់សិស្សានុសិស្ស។ ការបើកសាលាប្រជុំទាក់ទងនឹងសិក្ខាសាលាអំពី អ៊ី រ៉ូបូត និងការផ្តល់ជូននូវការបង្ហាត់បង្រៀនទាក់ទងនឹងបច្ចេកវិទ្យា Scratch & Arduino ទៅកាន់សិស្សានុសិស្ស។",
      imgSrc: g2
    },
    {
      title: "សាលាបឋមសិក្សា ឧត្តរ",
      year: "2022 ~ 2023",
      description: "ផ្តល់ជូននូវសម្ភារៈសិក្សាដូចជា កាតាប ប៊ិច សៀវភៅ ការលេងល្បែងកម្សាន្ត ព្រមទាំងអាហារដល់សិស្សានុសិស្ស។ ការបើកសាលាប្រជុំទាក់ទងនឹងសិក្ខាសាលាអំពី អ៊ី រ៉ូបូត និងការផ្តល់ជូននូវការបង្ហាត់បង្រៀនទាក់ទងនឹងបច្ចេកវិទ្យា Scratch & Arduino ទៅកាន់សិស្សានុសិស្ស។",
      imgSrc: g3
    },
    {
      title: "សាលាបឋមសិក្សា ឧត្តរ",
      year: "2022 ~ 2023",
      description: "ផ្តល់ជូននូវសម្ភារៈសិក្សាដូចជា កាតាប ប៊ិច សៀវភៅ ការលេងល្បែងកម្សាន្ត ព្រមទាំងអាហារដល់សិស្សានុសិស្ស។ ការបើកសាលាប្រជុំទាក់ទងនឹងសិក្ខាសាលាអំពី អ៊ី រ៉ូបូត និងការផ្តល់ជូននូវការបង្ហាត់បង្រៀនទាក់ទងនឹងបច្ចេកវិទ្យា Scratch & Arduino ទៅកាន់សិស្សានុសិស្ស។",
      imgSrc: g4
    },
    {
      title: "នឹងមាននៅឆាប់ៗនេះ",
      year: "",
      description: "សូមតាមដាននៅសកម្មភាពបន្តរបស់ពួកយើង",
      imgSrc: sticker
    }
  ];

  return (
    <section className="py-20 bg-[#f9f9f9] overflow-hidden">

      <p className="text-center text-[#192048] text-2xl md:text-4xl font-bold mb-20 uppercase tracking-tight">
        សកម្មភាពរបស់ <span className="text-[#ff413c]">អ៊ី រ៉ូបូត</span>
      </p>

      <div className="max-w-7xl mx-auto px-6 relative mt-16">
        {/* Zigzag Layout */}
        <div className="space-y-24 md:space-y-40">
          {activities.map((act, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 flex justify-center relative">
                <ImageFrame src={act.imgSrc} />
              </div>

              {/* Text Side */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <p className="text-[#192048] text-2xl md:text-3xl font-black">
                  {act.title}
                </p>
                <p className="text-[#192048] font-bold mt-2">{act.year}</p>
                <p className="text-gray-600 mt-6 text-sm md:text-base leading-relaxed max-w-lg inline-block">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;