import { Dice1, Dice2, Dice3, Dice4 } from 'lucide-react';
import sticker from '../assets/erobotsticker.png';
import GridGoals from '../components/GridGoals';
import ImageGoal from '../components/ImageGoals'; // Unified name variant based on usage

const CARD_DATA = [
  {
    id: 1,
    title: "ផ្តល់ឱកាសឱ្យកុមារកម្ពុជាបានសិក្សា និងស្វែងយល់កាន់តែស៊ីជម្រៅអំពីបច្គេកវិទ្យា",
    icon: Dice1
  },
  {
    id: 2,
    title: "ជួយឱ្យសិស្សានុសិស្សមានលទ្ធភាពស្វែងរកចំណង់ចំណូលចិត្តពិតប្រាកដរបស់ខ្លួន",
    icon: Dice2
  },
  {
    id: 3,
    title: "កាត់បន្ថយគម្លាតចំណេះដឹងផ្នែកបច្ចេកវិទ្យារវាងសិស្សនៅតាមខេត្ត និងសិស្សនៅទីក្រុង",
    icon: Dice3
  },
  {
    id: 4,
    title: "បណ្តុះស្មារតីស្រឡាញ់ការសិក្សា និងការរុករកថ្មីៗក្នុងវិស័យបច្ចេកវិទ្យា",
    icon: Dice4
  }
];

function Goals() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16 px-4 sm:px-6 md:px-10 lg:px-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Goals Section */}
        <section aria-labelledby="goals-heading" className="grid gap-12 lg:grid-cols-[0.9fr_0.7fr] items-start">
          
          <div className="space-y-8">
            {/* Header Description Card */}
            <div className="rounded-[2rem] bg-white p-8 shadow-2xl border border-slate-200/80">
              <p className="text-sm uppercase tracking-wider font-semibold text-[#ff383c]">ទិសដៅយុទ្ធសាស្ត្រ</p>
              <h1 id="goals-heading" className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-[#192048]">
                គោលដៅរបស់ E-ROBOT
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
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
                    className="rounded-[1.75rem] bg-white p-6 shadow-lg border border-slate-200/80 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 rounded-3xl bg-[#ff383c]/10 text-[#ff383c] mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs uppercase text-slate-400 font-bold block">
                        ជំហានទី ០{item.id}
                      </span>
                      <p className="mt-3 text-base font-bold text-slate-800 leading-relaxed">
                        {item.title}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Graphic Side Panel Banner */}
          <div className="rounded-[2rem] bg-[#192048] p-8 shadow-2xl text-white text-center flex flex-col items-center justify-center min-h-[460px]">
            <p className="text-sm uppercase tracking-wider font-semibold text-[#ffcbc5]">ការច្នៃប្រឌិត & ការអភិវឌ្ឍ</p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-black leading-tight max-w-sm">
              រួមគ្នាបង្កើតអនាគតឌីជីថលដ៏ភ្លឺស្វាងសម្រាប់កុមារគ្រប់រូប
            </h2>
            
            <div className="mt-8 w-full max-w-xs flex justify-center items-center p-4 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-inner">
              <img 
                alt="E-Robot Goals Illustration Sticker Mascot"
                src={sticker}
                className="w-full h-auto max-h-64 object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>

        </section>

        {/* Dynamic Inner Component Grid */}
        <div>
          <GridGoals />
        </div>

        {/* Vision Component Wrapper */}
        <section aria-labelledby="vision-heading" className="space-y-8">
          <div className="max-w-3xl mx-auto rounded-[2rem] bg-white p-8 shadow-xl border border-slate-200/80 text-center">
            <h2 id="vision-heading" className="text-3xl sm:text-4xl font-black text-[#192048]">
              ចក្ខុវិស័យរបស់ E-ROBOT
            </h2>
          </div>
          
          <div className="rounded-[2rem] overflow-hidden bg-white shadow-2xl border border-slate-200/80 p-4 sm:p-6 md:p-8">
            <ImageGoal />
          </div>
        </section>

      </div>
    </div>
  );
}

export default Goals;