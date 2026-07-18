import { Terminal, Lightbulb, Rocket } from 'lucide-react';

const cardData = [
  {
    id: 1,
    title: "ជំនាញបច្ចេកវិទ្យាស្ទាត់ជំនាញ",
    description: "កសាងមូលដ្ឋានគ្រឹះឌីជីថលដ៏រឹងមាំសម្រាប់សិស្សានុសិស្ស។",
    sticker: <Terminal className="h-5 w-5 text-brand-warm-white" />
  },
  {
    id: 2,
    title: "ផ្នត់គំនិតសហគ្រិនភាព",
    description: "ជំរុញការបង្កើតថ្មី និងការដោះស្រាយបញ្ហាតាមរយៈភាពច្នៃប្រឌិត។",
    sticker: <Lightbulb className="h-5 w-5 text-brand-warm-white" />
  },
  {
    id: 3,
    title: "ជំនាញសម្រាប់ថ្ងៃអនាគត",
    description: "ត្រៀមលក្ខណៈឱ្យសិស្សានុសិស្សរួចរាល់សម្រាប់បញ្ហាប្រឈមនៃពិភពលោកទំនើប។",
    sticker: <Rocket className="h-5 w-5 text-brand-warm-white" />
  }
];

export default function CardList() {
  return (
    <div className="w-100 space-y-4 max-w-xl mx-auto">
      {cardData.map((item) => (
        <div 
          key={item.id} 
          className="group relative flex items-start sm:items-center p-5 bg-white border border-[var(--border)] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
        >
          {/* Subtle Accent Glow Ring on Hover */}
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-blue/20 transition-colors duration-300 pointer-events-none" />

          {/* Premium Blue Box with Sticker */}
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-blue to-[#2A3F6F] rounded-2xl shadow-[0_4px_12px_rgba(62,91,153,0.2)] shrink-0 transition-transform duration-300 group-hover:scale-105">
            {item.sticker}
          </div>

          {/* Typography Content using your typography architecture */}
          <div className="ml-5 flex-1 min-w-0">
            <h4 className="font-sans font-bold text-base text-brand-charcoal leading-snug transition-colors duration-200 group-hover:text-brand-blue">
              {item.title}
            </h4>
            <p className="font-sans font-medium text-sm text-[var(--text)] mt-1.5 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Sleek structural detail to anchor layout balance */}
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-brand-yellow/0 group-hover:bg-brand-yellow/80 ml-4 transition-all duration-300 transform scale-75 group-hover:scale-100" />
        </div>
      ))}
    </div>
  );
}