import React from 'react';
import ImageFrame from '../components/ImageFrame';

import p1 from '../assets/s3.png';
import g2 from '../assets/s2.png';
import g3 from '../assets/s1.png';
import g4 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import sticker from '../assets/g4.png';

const Events = () => {
  const activities = [
    {
      title: "សាលាវិទ្យាល័យសោមធំ (ខេត្តរតនគិរី)",
      year: "២០២២​​​~២០២៣~២០២៤",
      description: "យើងរៀបចំសហការជាមួយសាលាជាច្រើនគម្រោង ក្នុងនោះមានទាំងគម្រោង ESTEM, One School One Robot និងពន្លកគំនិត។ ក្នុងនោះ យើងបានសហការជាមួយអង្គការតម្លាភាពកម្ពុជា, អង្គការ STEM Cambodia ស្ថានទូតប្រទេសអង់គ្លេស, ការបរិច្ចាគពីសប្បុរសជន ក៏ដូចជាការសហការពីខាងសាលាផ្ទាល់។ យើងមានបណ្ដុះបណ្ដាលលើ Robotics (Arduino), Canva, Scratch និងធ្វើកម្មវិធីសប្បុរសធម៌ផងដែរសម្រាប់បឋមសិក្សាសំ និងបឋមសិក្សាភូមិប៉ាដល​នៃស្រុកអូរយ៉ាដាវ ខេត្តរតនគិរី ដែលមានសិស្សសរុបក្នុងគម្រោងទាំងអស់ប្រហែល ៣០០ នាក់។",
      imgSrc: p1
    },
    {
      title: "អង្គការឆ័ត្របៃតង",
      year: "២០២២​​​~២០២៣~២០២៤",
      description: "យើងបានរៀបចំគម្រោងជាច្រើនជាមួយគ្នា សម្រាប់កុមារនៅស្រុកបាទី ខេត្តតាកែវ ក្រោមគម្រោងរបស់អង្គការផ្ទាល់។ យើងសម្រេចបាននូវវគ្គសិក្សា Robotics (Arduino), Canva, Scratch, Office 365 និងកម្មវិធី Typing ជាដើម។ ក្នុងគម្រោងនេះ មានសិស្សជាង ៤០ នាក់បានចូលរួមជាមួយគ្នា ក្នុងមួយវគ្គៗ។",
      imgSrc: g2
    },
    {
      title: "វិទ្យាល័យ អារញ្ញសាគរ ស៊ីអែហ្វស៊ី និង បឋមសិក្សា ព្រៃដង្ហើម",
      year: "២០២៣~២០២៤",
      description: "យើងបានរៀបចំសិក្ខាសាលាតម្រង់ទិស រយៈពេល ២ ថ្ងៃ ហើយយើងក៏បន្តសហការរៀបចំកម្មវិធីបង្រៀនតាមប្រព័ន្ធ Online លើជំនាញ Scratch ដល់សិក្សានុសិស្សនៅទីនោះដូចគ្នា។",
      imgSrc: g4
    },
    {
      title: "សាលាចំណេះដឹងទូទៅបុរីវិជ្ជា",
      year: "២០២២​​​~២០២៣",
      description: "យើងបានរៀបចំវគ្គសិក្សាជាច្រើន ជាមួយសាលាចំណេះដឹងទូទៅបុរីវិជ្ជា នៅក្នុងក្រុងកំពង់ឆ្នាំង។ ក្នុងនោះមានទាំងការតាំងបង្ហាញស្នាដៃ និងការចែករំលែកបន្តពីសិស្សនៅទីនោះ។ យើងសម្រេចបានការបណ្ដុះបណ្ដាលសិស្សជាង ១៥០ នាក់ ជាមួយនឹងការតាំងបង្ហាញស្នាដៃជាច្រើនដង ហើយគម្រោងនេះគឺជាថវិកាឧបត្ថម្ភពីសាលាផ្ទាល់។",
      imgSrc: g3
    },
    {
      title: "វិទ្យាល័យសម្ដេចឪ, វិទ្យាល័យសម្ដេចហ៊ុនសែនកោះដាច់, វិទ្យាល័យផ្កាំ, វិទ្យាល័យបុស្សស្បូវ, វិទ្យាល័យបរិបូរណ៍",
      year: "២០២២​​​~២០២៣",
      description: "យើងបានរៀបចំគម្រោង Robotics, Scratch, Canva ដាច់ដោយឡែកពីគ្នា ក្រោមជំនួយផ្សេងៗគ្នាពីស្ថាប័នជាច្រើន។ សិស្សសរុបអាចមានដល់ ៥០០ នាក់。​​",
      imgSrc: p2
    },
    {
      title: "សាលាដូង (លើភ្នំគិរីរម្យ), សាលាជួយសិស្សក្រីក្ររបស់យុវជនសំរាម, សាលាបឋមសិក្សាត្រពាំងល្អក់",
      year: "២០២៣~២០២៤",
      description: "យើងបានសហការជាមួយសាលាទាំងនេះ ដើម្បីធ្វើកម្មវិធីសប្បុរសធម៌ និងកម្មវិធីពន្លកគំនិត ដែលមានសិស្សចូលរួមប្រហែលជា ១៥០ នាក់សរុប ក្រោមគម្រោងជំនួយរបស់អង្គការតម្លាភាពកម្ពុជា។",
      imgSrc: sticker
    }
  ];

  return (
    // Replaced layout background with target dark hex token #191923
    <section className="section min-h-screen bg-white py-16 text-[#191923]">
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* Header section converted to dark glass layout */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-[#191923]/96 backdrop-blur-xl p-6 sm:p-8 shadow-2xl border border-white/10 text-center mb-16 md:mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[4px] bg-[#ff383c] rounded-full" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white m-0 leading-snug">
            សកម្មភាពរបស់ <span className="text-[#ff383c]">E-ROBOT</span>
          </h2>
        </div>

        {/* List of activities */}
        <div className="space-y-16 md:space-y-24">
          {activities.map((act, index) => {
            const isEven = index % 2 === 0;
            const displayIndex = (index + 1).toString().padStart(2, '0');

            return (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image panel */}
                <div className="w-full lg:w-1/2 flex justify-center transform transition-all duration-300 hover:-translate-y-0.5">
                  <ImageFrame src={act.imgSrc} />
                </div>

                {/* Content description panel completely converted to custom dark glass card */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-3xl bg-[#191923]/96 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl border border-[#191923] hover:bg-[#191923] transition-all duration-300 flex flex-col relative overflow-hidden">
                    
                    {/* Top strip accent line styling */}
                    <div className={`absolute top-0 w-24 h-[4px] ${isEven ? 'left-8 bg-[#191923]' : 'right-8 bg-[#ff383c]'}`} />

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {/* Badge styling adjusted to use color token #ff383c */}
                      <span className="px-3 py-1 bg-[#ff383c]/10 text-[#ff383c] rounded-full text-xs font-bold tracking-wider">
                        សកម្មភាពទី {displayIndex}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 tracking-wide">
                        {act.year}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white m-0 leading-snug">
                      {act.title}
                    </h3>

                    <div className="w-16 h-[2px] bg-[#191923]/96 my-5" />

                    <p className="text-sm sm:text-base leading-loose text-slate-300 font-medium m-0">
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
};

export default Events;