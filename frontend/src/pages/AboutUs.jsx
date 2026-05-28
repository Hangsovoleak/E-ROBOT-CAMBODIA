import Navbar from '../components/Navbar'
import Image1 from '../assets/ImageBackground.png'
import Image2 from '../assets/image2.png'
import Footer from '../components/Footer'
import CardList from '../components/cardList'
import Folder from '../components/Folder'
import GridSection from '../components/GreidSection'
import GridFeedback from '../components/GridFeedback'
import Subscribe from '../components/Subscribe'

import { Satellite } from 'lucide-react'

function AboutUs() {
    return (
        <div className="min-h-screen bg-white/90 w-full overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden p-4 md:p-8">
                <img
                    src={Image1}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 flex items-center h-full px-4 md:px-16">
                    <div className="max-w-4xl text-white">
                        <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 backdrop-blur-md rounded-full px-4 py-1.5 md:px-5 md:py-2">
                            <Satellite className="w-3 h-3 md:w-4 md:h-4 text-[#192048]/80" />
                            <span className="text-xs md:text-sm font-medium">
                                ឧត្តមភាពក្នុងការអប់រំបច្ចេកវិទ្យា
                            </span>
                        </div>

                        {/* Responsive Text: Smaller on mobile, Large on Desktop */}
                        <p className="mt-6 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-white">
                            E-ROBOT
                        </p>

                        <p className="mt-4 text-sm md:text-2xl font-semibold uppercase text-white/90">
                            THE UNIVERSE OF US IS LOVING AND CURIOSITY
                        </p>

                        <p className="mt-6 text-sm md:text-lg leading-relaxed md:leading-8 text-white/80 max-w-2xl">
                            ការចូលរួមអភិវឌ្ឍន៍សង្គម គឺជាការរៀបចំអនាគតសម្រាប់មនុស្សជំនាន់ក្រោយ។
                            យើងជឿជាក់ថា ការអប់រំគឺជាគន្លងដ៏សំខាន់ក្នុងការបង្កើតសង្គមដែលមានការរីកចម្រើន។
                        </p>

                        <button className="mt-8 inline-flex items-center gap-3 bg-[#222b5d]/90 hover:bg-[#192048] text-white text-xs md:text-sm font-bold py-3 px-6 md:px-7 rounded-full transition-all duration-300 hover:translate-x-2">
                            មើលគោលដៅរបស់យើង
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="bg-[#f9f9f9] py-12 md:py-20 px-4 md:px-24">
                
                {/* WHAT WE ARE - Responsive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
                    <div className="mt-8 md:mt-24">
                        <p className="text-[#192048] text-2xl md:text-4xl font-black mb-6 md:mb-12 uppercase tracking-tight">
                            ស្វែងយល់អំពីពួកយើង
                        </p>
                        <p className="text-black text-base md:text-lg leading-relaxed max-w-md">
                            ពួកយើងធ្វើអ្វីដែលសិស្សានុសិស្សគួរដឹង គួររៀន និងគួរស្វែងយល់។ យើងគឺជាក្រុមការងារដែលអាចផ្លាស់ប្តូរជីវិត និងជួយឱ្យពួកគេរីកចម្រើនតាមរយៈទេពកោសល្យរៀងៗខ្លួន។
                        </p>
                    </div>
                    <CardList />
                </div>

                {/* HOW YOU CAN KNOWS - Responsive Timeline */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center my-20 md:my-32">
                    
                    {/* The Timeline (Shows 2nd on mobile, 1st on Desktop) */}
                    <div className="relative order-2 lg:order-1">
                        {/* The Vertical Line */}
                        <div className="absolute left-5 md:left-6 top-5 bottom-5 w-[3px] md:w-[4px] bg-[#192048]"></div>
                        
                        <div className="space-y-12 md:space-y-16">
                            {[
                                { title: "ការកសាងមូលដ្ឋានគ្រឹះ", desc: "គោលការណ៍បច្ចេកវិទ្យាសំខាន់ៗ និងចំណេះដឹងឌីជីថល" },
                                { title: "ការអភិវឌ្ឍជំនាញ", desc: "ការរៀនតាមរយៈការអនុវត្តផ្ទាល់លើការសរសេរកម្មវិធី និងការធ្វើគម្រោង" },
                                { title: "នវានុវត្តន៍ និងសហគ្រិនភាព", desc: "ការបណ្តុះការគិតបែបច្នៃប្រឌិត និងការអភិវឌ្ឍជំនាញធុរកិច្ច" }
                            ].map((step, index) => (
                                <div key={index} className="relative flex items-start gap-6 md:gap-8 group">
                                    <div className="relative flex items-center justify-center shrink-0 w-10 h-10 md:w-12 md:h-12">
                                        <div className="w-full h-full bg-[#ff413c] rounded-full z-10 transition-transform group-hover:scale-110 shadow-lg"></div>
                                    </div>
                                    <div className="pt-1 md:pt-2">
                                        <h4 className="text-[#192048] font-black text-lg md:text-xl leading-tight">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-500 font-medium text-xs md:text-sm mt-1">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The Text (Shows 1st on mobile, 2nd on Desktop) */}
                    {/* Increased mb-16 for mobile to separate from timeline below it */}
                    <div className="lg:pl-10 order-1 lg:order-2 mb-16 lg:mb-0">
                        <p className="text-[#192048] text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight">
                            តើអ្នកអាចស្គាល់ពួកយើងតាមរបៀបណា?
                        </p>
                        <p className="text-black text-base md:text-lg leading-relaxed mb-6">
                            E-ROBOT គឺជាអ្នកត្រួសត្រាយផ្លូវនៃវិថីអប់រំថ្មីក្នុងវិស័យបច្ចេកវិទ្យា និងសហគ្រិនភាព ដែលតភ្ជាប់សិស្សានុសិស្សទៅកាន់សក្តានុពលដ៏ល្អបំផុតសម្រាប់ថ្ងៃអនាគតរបស់ពួកគេ។
                        </p>
                    </div>
                </div>
                        
                {/* Why E-ROBOT Section */}
                <div className="mt-24">
                    <p className="text-center text-[#192048] text-2xl md:text-4xl font-bold mb-10 uppercase tracking-tight">
                        ហេតុអ្វីត្រូវជ្រើសរើស E-ROBOT?
                    </p>
                    <GridSection />
                </div>

                {/* Folder Section */}
                <div className="min-h-[50vh] md:min-h-screen w-full flex items-center justify-center bg-[#f9f9f9] py-10">
                    <div className="w-full max-w-sm md:max-w-none px-4">
                        <Folder imgSrc={Image2} title="ការចងចាំរបស់អ្នកស្ម័គ្រចិត្ត" />
                    </div>
                </div>
                
                {/* Feedback Section */}
                <div className="text-center text-[#192048] text-2xl md:text-4xl font-bold mb-8 md:mb-12 uppercase tracking-tight mt-10">
                    ចំណាប់អារម្មណ៍របស់អ្នកស្ម័គ្រចិត្ត
                </div>
                <GridFeedback />

                {/* Subscribe Section */}
                <div className="mt-10">
                    <Subscribe />
                </div>
            </section>
        </div>
    )
}

export default AboutUs