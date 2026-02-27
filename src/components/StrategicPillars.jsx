import React from 'react';
import { motion } from 'framer-motion';

const PillarCard = ({ title, description, icon, delay, colorClass }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className="group relative h-full"
        >
            {/* Background Blur Effect */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-[3rem] -z-10 shadow-[0_32px_64px_rgba(0,0,0,0.05)] border border-white/50 group-hover:bg-white/60 transition-all duration-500"></div>

            <div className="p-10 lg:p-12 flex flex-col h-full">
                {/* Icon Section */}
                <div className={`w-20 h-20 rounded-3xl ${colorClass} bg-opacity-10 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <div className={colorClass.replace('bg-', 'text-')}>
                        {icon}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                    <h3 className="text-3xl font-black text-brand-navy mb-6 tracking-tight leading-tight">
                        {title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium opacity-80">
                        {description}
                    </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-10 pt-8 border-t border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full ${colorClass}`}></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                            Axe Stratégique
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const StrategicPillars = () => {
    return (
        <section className="relative z-20 -mt-24 pb-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-stretch">
                    <PillarCard
                        title="Éducation & Numérique"
                        description="Construire les talents de demain en réduisant la fracture numérique et en soutenant la modernisation de l'écosystème éducatif."
                        delay={0.1}
                        colorClass="bg-brand-blue"
                        icon={
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        }
                    />
                    <PillarCard
                        title="Insertion Économique"
                        description="Stimuler la création de valeur locale en appuyant l'entrepreneuriat et en finançant des projets structurants pour les communautés."
                        delay={0.2}
                        colorClass="bg-brand-red"
                        icon={
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        }
                    />
                    <PillarCard
                        title="Action Sociale & Santé"
                        description="Renforcer la résilience des populations vulnérables et investir dans des infrastructures de santé de proximité concrètes."
                        delay={0.3}
                        colorClass="bg-brand-yellow"
                        icon={
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default StrategicPillars;
