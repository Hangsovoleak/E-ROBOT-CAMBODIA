import sticker from '../assets/erobotsticker.png';
import GridGoals from '../components/GridGoals';
import {Dice1, Dice2, Dice3, Dice4} from 'lucide-react';
import ImageGoal from '../components/ImageGoals'
import Subscribe from '../components/Subscribe';

const CardData = [
  {
    id: 1,
    title: "ផ្តល់ឱកាសឱ្យកុមារកម្ពុជាបានសិក្សា និងស្វែងយល់កាន់តែស៊ីជម្រៅអំពីបច្ចេកវិទ្យា",
    sticker: <Dice1 color='#ff413c'/>
  },
  {
    id: 2,
    title: "ជួយឱ្យសិស្សានុសិស្សមានលទ្ធភាពស្វែងរកចំណង់ចំណូលចិត្តពិតប្រាកដរបស់ខ្លួន",
    sticker: <Dice2 color='#ff413c'/>
  },
  {
    id: 3,
    title: "កាត់បន្ថយគម្លាតចំណេះដឹងផ្នែកបច្ចេកវិទ្យារវាងសិស្សនៅតាមខេត្ត និងសិស្សនៅទីក្រុង",
    sticker: <Dice3 color='#ff413c'/>
  },
  {
    id: 4,
    title: "បណ្តុះស្មារតីស្រឡាញ់ការសិក្សា និងការរុករកថ្មីៗក្នុងវិស័យបច្ចេកវិទ្យា",
    sticker: <Dice4 color='#ff413c'/>
  }
];

function Goals() {
    return (
        <div className="min-h-screen bg-white/90 w-full overflow-x-hidden">
            <section className="py-12 md:py-20 px-4 md:px-24">
                <div className="mt-6">
                    <p className="text-center text-[#ff413c] text-2xl md:text-4xl font-bold mb-12 uppercase tracking-tight">
                        គោលដៅរបស់ E-ROBOT
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Left Side: Image */}
                        <div className="flex justify-center">
                            <img 
                                alt="E-Robot Goals Illustration"
                                src={sticker}
                                className="w-full max-w-md h-auto rounded-lg object-contain"
                            />
                        </div>

                        {/* Right Side: Goals List */}
                        <div className="space-y-4">
                        {CardData.map((item) => (
                            <div 
                                key={item.id} 
                                className="flex items-center p-4 bg-[#192048] rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shrink-0 shadow-inner">
                                    {item.sticker}
                                </div>

                                <div className="ml-6">
                                    <p className="text-md md:text-lg font-bold text-white leading-snug">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                {/* Spacing between sections */}
                <div className="my-20">
                    <GridGoals />
                </div>

                <p className="text-center text-[#ff413c] text-2xl md:text-4xl font-bold mb-10 uppercase tracking-tight">
                    ចក្ខុវិស័យរបស់ E-ROBOT
                </p>
                
                <ImageGoal />

                <div className="mt-20">
                    <Subscribe />
                </div>
            </section>
        </div>
    );
}

export default Goals;