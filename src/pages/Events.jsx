import React from 'react';
import ImageFrame from '../components/ImageFrame';
import { Calendar, MapPin, Users, Cpu, Code, Palette, HeartHandshake } from 'lucide-react';

import p1 from '../assets/s3.png';
import g2 from '../assets/s2.png';
import g3 from '../assets/s1.png';
import g4 from '../assets/p3.jpg';
import p2 from '../assets/g0.jpg';
import ps from '../assets/ps.jpg';

export default function Events() {
  const servicePillars = [
    {
      icon: Cpu,
      title: "Robotics & Arduino",
      desc: "បង្រៀនបង្កើត និងបញ្ជា Robot ជាមួយគ្រឿងអេឡិចត្រូនិក Arduino ដល់សិស្សានុសិស្ស។"
    },
    {
      icon: Code,
      title: "Coding (Scratch)",
      desc: "បណ្ដុះបណ្ដាលការសរសេរកម្មវិធីកម្រិតដំបូងតាមបែប Logic និងភាពច្នៃប្រឌិត។"
    },
    {
      icon: Palette,
      title: "Canva & Design",
      desc: "បង្រៀនជំនាញរៀបចំរូបភាព មាតិកា និងការបង្កើតស្នាដៃឌីជីថលបែបទំនើប។"
    },
    {
      icon: HeartHandshake,
      title: "STEM & Charity",
      desc: "រៀបចំសិក្ខាសាលាតម្រង់ទិស និងកម្មវិធីសប្បុរសធម៌នៅតាមសាលារៀនក្នុងខេត្ត។"
    }
  ];

  const activities = [
    {
      title: "សាលាវិទ្យាល័យសោមធំ (ខេត្តរតនគិរី)",
      location: "ខេត្តរតនគិរី",
      year: "២០២២ - ២០២៤",
      students: "៣០០+ នាក់",
      tags: ["Robotics", "Scratch", "Canva"],
      description: "យើងរៀបចំសហការជាមួយសាលាជាច្រើនគម្រោង ក្នុងនោះមានទាំងគម្រោង ESTEM, One School One Robot និងពន្លកគំនិត។ ក្នុងនោះ យើងបានសហការជាមួយអង្គការតម្លាភាពកម្ពុជា, អង្គការ STEM Cambodia ស្ថានទូតប្រទេសអង់គ្លេស, ការបរិច្ចាគពីសប្បុរសជន ក៏ដូចជាការសហការពីខាងសាលាផ្ទាល់។ យើងមានបណ្ដុះបណ្ដាលលើ Robotics (Arduino), Canva, Scratch និងធ្វើកម្មវិធីសប្បុរសធម៌ផងដែរសម្រាប់បឋមសិក្សាសំ និងបឋមសិក្សាភូមិប៉ាដល​នៃស្រុកអូរយ៉ាដាវ ខេត្តរតនគិរី។",
      imgSrc: p1
    },
    {
      title: "អង្គការឆ័ត្របៃតង",
      location: "ស្រុកបាទី ខេត្តតាកែវ",
      year: "២០២២ - ២០២៤",
      students: "៤០+ នាក់/វគ្គ",
      tags: ["Arduino", "Scratch", "Office 365"],
      description: "យើងបានរៀបចំគម្រោងជាច្រើនជាមួយគ្នា សម្រាប់កុមារនៅស្រុកបាទី ខេត្តតាកែវ ក្រោមគម្រោងរបស់អង្គការផ្ទាល់។ យើងសម្រេចបាននូវវគ្គសិក្សា Robotics (Arduino), Canva, Scratch, Office 365 និងកម្មវិធី Typing ជាដើម។",
      imgSrc: g2
    },
    {
      title: "វិទ្យាល័យ អារញ្ញសាគរ និង បឋមសិក្សា ព្រៃដង្ហើម",
      location: "ខេត្តសៀមរាប",
      year: "២០២៣ - ២០២៤",
      students: "១០០+ នាក់",
      tags: ["Online Scratch", "សិក្ខាសាលា"],
      description: "យើងបានរៀបចំសិក្ខាសាលាតម្រង់ទិស រយៈពេល ២ ថ្ងៃ ហើយយើងក៏បន្តសហការរៀបចំកម្មវិធីបង្រៀនតាមប្រព័ន្ធ Online លើជំនាញ Scratch ដល់សិក្សានុសិស្សនៅទីនោះដូចគ្នា។",
      imgSrc: g4
    },
    {
      title: "សាលាចំណេះដឹងទូទៅបុរីវិជ្ជា",
      location: "ក្រុងកំពង់ឆ្នាំង",
      year: "២០២២ - ២០២៣",
      students: "១៥០+ នាក់",
      tags: ["Robotics Display", "Canva"],
      description: "យើងបានរៀបចំវគ្គសិក្សាជាច្រើន ជាមួយសាលាចំណេះដឹងទូទៅបុរីវិជ្ជា នៅក្នុងក្រុងកំពង់ឆ្នាំង។ ក្នុងនោះមានទាំងការតាំងបង្ហាញស្នាដៃ និងការចែករំលែកបន្តពីសិស្សនៅទីនោះ។",
      imgSrc: p2
    },
    {
      title: "វិទ្យាល័យសម្ដេចឪ, វិទ្យាល័យសម្ដេចហ៊ុនសែនកោះដាច់, វិទ្យាល័យផ្កាំ",
      location: "រាជធានីភ្នំពេញ & ខេត្តនានា",
      year: "២០២២ - ២០២៣",
      students: "៥០០+ នាក់",
      tags: ["Robotics", "STEM Campaign"],
      description: "យើងបានរៀបចំគម្រោង Robotics, Scratch, Canva ដាច់ដោយឡែកពីគ្នា ក្រោមជំនួយផ្សេងៗគ្នាពីស្ថាប័នជាច្រើន។ សិស្សសរុបអាចមានដល់ ៥០០ នាក់។",
      imgSrc: g3
    },
    {
      title: "សាលាដូង (ភ្នំគិរីរម្យ) & សាលាបឋមសិក្សាត្រពាំងល្អក់",
      location: "ខេត្តកំពង់ស្ពឺ",
      year: "២០២៣ - ២០២៤",
      students: "១៥០+ នាក់",
      tags: ["សប្បុរសធម៌", "ពន្លកគំនិត"],
      description: "យើងបានសហការជាមួយសាលាទាំងនេះ ដើម្បីធ្វើកម្មវិធីសប្បុរសធម៌ និងកម្មវិធីពន្លកគំនិត ដែលមានសិស្សចូលរួមប្រហែលជា ១៥០ នាក់សរុប ក្រោមគម្រោងជំនួយរបស់អង្គការតម្លាភាពកម្ពុជា។",
      imgSrc: ps
    }
  ];

  return (
    <section className="min-h-screen bg-white py-10 sm:py-14 text-slate-800">
      <div className="container max-w-7xl mx-auto px-4 space-y-12 sm:space-y-16">
        
        {/* Header section */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xs border border-slate-200 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-[#0E79B2] rounded-full" />
          <span className="text-xs uppercase font-extrabold text-[#0E79B2] tracking-wider">សេវាកម្ម & បេសកកម្ម</span>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 m-0 leading-snug">
            សកម្មភាព និងការបណ្តុះបណ្តាលរបស់ <span className="text-[#0E79B2]">E-ROBOT</span>
          </h1>
          <p className="mt-3 text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            យើងផ្តល់ជូននូវវគ្គបណ្តុះបណ្តាលបច្ចេកវិទ្យាឥតគិតថ្លៃ សិក្ខាសាលាតម្រង់ទិស និងសកម្មភាពចុះបេសកកម្មអប់រំនៅតាមបណ្តាខេត្តទូទាំងប្រទេសកម្ពុជា។
          </p>
        </div>

        {/* Services Highlights Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {servicePillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50/80 p-5 border border-slate-200/80 hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0E79B2] border border-slate-200 flex items-center justify-center mb-3 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 m-0">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-slate-600 font-medium leading-relaxed m-0">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Title for Mission Activities */}
        <div className="text-center pt-4">
          <span className="text-xs uppercase font-extrabold text-[#0E79B2] tracking-wider">កំណត់ត្រាសកម្មភាព</span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 m-0">
            បេសកកម្មអប់រំដែលបានសម្រេច
          </h2>
        </div>

        {/* List of activities */}
        <div className="space-y-10 sm:space-y-14">
          {activities.map((act, index) => {
            const isEven = index % 2 === 0;
            const displayIndex = (index + 1).toString().padStart(2, '0');

            return (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image panel */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <ImageFrame src={act.imgSrc} alt={act.title} />
                </div>

                {/* Content description panel */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-3xl bg-white p-5 sm:p-7 shadow-2xs border border-slate-200 hover:border-sky-300 transition-all duration-200 flex flex-col relative overflow-hidden">
                    <div className={`absolute top-0 w-20 h-[3px] bg-[#0E79B2] ${isEven ? 'left-8' : 'right-8'}`} />

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-sky-50 text-[#0E79B2] border border-sky-100 rounded-full text-xs font-extrabold tracking-wider">
                        សកម្មភាពទី {displayIndex}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-[#0E79B2]" />
                        <span>{act.year}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                        <MapPin className="w-3.5 h-3.5 text-red-500" />
                        <span>{act.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{act.students}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 m-0 leading-snug">
                      {act.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 my-3">
                      {act.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="w-12 h-[2px] bg-slate-200 mb-3" />

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium m-0">
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