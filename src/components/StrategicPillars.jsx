import React from 'react';
import { motion } from 'framer-motion';

const PillarItem = ({ number, title, description, icon, colorClass, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 py-16 border-b border-gray-100 last:border-0 group"
        >
            {/* Number & Icon Side */}
            <div className="flex items-start gap-6 min-w-[300px]">
                <span className={`text-7xl font-black opacity-10 ${colorClass.replace('bg-', 'text-')} group-hover:opacity-100 transition-opacity duration-700`}>
                    {number}
                </span>
                <div className={`mt-4 w-12 h-12 flex items-center justify-center ${colorClass.replace('bg-', 'text-')}`}>
                    {icon}
                </div>
            </div>

            {/* Text Side */}
            <div className="flex-grow max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 tracking-tight group-hover:text-brand-blue transition-colors duration-500">
                    {title}
                </h3>
                <p className="text-xl text-gray-500 leading-relaxed font-light">
                    {description}
                </p>

                {/* Subtle Interactive Element */}
                <div className="mt-8 flex items-center gap-2 overflow-hidden">
                    <motion.div
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1, delay: delay + 0.2 }}
                        className={`h-1 w-24 ${colorClass}`}
                    ></motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const StrategicPillars = () => {
    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-blue font-black tracking-[0.5em] uppercase text-xs mb-4 block"
                    >
                        Notre Mission
                    </motion.span>
                    <h2 className="text-5xl md:text-6xl font-black text-brand-navy tracking-tighter">
                        Axes <span className="text-brand-red">Stratégiques</span>
                    </h2>
                </div>

                <div className="flex flex-col">
                    <PillarItem
                        number="01"
                        title="Éducation & Numérique"
                        description="Construire les talents de demain en réduisant la fracture numérique et en soutenant la modernisation de l'écosystème éducatif."
                        colorClass="bg-brand-blue"
                        delay={0.1}
                        icon={
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        }
                    />
                    <PillarItem
                        number="02"
                        title="Insertion Économique"
                        description="Stimuler la création de valeur locale en appuyant l'entrepreneuriat et en finançant des projets structurants pour les communautés."
                        colorClass="bg-brand-red"
                        delay={0.2}
                        icon={
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        }
                    />
                    <PillarItem
                        number="03"
                        title="Action Sociale & Santé"
                        description="Renforcer la résilience des populations vulnérables et investir dans des infrastructures de santé de proximité concrètes."
                        colorClass="bg-brand-yellow"
                        delay={0.3}
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
