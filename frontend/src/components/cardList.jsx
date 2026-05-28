import {Terminal, Lightbulb, Rocket} from 'lucide-react';


const cardData = [
  {
    id: 1,
    title: "ជំនាញបច្ចេកវិទ្យាស្ទាត់ជំនាញ",
    description: "កសាងមូលដ្ឋានគ្រឹះឌីជីថលដ៏រឹងមាំសម្រាប់សិស្សានុសិស្ស។",
    sticker: <Terminal className="h-6 w-6 text-white" />
  },
  {
    id: 2,
    title: "ផ្នត់គំនិតសហគ្រិនភាព",
    description: "ជំរុញការបង្កើតថ្មី និងការដោះស្រាយបញ្ហាតាមរយៈភាពច្នៃប្រឌិត។",
    sticker: <Lightbulb color="#ffffff" />
  },
  {
    id: 3,
    title: "ជំនាញសម្រាប់ថ្ងៃអនាគត",
    description: "ត្រៀមលក្ខណៈឱ្យសិស្សានុសិស្សរួចរាល់សម្រាប់បញ្ហាប្រឈមនៃពិភពលោកទំនើប។",
    sticker: <Rocket color="#ffffff" />
  }
];

export default function CardList() {
  return (
    <div className="space-y-6">
      {cardData.map((item) => (
        <div key={item.id} className="flex items-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300">
          
          {/* Blue Box with Sticker */}
          <div className="relative flex items-center justify-center w-12 h-12 bg-[#192048] rounded-lg shrink-0">
            <span className="text-xl">{item.sticker}</span>
          </div>

          {/* Unique Text Content */}
          <div className="ml-6 flex-1">
            <h4 className="text-sm font-bold text-gray-900 leading-tight">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              {item.description}
            </p>
          </div>
          
        </div>
      ))}
    </div>
  );
}