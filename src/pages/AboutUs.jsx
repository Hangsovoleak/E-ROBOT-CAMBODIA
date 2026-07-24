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

            <section className="grid grid-cols-1 grid-rows-1 min-h-[100dvh] w-full relative overflow-hidden">

                {/* Layer 1: Background Image */}
                <img
                    src={Image1}
                    alt="E-Robot Hero Canvas Background"
                    className="col-start-1 row-start-1 h-full w-full object-cover object-center min-h-[100dvh]"
                />

                {/* Layer 2: Dark Overlay */}
                <div className="col-start-1 row-start-1 h-full w-full bg-black/65 z-10" />

                {/* Layer 3: Content (Overlaid directly on top of image) */}
                <div className="col-start-1 row-start-1 z-20 container mx-auto px-5 py-12 flex flex-col justify-center text-white h-full my-auto">
                    <div className="max-w-2xl">

                        {/* Tag/Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md shadow-sm">
                            <Satellite className="h-3.5 w-3.5 animate-pulse text-primary shrink-0" />
                            <span className="text-[11px] sm:text-xs font-bold tracking-wide text-white">
                                ឧត្តមភាពក្នុងការអប់រំបច្ចេកវិទ្យា
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
                            E-ROBOT
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-2 text-[11px] sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[var(--primary-light)]">
                            THE UNIVERSE OF US IS LOVING AND CURIOSITY
                        </p>

                        {/* Body Paragraph */}
                        <p className="mt-4 text-xs sm:text-base leading-relaxed text-white/90">
                            ការចូលរួមអភិវឌ្ឍន៍សង្គម គឺជាការរៀបចំអនាគតសម្រាប់មនុស្សជំនាន់ក្រោយ។
                            យើងជឿជាក់ថា ការអប់រំគឺជាគន្លងដ៏សំខាន់ក្នុងការបង្កើតសង្គមដែលមានការរីកចម្រើន
                            និងនវានុវត្តន៍។
                        </p>

                        {/* CTA Button */}
                        <div className="mt-6">
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-primary/90"
                            >
                                មើលគោលដៅរបស់យើង
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Bottom Curve (Hidden on Mobile) */}
                <div className="col-start-1 row-start-1 z-20 self-end w-full hidden h-32 rounded-t-[2rem] bg-[var(--bg)] md:block lg:h-40" />

            </section>

            {/* Page Content Sections */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-16 sm:space-y-24 md:space-y-28">

                {/* About Us Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
                    <div className="lg:sticky lg:top-28 rounded-2xl">
                        <span className="text-xs uppercase text-primary font-bold tracking-wider">តើពួកយើងជានរណា?</span>
                        <h2 className="text-[var(--text-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4 uppercase tracking-tight">
                            ស្វែងយល់អំពីពួកយើង
                        </h2>
                        <p className="text-[var(--text-body)] text-xs sm:text-base leading-relaxed font-medium">
                            ពួកយើងធ្វើអ្វីដែលសិស្សានុសិស្សគួរដឹង គួររៀន និងគួរស្វែងយល់។ យើងគឺជាក្រុមការងារដែលអាចផ្លាស់ប្តូរជីវិត និងជួយឱ្យពួកគេរីកចម្រើនតាមរយៈទេពកោសល្យរៀងៗខ្លួនក្នុងវិស័យបច្ចេកវិទ្យា។
                        </p>
                    </div>
                    <div className="w-full">
                        <CardList />
                    </div>
                </div>

                {/* Learning Steps Timeline Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
                    <div className="w-full">
                        <div className="max-w-xl">
                            <span className="text-xs uppercase text-primary font-bold tracking-wider">វិធីសាស្ត្រសិក្សា</span>
                            <h2 className="text-[var(--text-heading)] text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4 uppercase tracking-tight">
                                តើអ្នកអាចស្គាល់ពួកយើងតាមរបៀបណា?
                            </h2>
                            <p className="text-[var(--text-body)] text-xs sm:text-base leading-relaxed font-medium">
                                E-ROBOT គឺជាអ្នកត្រួសត្រាយផ្លូវនៃវិថីអប់រំថ្មីក្នុងវិស័យបច្ចេកវិទ្យា និងសហគ្រិនភាព ដែលតភ្ជាប់សិស្សានុសិស្សទៅកាន់សក្តានុពលដ៏ល្អបំផុតសម្រាប់ថ្ងៃអនាគតរបស់ពួកគេ។
                            </p>
                        </div>
                    </div>

                    {/* Steps Container */}
                    <div className="relative pl-0 sm:pl-2">
                        {/* Vertical Connector Line */}
                        <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-[var(--border-light)]" />
                        
                        <div className="space-y-4 md:space-y-6">
                            {[
                                { title: "ការកសាងមូលដ្ឋានគ្រឹះ", desc: "គោលការណ៍បច្ចេកវិទ្យាសំខាន់ៗ និងចំណេះដឹងឌីជីថលទូទៅ។", icon: <Compass className="w-4 h-4 text-white" /> },
                                { title: "ការអភិវឌ្ឍជំនាញ", desc: "ការរៀនតាមរយៈការអនុវត្តផ្ទាល់លើការសរសេរកម្មវិធី និងការធ្វើគម្រោងជាក់ស្តែង។", icon: <Users className="w-4 h-4 text-white" /> },
                                { title: "នវានុវត្តន៍ និងសហគ្រិនភាព", desc: "ការបណ្តុះការគិតបែបច្នៃប្រឌិត និងការអភិវឌ្ឍជំនាញធុរកិច្ចឌីជីថល។", icon: <Sparkles className="w-4 h-4 text-white" /> }
                            ].map((step, index) => (
                                <div 
                                    key={index} 
                                    className="relative flex items-start gap-3.5 sm:gap-5 group rounded-2xl bg-[var(--surface)] p-4 sm:p-5 border border-[var(--border-light)] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                                >
                                    <div className="relative flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-primary shadow-sm z-10">
                                        {step.icon}
                                    </div>
                                    <div className="pt-0.5">
                                        <h3 className="text-[var(--text-heading)] font-bold text-sm sm:text-base md:text-lg leading-tight transition-colors duration-200 group-hover:text-primary">
                                            {step.title}
                                        </h3>
                                        <p className="text-[var(--text-muted)] font-medium text-xs sm:text-sm mt-1 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                        
                {/* Grid Section */}
                <div className="space-y-6 sm:space-y-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-[var(--text-heading)] text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight">
                            ហេតុអ្វីត្រូវជ្រើសរើស E-ROBOT?
                        </h2>
                    </div>
                    <GridSection />
                </div>

                {/* Folder Section */}
                <div className="w-full">
                    <Folder 
                        imgSrc={Image2} 
                        title="ការចងចាំរបស់អ្នកស្ម័គ្រចិត្ត និងដំណើរការចុះបេសកកម្មសិក្សា" 
                        to="/sharings" 
                    />
                </div>

                {/* Subscribe Section */}
                <div className="w-full">
                    <Subscribe />
                </div>

            </div>

        </div>
    );
}