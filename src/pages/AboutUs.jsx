import React from 'react';
import { Link } from 'react-router-dom';
import { Satellite, ArrowRight, Compass, Users, Sparkles, Heart, Rocket, Award, CheckCircle2, Globe, GraduationCap } from 'lucide-react';

import Image1 from '../assets/ImageBackground.png';
import Image2 from '../assets/image2.png';
import CardList from '../components/cardList';
import Folder from '../components/Folder';
import GridSection from '../components/GreidSection'; 
import Subscribe from '../components/Subscribe';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden antialiased">

            {/* Handcrafted Human-Designed Hero Section */}
            <section className="w-full bg-slate-50/60 py-12 sm:py-16 md:py-20 border-b border-slate-200/80 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        
                        {/* Hero Text Content Area */}
                        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
                            
                            {/* Category Tag Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 shadow-2xs">
                                <Satellite className="h-4 w-4 text-[#0E79B2] shrink-0" />
                                <span className="text-xs sm:text-sm font-extrabold tracking-wide text-[#0E79B2]">
                                    ឧត្តមភាពក្នុងការអប់រំបច្ចេកវិទ្យា
                                </span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-none">
                                E-ROBOT
                            </h1>

                            {/* Brand Tagline */}
                            <p className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide text-[#0E79B2] leading-snug">
                                THE UNIVERSE OF US IS LOVING AND CURIOSITY
                            </p>

                            {/* Mission Paragraph */}
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 font-medium max-w-2xl">
                                ការចូលរួមអភិវឌ្ឍន៍សង្គម គឺជាការរៀបចំអនាគតសម្រាប់មនុស្សជំនាន់ក្រោយ។
                                យើងជឿជាក់ថា ការអប់រំគឺជាគន្លងដ៏សំខាន់ក្នុងការបង្កើតសង្គមដែលមានការរីកចម្រើន
                                និងនវានុវត្តន៍។
                            </p>

                            {/* CTA Action Buttons */}
                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#0E79B2] hover:bg-[#0C6C9F] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xs transition-all duration-200 active:scale-95 no-underline"
                                >
                                    <span>មើលគោលដៅរបស់យើង</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                
                                <Link
                                    to="/services"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-700 shadow-2xs transition-all duration-200 hover:border-sky-300 no-underline"
                                >
                                    <Rocket className="h-4 w-4 text-[#0E79B2]" />
                                    <span>សកម្មភាពរបស់យើង</span>
                                </Link>
                            </div>

                        </div>

                        {/* Hero Graphic Frame Area */}
                        <div className="lg:col-span-5 relative w-full flex justify-center">
                            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden border border-slate-200 bg-white p-3 shadow-md">
                                <img
                                    src={Image1}
                                    alt="E-Robot Education Hero"
                                    className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Impact Statistics Ribbon */}
            <section className="w-full bg-white border-b border-slate-200/80 py-8">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
                            <div className="flex items-center justify-center gap-2 text-[#0E79B2] mb-1">
                                <GraduationCap className="w-5 h-5" />
                                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">៥,០០+</span>
                            </div>
                            <p className="text-xs font-bold text-slate-600">សិស្សានុសិស្សបានចូលរួម</p>
                        </div>

                        <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
                            <div className="flex items-center justify-center gap-2 text-[#0E79B2] mb-1">
                                <Rocket className="w-5 h-5" />
                                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">៣២+</span>
                            </div>
                            <p className="text-xs font-bold text-slate-600">បេសកកម្មសិក្សា</p>
                        </div>

                        <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
                            <div className="flex items-center justify-center gap-2 text-[#0E79B2] mb-1">
                                <Globe className="w-5 h-5" />
                                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">១២+</span>
                            </div>
                            <p className="text-xs font-bold text-slate-600">ខេត្ត-ក្រុងទូទាំងកម្ពុជា</p>
                        </div>

                        <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
                            <div className="flex items-center justify-center gap-2 text-emerald-600 mb-1">
                                <Award className="w-5 h-5" />
                                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">១០០%</span>
                            </div>
                            <p className="text-xs font-bold text-slate-600">ការប្តេជ្ញាចិត្តដើម្បីសង្គម</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page Content Sections */}
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 space-y-16 sm:space-y-24">

                {/* About Us Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
                    <div className="lg:sticky lg:top-28 rounded-2xl">
                        <span className="text-xs uppercase text-[#0E79B2] font-extrabold tracking-wider">តើពួកយើងជានរណា?</span>
                        <h2 className="text-slate-900 text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-3 sm:mb-4 tracking-tight">
                            ស្វែងយល់អំពីពួកយើង
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
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
                            <span className="text-xs uppercase text-[#0E79B2] font-extrabold tracking-wider">វិធីសាស្ត្រសិក្សា</span>
                            <h2 className="text-slate-900 text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-3 sm:mb-4 tracking-tight">
                                តើអ្នកអាចស្គាល់ពួកយើងតាមរបៀបណា?
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                                E-ROBOT គឺជាអ្នកត្រួសត្រាយផ្លូវនៃវិថីអប់រំថ្មីក្នុងវិស័យបច្ចេកវិទ្យា និងសហគ្រិនភាព ដែលតភ្ជាប់សិស្សានុសិស្សទៅកាន់សក្តានុពលដ៏ល្អបំផុតសម្រាប់ថ្ងៃអនាគតរបស់ពួកគេ។
                            </p>
                        </div>
                    </div>

                    {/* Steps Container */}
                    <div className="relative pl-0 sm:pl-2">
                        <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-slate-200" />
                        
                        <div className="space-y-4 md:space-y-6">
                            {[
                                { title: "ការកសាងមូលដ្ឋានគ្រឹះ", desc: "គោលការណ៍បច្ចេកវិទ្យាសំខាន់ៗ និងចំណេះដឹងឌីជីថលទូទៅ។", icon: <Compass className="w-4 h-4 text-white" /> },
                                { title: "ការអភិវឌ្ឍជំនាញ", desc: "ការរៀនតាមរយៈការអនុវត្តផ្ទាល់លើការសរសេរកម្មវិធី និងការធ្វើគម្រោងជាក់ស្តែង។", icon: <Users className="w-4 h-4 text-white" /> },
                                { title: "នវានុវត្តន៍ និងសហគ្រិនភាព", desc: "ការបណ្តុះការគិតបែបច្នៃប្រឌិត និងការអភិវឌ្ឍជំនាញធុរកិច្ចឌីជីថល។", icon: <Sparkles className="w-4 h-4 text-white" /> }
                            ].map((step, index) => (
                                <div 
                                    key={index} 
                                    className="relative flex items-start gap-3.5 sm:gap-5 group rounded-2xl bg-white p-5 sm:p-6 border border-slate-200 shadow-xs transition-all duration-200 hover:border-sky-300"
                                >
                                    <div className="relative flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-[#0E79B2] shadow-xs z-10">
                                        {step.icon}
                                    </div>
                                    <div className="pt-0.5">
                                        <h3 className="text-slate-900 font-bold text-sm sm:text-base md:text-lg leading-tight transition-colors duration-200 group-hover:text-[#0E79B2]">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 font-medium text-xs sm:text-sm mt-1.5 leading-relaxed">
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
                        <h2 className="text-slate-900 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
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