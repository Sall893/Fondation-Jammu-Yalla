import React from 'react';
import { motion } from 'framer-motion';

const PillarCard = ({ title, description, icon, delay, isCenter }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className={`bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex flex-col h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${isCenter ? 'md:-mt-12 md:mb-12 border-brand-red/20 border-2' : ''}`}
        >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${isCenter ? 'bg-brand-red/10 text-brand-red' : 'bg-gray-50 text-brand-navy'}`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
                {description}
            </p>
        </motion.div>
    );
};

const StrategicPillars = () => {
    return (
        <section className="relative z-20 -mt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                <PillarCard
                    title="Éducation & Numérique"
                    description="Construire les talents de demain en réduisant la fracture numérique et en soutenant la modernisation de l'écosystème éducatif."
                    delay={0.1}
                    icon={
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    }
                />
                <PillarCard
                    title="Insertion Économique"
                    description="Stimuler la création de valeur locale en appuyant l'entrepreneuriat et en finançant des projets structurants pour les communautés."
                    delay={0.2}
                    isCenter={true}
                    icon={
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    }
                />
                <PillarCard
                    title="Action Sociale & Santé"
                    description="Renforcer la résilience des populations vulnérables et investir dans des infrastructures de santé de proximité concrètes."
                    delay={0.3}
                    icon={
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    }
                />
            </div>
        </section>
    );
};

export default StrategicPillars;
