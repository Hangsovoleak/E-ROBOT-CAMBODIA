import { NotebookTabs, Cpu, Route } from 'lucide-react';

const GridSection = () => {
  const cardData = [
    { 
      icon: <NotebookTabs className="w-8 h-8" />, 
      title: "កម្មវិធីសិក្សា", 
      desc: "កម្មវិធីសិក្សារបស់យើងត្រូវបានរៀបចំឡើងដើម្បីផ្ដល់នូវជំនាញ និងចំណេះដឹងបច្ចេកវិទ្យាដែលសិស្សានុសិស្សត្រូវការសម្រាប់ការជោគជ័យក្នុងយុគសម័យទំនើប។" 
    },
    { 
      icon: <Cpu className="w-8 h-8" />, 
      title: "ប្រព័ន្ធអេកូឡូស៊ី", 
      desc: "ការបង្កើតសហគមន៍ដ៏រស់រវើកមួយសម្រាប់អ្នកសិក្សា និងអ្នកអប់រំ ដើម្បីផ្លាស់ប្តូរបទពិសោធន៍ និងរីកចម្រើនជាមួយគ្នា។" 
    },
    { 
      icon: <Route className="w-8 h-8" />, 
      title: "វិថីសិក្សាច្បាស់លាស់", 
      desc: "ការរៀបចំផ្លូវដើរ និងរចនាសម្ព័ន្ធសិក្សាដែលជួយណែនាំសិស្សានុសិស្សតាំងពីកម្រិតដំបូង រហូតក្លាយជាអ្នកជំនាញ។" 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {cardData.map((item, index) => (
        <div 
          key={index} 
          className="text-center items-center bg-[#ff413c] p-4 rounded-xl shadow-lg border-2 border-transparent hover:border-red-600 transition-all duration-300 flex flex-col justify-center min-h-[200px] hover:scale-105"
        >  
          <div className="mb-4 text-white bg-white/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <h3 className="text-white text-2xl font-black mb-2 uppercase tracking-tighter">
            {item.title}
          </h3>
          
          <p className="text-white/80 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GridSection;