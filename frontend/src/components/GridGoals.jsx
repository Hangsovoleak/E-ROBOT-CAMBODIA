import meet from '../assets/meet.png'
import money from '../assets/money.png'
import volunteer from '../assets/volunteering.png'

const GridGoals = () => {
  const cardData = [
    { image: meet, desc: "សិក្សាឥតគិតថ្លៃ តាមរយះអនឡាញ Google Meet" },
    { image: money, desc: "ទទួលបានសម្ភារះសិក្សាពីសប្បុរសជន" },
    { image: volunteer, desc: "ទទួលបានការបណ្ដុះបណ្ដាលពីយុវជន ស្ម័គ្រដែលមានជំនាញ" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white mt-4 mb-16">
      {cardData.map((item, index) => (
        <div 
          key={index} 
          className="flex flex-row items-center justify-between bg-[#1e2342] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 min-h-[160px]"
        >  
          <div className="w-1/2 text-left">
            <p className="text-white text-xl font-bold leading-tight">
              {item.desc}
            </p>
          </div>
          
          <div className="w-1/2 flex justify-end">
            <img 
              src={item.image} 
              alt="goal icon" 
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridGoals;