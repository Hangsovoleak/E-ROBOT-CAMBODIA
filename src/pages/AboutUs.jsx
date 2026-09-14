import React from 'react';
import { Link } from 'react-router-dom';
import { Satellite, ArrowRight, Compass, Users, Sparkles, Rocket, Award, Globe, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import Image1 from '../assets/ImageBackground.png';
import Image2 from '../assets/image2.png';
import CardList from '../components/cardList';
import Folder from '../components/Folder';
import GridSection from '../components/GreidSection'; 
import Subscribe from '../components/Subscribe';

export default function AboutUs() {
    const { t, language } = useLanguage();

    const stepIcons = [
        <Compass key="1" className="w-4 h-4 text-white" />,
        <Users key="2" className="w-4 h-4 text-white" />,
        <Sparkles key="3" className="w-4 h-4 text-white" />
    ];

    return (
        <div className="min-h-screen bg-[#F7F7F7] w-full overflow-x-hidden antialiased">

            {/* Handcrafted Human-Designed Hero Section */}
            <section className="w-full bg-[#F7F7F7] py-12 sm:py-16 md:py-20 border-b border-slate-200 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        
                        {/* Hero Text Content Area */}
                        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
                            
                            {/* Category Tag Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#192048]/20 bg-[#192048]/10 px-4 py-1.5 shadow-none">
                                <Satellite className="h-4 w-4 text-[#192048] shrink-0" />
                                <span className="text-xs sm:text-sm font-extrabold tracking-wide text-[#192048]">
                                    {t.aboutUs.badgeTop}
                                </span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#192048] leading-none">
                                E-ROBOT
                            </h1>

                            {/* Brand Tagline */}
                            <p className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide text-[#FF383C] leading-snug">
                                THE UNIVERSE OF US IS LOVING AND CURIOSITY
                            </p>

                            {/* Mission Paragraph */}
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 font-medium max-w-2xl">
                                {t.aboutUs.heroMission}
                            </p>

                            {/* CTA Action Buttons */}
                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/goals"
                                    className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#192048] hover:bg-[#192048]/90 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-none transition-all duration-200 active:scale-95 no-underline"
                                >
                                    <span>{t.aboutUs.heroGoalBtn}</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                
                                <Link
                                    to="/events"
                                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-white hover:bg-slate-100 border border-slate-300 px-6 py-3.5 text-xs sm:text-sm font-bold text-[#192048] shadow-none transition-all duration-200 hover:border-[#192048] no-underline"
                                >
                                    <Rocket className="h-4 w-4 text-[#FF383C]" />
                                    <span>{t.aboutUs.heroActBtn}</span>
                                </Link>
                            </div>

                        </div>

                        {/* Hero Graphic Frame Area */}
                        <div className="lg:col-span-5 relative w-full flex justify-center">
                            <div className="relative w-full max-w-lg rounded-sm overflow-hidden border border-slate-200 bg-white p-3 shadow-none">
                                <img
                                    src={Image1}
                                    alt="E-Robot Education Hero"
                                    className="w-full h-80 sm:h-96 object-cover rounded-sm"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Impact Statistics Ribbon */}
            <section className="w-full bg-[#F7F7F7] border-b border-slate-200 py-8">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-5 bg-[#192048] text-white rounded-sm shadow-none">
                            <div className="flex items-center justify-center gap-2 text-[#FF383C] mb-1">
                                <GraduationCap className="w-5 h-5" />
                                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                                    {language === "km" ? "៥,០០០+" : "5,000+"}
                                </span>
                            </div>
                            <p className="text-xs font-bold text-slate-200">{t.aboutUs.stats.students}</p>
                        </div>

                        <div className="p-5 bg-[#192048] text-white rounded-sm shadow-none">
                            <div className="flex items-center justify-center gap-2 text-[#FF383C] mb-1">
                                <Rocket className="w-5 h-5" />
                                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                                    {language === "km" ? "៣២+" : "32+"}
                                </span>
                            </div>
                            <p className="text-xs font-bold text-slate-200">{t.aboutUs.stats.missions}</p>
                        </div>

                        <div className="p-5 bg-[#192048] text-white rounded-sm shadow-none">
                            <div className="flex items-center justify-center gap-2 text-[#FF383C] mb-1">
                                <Globe className="w-5 h-5" />
                                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                                    {language === "km" ? "១២+" : "12+"}
                                </span>
                            </div>
                            <p className="text-xs font-bold text-slate-200">{t.aboutUs.stats.provinces}</p>
                        </div>

                        <div className="p-5 bg-[#192048] text-white rounded-sm shadow-none">
                            <div className="flex items-center justify-center gap-2 text-[#FF383C] mb-1">
                                <Award className="w-5 h-5" />
                                <span className="text-2xl sm:text-3xl font-extrabold text-white">100%</span>
                            </div>
                            <p className="text-xs font-bold text-slate-200">{t.aboutUs.stats.commitment}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Page Content Sections */}
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 space-y-16 sm:space-y-24">

                {/* About Us Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
                    <div className="lg:sticky lg:top-28 rounded-sm">
                        <span className="text-xs uppercase text-[#FF383C] font-extrabold tracking-wider">{t.aboutUs.badge1}</span>
                        <h2 className="text-[#192048] text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-3 sm:mb-4 tracking-tight">
                            {t.aboutUs.title1}
                        </h2>
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                            {t.aboutUs.desc1}
                        </p>
                    </div>
                    <div className="w-full">
                        <CardList />
                    </div>
                </div>

                {/* Learning Steps Timeline Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
                    {/* Steps Container (Left Side) */}
                    <div className="relative pl-0 sm:pl-2 w-full">
                        <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-slate-300" />
                        
                        <div className="space-y-4 md:space-y-6">
                            {t.aboutUs.steps.map((step, index) => (
                                <div 
                                    key={index} 
                                    className="relative flex items-start gap-3.5 sm:gap-5 group rounded-sm bg-white p-5 sm:p-6 border border-slate-200 shadow-none transition-all duration-200 hover:border-[#192048]"
                                >
                                    <div className="relative flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-[#192048] shadow-none z-10">
                                        {stepIcons[index % stepIcons.length]}
                                    </div>
                                    <div className="pt-0.5">
                                        <h3 className="text-[#192048] font-bold text-sm sm:text-base md:text-lg leading-tight transition-colors duration-200 group-hover:text-[#FF383C]">
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

                    {/* Title & Description Text (Right Side) */}
                    <div className="w-full">
                        <div className="max-w-xl">
                            <span className="text-xs uppercase text-[#FF383C] font-extrabold tracking-wider">{t.aboutUs.badge2}</span>
                            <h2 className="text-[#192048] text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-3 sm:mb-4 tracking-tight">
                                {t.aboutUs.title2}
                            </h2>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                                {t.aboutUs.desc2}
                            </p>
                        </div>
                    </div>
                </div>
                        
                {/* Grid Section */}
                <div className="space-y-6 sm:space-y-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-[#192048] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                            {t.aboutUs.whyTitle}
                        </h2>
                    </div>
                    <GridSection />
                </div>

                {/* Folder Section */}
                <div className="w-full">
                    <Folder 
                        imgSrc={Image2} 
                        title={t.aboutUs.folderTitle}
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