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
      title: "សាលាបឋមសិក្សា ត្រពាំងល្អក់",
      year: "២៧​ សីហា ២០២៤",
      description: "នេះជាសកម្មភាពនៃដំណើរអនុស្សាវរីយ៌ ឆ្ពោះទៅកាន់ខេត្តព្រះវិហារ។ ហើយវាជាការចងចាំដ៏ល្អមួយសម្រាប់ពួកនិងសិស្សនុសិស្សនៅទីនោះ។",
      imgSrc: p1
    },
    {
      title: "អង្គការ Green Umbrella",
      year: "២ កញ្ញា ២០២៣ - ២៣ ធ្នូ ២០២៣",
      description: "តាមរយៈក្តីស្រមៃរបស់សមាជិកក្នុងក្រុម E-Robot ពួកយើងបានចុះទៅខេត្តតាកែវដើម្បីអនុវត្តគម្រោង STEM For Youth អស់រយៈពេល៣ខែ សម្រាប់ចែករំលែកនូវចំណេះដឹងផ្នែកបច្ចេកវិទ្យាដល់សិស្សានុសិស្ស។​ ពួកយើងសង្ឃឹមថាប្អូនៗទាំងអស់បានទទួលនូវចំណេះ ក៏ដូចជាបទពិសោធន៍ថ្មី ដើម្បីជួយតម្រង់ទិសក្នុងការជ្រើសរើសជំហានបន្ទាប់នៃជីវិត សម្រាប់កសាងខ្លួនឯង គ្រួសារ និងសង្គមជាតិឲ្យកាន់តែរីកចម្រើន។",
      imgSrc: g2
    },
    {
      title: "វិទ្យាល័យ សោមធំ",
      year: "២៣ កញ្ញា ២០២៣ - ០៩ ធ្នូ ២០២៣",
      description: "តាមរយៈក្តីស្រមៃរបស់សមាជិកក្នុងក្រុម E-Robot ពួកយើងបានចុះទៅខេត្តរតនគិរីដើម្បីអនុវត្តគម្រោង STEM For Youth សម្រាប់ចែករំលែកនូវចំណេះដឹងផ្នែកបច្ចេកវិទ្យាដល់សិស្សានុសិស្ស។ ក្នងនោះផងដែរយើងក៏មានការសហការជាមួយ​ STEM Education Organization for Cambodia និងមានការគាំទ្រពី British Embassy in Cambodia, MoEYS Cambodia ក៏ដូចជា Ministry of Environment ផងដែរ។",
      imgSrc: g4
    },
    {
      title: "វិទ្យាល័យ សម្ដេចឪ",
      year: "១៦ កញ្ញា ២០២៣ - ១៣ មករា ២០២៤",
      description: "យើងបានចុះទៅប្រារព្ធកម្មវិធីគម្រោង STEM For Youth ដើម្បីចែករំលែកចំណេះដឹងទាក់ទងនឹងផ្នែកបច្ចេកវិទ្យាដល់សិស្សានុសិស្សនៅទីនោះ។ ក្នុងនោះផងដែរ ពួកយើងក៏បាននាំយកនូវសម្ភារៈសិក្សា សម្លៀកបំពាក់ និងថវិការបស់បងប្អូនទាំងអស់គ្នាដែលបានបរិច្ចាគ ទៅចែកជូនដល់ប្អូនៗនៅក្នុងខេត្តបាត់ដំបងផងដែរ។",
      imgSrc: g3
    },
    {
      title: "វិទ្យាល័យ អារញ្ញសាគរ ស៊ី អែហ្វ​ ស៊ី និង បឋមសិក្សា ព្រៃដង្ហើម",
      year: "២៣ ធ្នូ ២០២៤ - ២៤ ធ្នូ ២០២៤",
      description: "នេះជាសកម្មភាពមួយចំនួននៃការធ្វើសិក្ខាសាលាស្តីពីការតម្រង់ទិស និងការត្រៀមខ្លួ​នសម្រាប់ថ្នាក់ឧត្តមសិក្សានៅវិទ្យាល័យអារញ្ញសាគរ ស៊ី អែហ្វ​ ស៊ី ព្រមទាំងការចែកសម្ភារៈសិក្សា និងការលេងល្បែងកម្សាន្តជាមួយប្អូនៗសិស្សានុសិស្ស​ នៅសាលាបឋមសិក្សាអារញ្ញសាគរ និង​សាលា​បឋមសិក្សាព្រៃដង្ហើម ខេត្តសៀមរាប​។ យើងខ្ញុំសូមអរគុណដល់អ្នកទាំងអស់គ្នាដែលបានចូលរួមបរិច្ចាគមកកាន់គម្រោងមួយនេះ និងដៃគូរសហការរបស់យើង CAMEX - Cambodia Higher Education Forum and Exhibition និង CAMEX Volunteers Community ដែលបានចូលរួមចំណែករៃអង្គាសថវិកមកជួយក្នុងគម្រោងមួយនេះផងដែរ",
      imgSrc: p2
    },
    {
      title: "នឹងមាននៅឆាប់ៗនេះ",
      year: "ឆ្នាំ ២០២៦",
      description: "សូមបន្តតាមដាននូវសកម្មភាព និងគម្រោងថ្មីៗបន្តទៀតរបស់ពួកយើងក្នុងពេលឆាប់ៗខាងមុខនេះ។",
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