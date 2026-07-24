import React from 'react';
import { Link } from 'react-router-dom';
import { Satellite, ArrowRight, Compass, Users, Sparkles } from 'lucide-react';

import Image1 from '../assets/ImageBackground.png';
import Image2 from '../assets/image2.png';
import CardList from '../components/cardList';
import Folder from '../components/Folder';
import GridSection from '../components/GreidSection'; 
import Subscribe from '../components/Subscribe';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-[var(--bg)] w-full overflow-x-hidden antialiased">

            <section className="relative min-h-screen lg:h-screen w-full overflow-hidden flex items-center">
                <img 
                    src={Image1} 
                    alt="E-Robot Hero Canvas Background" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[var(--bg)]" />

                <div className="container relative z-10 py-24 lg:py-0">
                    <div className="max-w-4xl text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 py-1.5 shadow-sm">
                            <Satellite className="w-4 h-4 text-primary animate-pulse" />
                            <span className="text-xs md:text-sm font-bold tracking-wide text-white/95">
                                ឧត្តមភាពក្នុងការអប់រំបច្ចេកវិទ្យា
                            </span>
                        </div>

                        <h1 className="mt-6 text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold leading-none tracking-tight text-white m-0">
                          E-ROBOT
                        </h1>

                        <p className="mt-4 text-xs sm:text-sm md:text-xl font-bold uppercase tracking-widest text-[var(--primary-light)] max-w-xl">
                            THE UNIVERSE OF US IS LOVING AND CURIOSITY
                        </p>

                        <p className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed md:leading-8 text-white/80 max-w-2xl font-medium">
                            ការចូលរួមអភិវឌ្ឍន៍សង្គម គឺជាការរៀបចំអនាគតសម្រាប់មនុស្សជំនាន់ក្រោយ។ យើងជឿជាក់ថា ការអប់រំគឺជាគន្លងដ៏សំខាន់ក្នុងការបង្កើតសង្គមដែលមានការរីកចម្រើន និងនវានុវត្តន៍។
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link 
                                to="/about" 
                                className="inline-flex items-center justify-center gap-2 bg-primary text-white text-xs md:text-sm font-bold min-h-[48px] px-8 rounded-full transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 active:scale-95 group shadow-md no-underline"
                            >
                                មើលគោលដៅរបស់យើង
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-[var(--bg)] rounded-t-[2rem] hidden md:block" />
            </section>

            <div className="container py-8 md:py-4 space-y-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="lg:sticky lg:top-28 rounded-2xl">
                        <span className="text-xs uppercase text-primary font-bold tracking-wider">តើពួកយើងជានរណា?</span>
                        <h2 className="text-[var(--text-heading)] text-2xl md:text-4xl font-bold mt-2 mb-4 uppercase tracking-tight m-0">
                            ស្វែងយល់អំពីពួកយើង
                        </h2>
                        <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed m-0 font-medium">
                            ពួកយើងធ្វើអ្វីដែលសិស្សានុសិស្សគួរដឹង គួររៀន និងគួរស្វែងយល់។ យើងគឺជាក្រុមការងារដែលអាចផ្លាស់ប្តូរជីវិត និងជួយឱ្យពួកគេរីកចម្រើនតាមរយៈទេពកោសល្យរៀងៗខ្លួនក្នុងវិស័យបច្ចេកវិទ្យា។
                        </p>
                    </div>
                    <div className="w-full">
                        <CardList />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="w-full">
                        <div className="max-w-xl">
                            <span className="text-xs uppercase text-primary font-bold tracking-wider">វិធីសាស្ត្រសិក្សា</span>
                            <h2 className="text-[var(--text-heading)] text-2xl md:text-4xl font-bold mt-2 mb-4 uppercase tracking-tight m-0">
                                តើអ្នកអាចស្គាល់ពួកយើងតាមរបៀបណា?
                            </h2>
                            <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed font-medium m-0">
                                E-ROBOT គឺជាអ្នកត្រួសត្រាយផ្លូវនៃវិថីអប់រំថ្មីក្នុងវិស័យបច្ចេកវិទ្យា និងសហគ្រិនភាព ដែលតភ្ជាប់សិស្សានុសិស្សទៅកាន់សក្តានុពលដ៏ល្អបំផុតសម្រាប់ថ្ងៃអនាគតរបស់ពួកគេ।
                            </p>
                        </div>
                    </div>

                    <div className="relative pl-2 sm:pl-4">
                        <div className="absolute left-[23px] md:left-[27px] top-4 bottom-4 w-[1px] bg-[var(--border-light)]" />
                        <div className="space-y-4 md:space-y-6">
                            {[
                                { title: "ការកសាងមូលដ្ឋានគ្រឹះ", desc: "គោលការណ៍បច្ចេកវិទ្យាសំខាន់ៗ និងចំណេះដឹងឌីជីថលទូទៅ។", icon: <Compass className="w-4 h-4 text-white" /> },
                                { title: "ការអភិវឌ្ឍជំនាញ", desc: "ការរៀនតាមរយៈការអនុវត្តផ្ទាល់លើការសរសេរកម្មវិធី និងការធ្វើគម្រោងជាក់ស្តែង។", icon: <Users className="w-4 h-4 text-white" /> },
                                { title: "នវានុវត្តន៍ និងសហគ្រិនភាព", desc: "ការបណ្តុះការគិតបែបច្នៃប្រឌិត និងការអភិវឌ្ឍជំនាញធុរកិច្ចឌីជីថល។", icon: <Sparkles className="w-4 h-4 text-white" /> }
                            ].map((step, index) => (
                                <div 
                                    key={index} 
                                    className="relative flex items-start gap-4 md:gap-6 group rounded-2xl bg-[var(--surface)] p-5 border border-[var(--border-light)] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                                >
                                    <div className="relative flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-primary shadow-sm z-10">
                                        {step.icon}
                                    </div>
                                    <div className="pt-0.5">
                                        <h3 className="text-[var(--text-heading)] font-bold text-base md:text-lg leading-tight m-0 transition-colors duration-200 group-hover:text-primary">
                                            {step.title}
                                        </h3>
                                        <p className="text-[var(--text-muted)] font-medium text-xs md:text-sm mt-1 mb-0 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                        
                <div className="space-y-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-[var(--text-heading)] text-2xl md:text-4xl font-bold m-0 uppercase tracking-tight">
                            ហេតុអ្វីត្រូវជ្រើសរើស E-ROBOT?
                        </h2>
                    </div>
                    <GridSection />
                </div>

                <div className="w-full">
                    <Folder 
                        imgSrc={Image2} 
                        title="ការចងចាំរបស់អ្នកស្ម័គ្រចិត្ត និងដំណើរការចុះបេសកកម្មសិក្សា" 
                        to="/sharings" 
                    />
                </div>

                <div>
                    <Subscribe />
                </div>

            </div>

        </div>
    );
}