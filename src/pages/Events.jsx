import React from 'react';
import ImageFrame from '../components/ImageFrame';

import p1 from '../assets/p1.jpg';
import g2 from '../assets/s2.png';
import g3 from '../assets/s1.png';
import g4 from '../assets/s3.png';
import p2 from '../assets/p2.jpg';
import sticker from '../assets/g4.png';

const Events = () => {
  const activities = [
    {
      title: "សាលាវិទ្យាល័យសោមធំ (ខេត្តរតនៈគីរី)",
      year: "២០២២​​​~២០២៣~២០២៤",
      description: "យើងរៀបចំសហការជាមួយសាលាជាច្រើនគម្រោង ក្នុងនោះមានទាំងគម្រោង ESTEM, One School One Robot និងពន្លកគំនិត។ ក្នុងនោះ យើងបានសហការជាមួយអង្កការ តម្លាភាពកម្ពុជា, អង្កការSTEM Cambodia ស្ថាទូតប្រទេសអង់គ្លេស, ការបរិចាគពីសប្បុរជន ក៏ដូចជាការសហការពីខាងសាលាផ្ទាល់។ យើងមានបណ្ដុះបណ្ដាលលើ Robotics (arduino), Canva, Scratch និងធ្វើកម្មវិធីសប្បុរធម៌ផងដែរសម្រាប់បឋមសិក្សាសំ និងបឋមសិក្សាភូមិប៉ាដល​នៃស្រុកអូរយ៉ាដាវ ខេត្តរតនៈគីរី។ ដែលមានសិស្សសរុបក្នុងគម្រោងទាំងអស់ប្រហែល ៣០០ នាក់",
      imgSrc: p1
    },
    {
      title: "អង្កការឆ័ត្របៃតង",
      year: "២០២២​​​~២០២៣~២០២៤",
      description: "​យើងបានរៀបចំគម្រោងជាច្រើនជាមួយគ្នា សម្រាប់កុមារនៅស្រុកបាទីខេត្តតាកែវ ក្រោមគម្រោងរបស់អង្កការផ្ទាល់។ យើងសម្រេចបាននូវវគ្គសិក្សា Robotic (Arduino), Canva, Scracth, Office 360 និងកម្មវិធី Typing ជាដើម។ ក្នុងគម្រោងនេះ មានសិស្សជាង 40 នាក់បានចូលរួមជាគ្នា ក្នុងមួយវគ្គៗ។ ",
      imgSrc: g2
    },
    {
      title: "វិទ្យាល័យ អារញ្ញសាគរ ស៊ី អែហ្វ​ ស៊ី និង បឋមសិក្សា ព្រៃដង្ហើម",
      year: "២០២៤",
      description: "យើងបានរៀបចំសិក្ខាសាលា តម្រង់ទិស រយៈពេល ២ ថ្ងៃ និងដូចគ្នាដែល យើងក៏បន្តសហការរៀបចំកម្មវិធីបង្រៀនតាមប្រព័ន្ធ Online លើជំនាញ Scratch ដល់សិក្សានុសិស្សនៅទីនោះដូចគ្នា។ ",
      imgSrc: g4
    },
    {
      title: "សាលាចំណេះដឹងទូទៅបុរីវិជ្ជា",
      year: "២០២២​​​~២០២៣",
      description: "យើងបានរៀបចំំវគ្គសិក្សាជាច្រើន ជាមួយសាលាចំណេះដឹងទូទៅបុរីវិជ្ជា នៅក្នុងក្រុងកំពុងឆ្នាំង។ ក្នុងនោះមានទាំងការតាំងបញ្ហាស្នាដៃ និងការចែករំលែកបន្តពីសិស្សនៅទីនោះ។ យើងសម្រេចបានការបណ្ដុះបណ្ដាលសិស្សជាង ១៥០ នាក់ ជាមួយនឹងការតាំងបង្ហាញស្នាដៃជាច្រើនដង។ ហើយគម្រោងនេះគឺជាថវិកាពីសាលាផ្ទាល់",
      imgSrc: g3
    },
    {
      title: "វិទ្យាល័យសម្ដេចឪ, វិទ្យាល័យសម្ដេចហ៊ុនសែនកោះដាច់, វិទ្យាល័យផ្កាំ, វិទ្យាល័យបុស្សស្បូវ, វិទ្យាល័យបរិបូរណ៍",
      year: "២០២២​​​~២០២៣",
      description: "យើងបានរៀបចំគម្រោង Robotics, Scratch, Canva ដាច់ដោយឡែកគ្នា ក្រោមជំនួយផ្សេងៗគ្នាពីស្ថាប័នជាច្រើន។ សិស្សសរុបអាចមានដល់ 500 នាក់",
      imgSrc: p2
    },
    {
      title: "សាលាដូង(លើភ្នំគីរីរម្យ), សាលាជួយសិស្សក្រីក្ររបស់យុវជនសំរាម, សាលាបឋមសិក្សាត្រពាំងល្អក់ ",
      year: "២០២៣~២០២៤",
      description: "យើងបានសហការជាមួយសាលាទាំងនេះ ដើម្បីធ្វើកម្មវិធីសប្បុរធម៌ និងកម្មវីធីពន្លងគំនិត  ដែលសិស្សក្នុងនេះប្រហែលជា ១៥០ នាក់គិតជាសរុប កម្រោងជំនួយរបស់អង្កការតម្លាភាពកម្ពុជា",
      imgSrc: sticker
    }
  ];

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-2xl mx-auto rounded-[2rem] bg-white p-8 shadow-2xl border border-slate-200/80 text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[4px] bg-[#ff383c] rounded-full" />
          <p className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-[#192048] m-0">
            សកម្មភាពរបស់ <span className="text-[#ff383c]">E-ROBOT</span>
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {activities.map((act, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Content Frame Box */}
                <div className="w-full lg:w-1/2 flex justify-center transform transition-transform duration-500 hover:scale-[1.01]">
                  <ImageFrame src={act.imgSrc} />
                </div>

                {/* Text Content Component Block */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-[2rem] bg-white p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/80 transition-all duration-300 hover:shadow-2xl flex flex-col relative overflow-hidden">
                    
                    {/* Decorative colored corner tag matching layout indexing */}
                    <div className={`absolute top-0 w-24 h-[4px] ${isEven ? 'left-8 bg-[#192048]' : 'right-8 bg-[#ff383c]'}`} />

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#ff383c]/10 text-[#ff383c] rounded-full text-xs font-bold uppercase tracking-wider">
                        សកម្មភាពទី ០{index + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wide">
                        {act.year}
                      </span>
                    </div>

                    <p className="text-2xl sm:text-3xl font-black text-[#192048] m-0 leading-tight">
                      {act.title}
                    </p>

                    <div className="w-16 h-[2px] bg-slate-200 my-5" />

                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-medium m-0">
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