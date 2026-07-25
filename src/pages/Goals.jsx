import { Dice1, Dice2, Dice3, Dice4 } from 'lucide-react';
import sticker from '../assets/erobotsticker.png';
import GridGoals from '../components/GridGoals';
import ImageGoal from '../components/ImageGoals'; 

const CARD_DATA = [
  {
    id: 1,
    title: "ផ្តល់ឱកាសឱ្យកុមារកម្ពុជាបានសិក្សា និងស្វែងយល់កាន់តែស៊ីជម្រៅអំពីបច្ចេកវិទ្យា",
    icon: Dice3
  },
  {
    id: 2,
    title: "ជួយឱ្យសិស្សានុសិស្សមានលទ្ធភាពស្វែងរកចំណង់ចំណូលចិត្តពិតប្រាកដរបស់ខ្លួន",
    icon: Dice2
  },
  {
    id: 3,
    title: "កាត់បន្ថយគម្លាតចំណេះដឹងផ្នែកបច្ចេកវិទ្យារវាងសិស្សនៅតាមខេត្ត និងសិស្សនៅទីក្រុង",
    icon: Dice1
  },
  {
    id: 4,
    title: "បណ្តុះស្មារតីស្រឡាញ់ការសិក្សា និងការរុករកថ្មីៗក្នុងវិស័យបច្ចេកវិទ្យា",
    icon: Dice4
  }
];

function Goals() {
  return (
    // Replaced layout background with target dark hex token #191923
    <section className="section min-h-screen bg-ffffff py-16 text-[#191923] ">
      <div className="container max-w-7xl mx-auto px-4 space-y-16 md:space-y-24">
        
        {/* Goals Main Row Layout */}
        <div aria-labelledby="goals-heading" className="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          
          <div className="space-y-6 md:space-y-8">
            {/* Header Description Glass Card */}
            <div className="rounded-3xl bg-[#191923]/96  backdrop-blur-xl p-6 sm:p-8 shadow-2xl border border-[#191923]">
              <span className="text-xs uppercase tracking-wider font-bold text-[#ff383c]">ទិសដៅយុទ្ធសាស្ត្រ</span>
              <h1 id="goals-heading" className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white m-0">
                គោលដៅរបស់ E-ROBOT
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 font-medium">
                យើងប្ដេជ្ញាចិត្តខ្ពស់ក្នុងការជម្រុញការយល់ដឹង បណ្តុះបណ្តាលចំណេះដឹង និងបង្កើតឱកាសថ្មីៗនៅក្នុងវិស័យបច្ចេកវិទ្យាជូនដល់យុវជនជំនាន់ក្រោយនៅកម្ពុជា។
              </p>
            </div>

            {/* Grid List Elements with Glass Properties */}
            <div className="grid gap-4 sm:grid-cols-2">
              {CARD_DATA.map((item) => {
                const IconComponent = item.icon;
                return (
                  <article
                    key={item.id}
                    className="group rounded-2xl bg-[#191923]/96  backdrop-blur-xl p-5 shadow-lg border border-white/10 hover:bg-[#191923] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon wrapper styling matched with #ff383c */}
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#ff383c]/10 text-[#ff383c] mb-4 transition-all duration-300 group-hover:bg-[#ff383c] group-hover:text-white shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs uppercase text-slate-400 font-bold block tracking-wider">
                        ជំហានទី ០{item.id}
                      </span>
                      <p className="mt-2.5 text-sm sm:text-base font-semibold text-white leading-relaxed m-0">
                        {item.title}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Graphic Side Panel Banner transformed into Dark Accent Card */}
          <div className="rounded-3xl bg-[#191923]/96  backdrop-blur-xl p-6 sm:p-8 shadow-2xl border border-[#191923] text-white text-center flex flex-col items-center justify-center min-h-[440px] relative overflow-hidden group">
            {/* Soft background brand ambient lighting element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ff383c]/5 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-xs uppercase tracking-wider font-bold text-[#ff383c]">ការច្នៃប្រឌិត & ការអភិវឌ្ឍ</span>
            <h2 className="mt-3 text-xl sm:text-2xl font-bold leading-tight max-w-xs m-0">
              រួមគ្នាបង្កើតអនាគតឌីជីថលដ៏ភ្លឺស្វាងសម្រាប់កុមារគ្រប់រូប
            </h2>
            
            {/* Visual Frame wrapper matching the application theme */}
            <div className="mt-6 w-full max-w-xs flex justify-center items-center p-4 rounded-2xl bg-[#191923]/96 border border-[#191923] shadow-inner overflow-hidden transition-colors duration-300 group-hover:border-[#ff383c]/20">
              <img 
                alt="E-Robot Goals Illustration Sticker Mascot"
                src={sticker}
                className="w-full h-auto max-h-56 object-contain filter drop-shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

        </div>

        {/* Dynamic Inner Grid Component Container */}
        <div>
          <GridGoals />
        </div>

        {/* Vision Component Wrapper with Dark Glass Panels */}
        <div aria-labelledby="vision-heading" className="space-y-6 md:space-y-8">
          <div className="max-w-2xl mx-auto rounded-3xl bg-[#191923]/96  backdrop-blur-xl p-6 sm:p-8 shadow-2xl border border-[#191923] text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[4px] bg-[#ff383c] rounded-full" />
            <h2 id="vision-heading" className="mt-4 text-2xl sm:text-3xl font-bold text-white m-0">
              ចក្ខុវិស័យរបស់ E-ROBOT
            </h2>
          </div>
          
          <div className="rounded-3xl overflow-hidden bg-[#191923]/96  backdrop-blur-xl shadow-2xl border border-[#191923] p-4 sm:p-6 md:p-8">
            <ImageGoal />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Goals;