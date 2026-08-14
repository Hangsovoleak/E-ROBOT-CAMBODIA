import React from 'react';
import { Target, Compass, Sparkles, Layers } from 'lucide-react';
import sticker from '../assets/erobotsticker.png';
import GridGoals from '../components/GridGoals';
import ImageGoal from '../components/ImageGoals'; 

const CARD_DATA = [
  {
    id: 1,
    title: "ផ្តល់ឱកាសឱ្យកុមារកម្ពុជាបានសិក្សា និងស្វែងយល់កាន់តែស៊ីជម្រៅអំពីបច្ចេកវិទ្យា",
    icon: Target
  },
  {
    id: 2,
    title: "ជួយឱ្យសិស្សានុសិស្សមានលទ្ធភាពស្វែងរកចំណង់ចំណូលចិត្តពិតប្រាកដរបស់ខ្លួន",
    icon: Compass
  },
  {
    id: 3,
    title: "កាត់បន្ថយគម្លាតចំណេះដឹងផ្នែកបច្ចេកវិទ្យារវាងសិស្សនៅតាមខេត្ត និងសិស្សនៅទីក្រុង",
    icon: Layers
  },
  {
    id: 4,
    title: "បណ្តុះស្មារតីស្រឡាញ់ការសិក្សា និងការរុករកថ្មីៗក្នុងវិស័យបច្ចេកវិទ្យា",
    icon: Sparkles
  }
];

export default function Goals() {
  return (
    <section className="min-h-screen bg-white py-10 sm:py-14 text-slate-800">
      <div className="container max-w-7xl mx-auto px-4 space-y-12 md:space-y-16">
        
        {/* Goals Main Row Layout */}
        <div aria-labelledby="goals-heading" className="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          
          <div className="space-y-6 md:space-y-8">
            {/* Header Description Card */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-2xs border border-slate-200">
              <span className="text-xs uppercase tracking-wider font-extrabold text-[#0E79B2]">ទិសដៅយុទ្ធសាស្ត្រ</span>
              <h1 id="goals-heading" className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 m-0">
                គោលដៅរបស់ E-ROBOT
              </h1>
              <p className="mt-4 text-xs sm:text-base leading-relaxed text-slate-600 font-medium">
                យើងប្ដេជ្ញាចិត្តខ្ពស់ក្នុងការជម្រុញការយល់ដឹង បណ្តុះបណ្តាលចំណេះដឹង និងបង្កើតឱកាសថ្មីៗនៅក្នុងវិស័យបច្ចេកវិទ្យាជូនដល់យុវជនជំនាន់ក្រោយនៅកម្ពុជា។
              </p>
            </div>

            {/* Grid List Elements */}
            <div className="grid gap-4 sm:grid-cols-2">
              {CARD_DATA.map((item) => {
                const IconComponent = item.icon;
                return (
                  <article
                    key={item.id}
                    className="group rounded-2xl bg-white p-5 shadow-2xs border border-slate-200 hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-50 text-[#0E79B2] border border-sky-100 mb-3 transition-all duration-200 group-hover:bg-[#0E79B2] group-hover:text-white shadow-2xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs uppercase text-slate-400 font-bold block tracking-wider">
                        គោលដៅទី ០{item.id}
                      </span>
                      <p className="mt-2 text-xs sm:text-sm font-bold text-slate-900 leading-relaxed m-0">
                        {item.title}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Graphic Side Panel Banner */}
          <div className="rounded-3xl bg-slate-50/70 p-6 sm:p-8 border border-slate-200 text-slate-900 text-center flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden group">
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#0E79B2]">ការច្នៃប្រឌិត & ការអភិវឌ្ឍ</span>
            <h2 className="mt-3 text-lg sm:text-xl font-extrabold leading-tight max-w-xs m-0 text-slate-900">
              រួមគ្នាបង្កើតអនាគតឌីជីថលដ៏ភ្លឺស្វាងសម្រាប់កុមារគ្រប់រូប
            </h2>
            
            <div className="mt-6 w-full max-w-xs flex justify-center items-center p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-hidden transition-all duration-200 group-hover:border-sky-300">
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
          <div className="max-w-2xl mx-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xs border border-slate-200 text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-[#0E79B2] rounded-full" />
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#0E79B2]">តម្លៃ និងការប្តេជ្ញាចិត្ត</span>
            <h2 id="vision-heading" className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 m-0">
              ចក្ខុវិស័យរបស់ E-ROBOT
            </h2>
          </div>
          
          <ImageGoal />
        </div>

      </div>
    </section>
  );
}