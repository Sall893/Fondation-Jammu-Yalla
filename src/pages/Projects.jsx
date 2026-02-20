import React from 'react';
import { motion } from 'framer-motion';
import ProgramsGrid from '../components/ProgramsGrid';
import heroProjects from '../assets/hero-projects.jpg';

const Projects = () => {
    return (
        <div className="pt-24 pb-24 bg-white">
            {/* Hero Interne Immérsif */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-16">
                <img
                    src={heroProjects}
                    alt="Projets Phares"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/70 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black mb-4 tracking-tight"
                    >
                        Nos Projets Phares
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-brand-blue font-light italic max-w-3xl mx-auto"
                    >
                        Découvrez comment l'ingénierie sociale transforme durablement le quotidien des populations au Sénégal.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto">
                <ProgramsGrid />

                {/* Section Stats Projets */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 text-center">
                    <div className="p-12 bg-gray-50 rounded-3xl border border-gray-100">
                        <div className="text-4xl font-black text-brand-red mb-4">100%</div>
                        <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Transparence Technique</p>
                    </div>
                    <div className="p-12 bg-gray-50 rounded-3xl border border-gray-100">
                        <div className="text-4xl font-black text-brand-blue mb-4">Direct</div>
                        <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Impact sur le Terrain</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
