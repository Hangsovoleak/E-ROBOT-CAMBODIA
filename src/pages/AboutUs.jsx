import { Link } from 'react-router-dom';
import Image1 from '../assets/ImageBackground.png';
import Image2 from '../assets/image2.png';
import CardList from '../components/cardList';
import Folder from '../components/Folder';
import GridSection from '../components/GreidSection';
import GridFeedback from '../components/GridFeedback';
import Subscribe from '../components/Subscribe';

import { Satellite, ArrowRight, Compass, Users, Sparkles } from 'lucide-react';

function AboutUs() {
    return (
        <div className="min-h-screen bg-[#f8fafc] w-full overflow-x-hidden antialiased">

            {/* =========================
                HERO SECTION (Optimized for Mobile Viewports)
            ========================== */}
            <section className="relative min-h-screen lg:h-screen w-full overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 flex items-center">
                <img
                    src={Image1}
                    alt="E-Robot Hero Canvas Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#192048]/40" />

                <div className="relative z-10 w-full max-w-7xl mx-auto py-24 lg:py-0">
                    <div className="max-w-4xl text-white">
                        
                        {/* Friendly Pill Tag */}
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 py-1.5 shadow-sm">
                            <Satellite className="w-4 h-4 text-[#ff383c] animate-pulse" />
                            <span className="text-xs md:text-sm font-bold tracking-wide text-white/95">
                                ឧត្តមភាពក្នុងការអប់រំបច្ចេកវិទ្យា
                            </span>
                        </div>

                        {/* Responsive Typography Title with Line Safety Height */}
                        <p className="mt-6 text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black leading-tight tracking-tight text-white m-0">
                          E-ROBOT
                        </p>

                        <p className="mt-2 text-xs sm:text-sm md:text-xl font-black uppercase tracking-widest text-[#ffcbc5] max-w-xl">
                            THE UNIVERSE OF US IS LOVING AND CURIOSITY
                        </p>

                        <p className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed md:leading-8 text-white/80 max-w-2xl font-medium">
                            ការចូលរួមអភិវឌ្ឍន៍សង្គម គឺជាការរៀបចំអនាគតសម្រាប់មនុស្សជំនាន់ក្រោយ។
                            យើងជឿជាក់ថា ការអប់រំគឺជាគន្លងដ៏សំខាន់ក្នុងការបង្កើតសង្គមដែលមានការរីកចម្រើន និងនវានុវត្តន៍។
                        </p>

                        {/* CTA Links to the Goals page styled earlier */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link 
                                to="/about" 
                                className="inline-flex items-center justify-center gap-2 bg-[#ff383c] hover:bg-[#ff646c] text-white text-xs md:text-sm font-bold min-h-[48px] px-6 md:px-8 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 group shadow-lg no-underline"
                            >
                                មើលគោលដៅរបស់យើង
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Decorative bottom boundary arc wave curve */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#f8fafc] rounded-t-[2rem] hidden md:block" />
            </section>

            {/* =========================
                MAIN LAYOUT INNER WRAPPER
            ========================== */}
            <section className="py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    
                    {/* WHAT WE ARE - Modern Presentation Card Frame Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16 items-start mb-24">
                        <div className="lg:sticky lg:top-24 rounded-[2rem] p-6 sm:p-8">
                            <p className="text-sm uppercase tracking-[0.35em] text-[#ff383c] font-black">តើពួកយើងជានរណា?</p>
                            <p className="text-[#192048] text-2xl md:text-4xl font-black mt-3 mb-4 uppercase tracking-tight m-0">
                                ស្វែងយល់អំពីពួកយើង
                            </p>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed m-0 font-medium">
                                ពួកយើងធ្វើអ្វីដែលសិស្សានុសិស្សគួរដឹង គួររៀន និងគួរស្វែងយល់។ យើងគឺជាក្រុមការងារដែលអាចផ្លាស់ប្តូរជីវិត និងជួយឱ្យពួកគេរីកចម្រើនតាមរយៈទេពកោសល្យរៀងៗខ្លួនក្នុងវិស័យបច្ចេកវិទ្យា។
                            </p>
                        </div>
                        <div className="w-full">
                            <CardList />
                        </div>
                    </div>

                    {/* HOW YOU CAN KNOW - Fluid Mobile Interactive Timeline Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center my-24">
                        <div className="w-full">
                            <div className="max-w-xl">
                                <p className="text-sm uppercase tracking-[0.35em] text-[#ff383c] font-black">វិធីសាស្ត្រសិក្សា</p>
                                <p className="text-[#192048] text-2xl md:text-4xl font-black mt-3 mb-4 uppercase tracking-tight m-0">
                                    តើអ្នកអាចស្គាល់ពួកយើងតាមរបៀបណា?
                                </p>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium m-0">
                                    E-ROBOT គឺជាអ្នកត្រួសត្រាយផ្លូវនៃវិថីអប់រំថ្មីក្នុងវិស័យបច្ចេកវិទ្យា និងសហគ្រិនភាព ដែលតភ្ជាប់សិស្សានុសិស្សទៅកាន់សក្តានុពលដ៏ល្អបំផុតសម្រាប់ថ្ងៃអនាគតរបស់ពួកគេ។
                                </p>
                            </div>
                        </div>

                        {/* Interactive Steps Blocks */}
                        <div className="relative pl-2 sm:pl-4">
                            <div className="absolute left-[23px] md:left-[27px] top-4 bottom-4 w-[2px] bg-slate-200" />
                            
                            <div className="space-y-4 md:space-y-8">
                                {[
                                    { title: "ការកសាងមូលដ្ឋានគ្រឹះ", desc: "គោលការណ៍បច្ចេកវិទ្យាសំខាន់ៗ និងចំណេះដឹងឌីជីថលទូទៅ។", icon: <Compass className="w-4 h-4 text-white" /> },
                                    { title: "ការអភិវឌ្ឍជំនាញ", desc: "ការរៀនតាមរយៈការអនុវត្តផ្ទាល់លើការសរសេរកម្មវិធី និងការធ្វើគម្រោងជាក់ស្តែង។", icon: <Users className="w-4 h-4 text-white" /> },
                                    { title: "នវានុវត្តន៍ និងសហគ្រិនភាព", desc: "ការបណ្តុះការគិតបែបច្នៃប្រឌិត និងការអភិវឌ្ឍជំនាញធុរកិច្ចឌីជីថល។", icon: <Sparkles className="w-4 h-4 text-white" /> }
                                ].map((step, index) => (
                                    <div key={index} className="relative flex items-start gap-4 md:gap-6 group rounded-2xl bg-white p-4 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                                        <div className="relative flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-[#ff383c] shadow-md z-10">
                                            {step.icon}
                                        </div>
                                        <div className="pt-0.5">
                                            <p className="text-[#192048] font-black text-base md:text-lg leading-tight m-0">
                                                {step.title}
                                            </p>
                                            <p className="text-slate-500 font-medium text-xs md:text-sm mt-1 mb-0 leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                            
                    {/* Why E-ROBOT Grid Sections Grid Component */}
                    <div className="mt-24">
                        <div className="max-w-2xl mx-auto text-center mb-12">
                            <p className="text-[#192048] text-2xl md:text-4xl font-black mt-2 m-0 uppercase tracking-tight">
                                ហេតុអ្វីត្រូវជ្រើសរើស E-ROBOT?
                            </p>
                        </div>
                        <GridSection />
                    </div>

                    {/* Folder Gallery Wrappers — Linked to the newly designed Sharing Route */}
                    <div className="w-full my-24">
                        <Folder 
                          imgSrc={Image2} 
                          title="ការចងចាំរបស់អ្នកស្ម័គ្រចិត្ត និងដំណើរការចុះបេសកកម្មសិក្សា" 
                          to="/sharings" 
                        />
                    </div>
                    
                    {/* Testimonial Feedbacks Review List Grid Component */}
                    <div className="mt-24">
                        <div className="max-w-2xl mx-auto text-center mb-12">
                            <p className="text-[#192048] text-2xl md:text-4xl font-black mt-2 m-0 uppercase tracking-tight">
                                ចំណាប់អារម្មណ៍របស់អ្នកស្ម័គ្រចិត្ត
                            </p>
                        </div>
                        <GridFeedback />
                    </div>

                    {/* Newsletter Subscription Container Form Component */}
                    <div className="mt-24">
                        <Subscribe />
                    </div>

                </div>
            </section>
        </div>
    );
}

export default AboutUs;