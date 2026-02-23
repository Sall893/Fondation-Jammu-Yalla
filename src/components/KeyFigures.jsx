import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ number, label, suffix = "+", delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
        >
            <div className="flex items-baseline text-white mb-2">
                <span className="text-5xl md:text-6xl font-black">{number}</span>
                <span className="text-3xl font-bold text-brand-red ml-1">{suffix}</span>
            </div>
            <p className="text-white/80 font-medium text-lg text-center">{label}</p>
        </motion.div>
    );
};

const KeyFigures = () => {
    return (
        <section className="bg-brand-navy py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Notre Impact en Chiffres</h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        La transparence est au cœur de notre modèle de développement. Découvrez les résultats concrets de nos actions sur le terrain.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StatCard number="25" label="Projets Structurants Financés" delay={0.1} />
                    <StatCard number="12" label="Zones d'Intervention au Sénégal" delay={0.2} />
                    <StatCard number="5000" label="Bénéficiaires Directs" delay={0.3} />
                </div>
            </div>
        </section>
    );
};

export default KeyFigures;
