import React from 'react';
import Hero from '../components/Hero';
import ImpactCounters from '../components/ImpactCounters';
import ProgramsGrid from '../components/ProgramsGrid';
import Testimonials from '../components/Testimonials';
import RecentNewsPreview from '../components/RecentNewsPreview';
import Transparency from '../components/Transparency';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Hero />
            <ImpactCounters />
            <ProgramsGrid />
            <Transparency />
            <Testimonials />
            <RecentNewsPreview />

            {/* Section Appel au Partenariat */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-16 rounded-[3rem] shadow-inner relative overflow-hidden border border-gray-100"
                    >
                        {/* Décoration de fond */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-8 relative z-10">Investissez dans l'Efficacité Sociale</h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto relative z-10">
                            Rejoignez le réseau de la solidarité du Groupe <strong>PowerTech PTES</strong>. Que vous soyez une entreprise ou un particulier,
                            votre soutien est le moteur de nos actions au Sénégal.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Link to="/devenir-partenaire" className="bg-brand-navy text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:bg-brand-blue hover:-translate-y-1 transition-all">
                                Devenir Partenaire
                            </Link>
                            <Link to="/partenariat" className="bg-brand-red text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:bg-opacity-90 hover:-translate-y-1 transition-all">
                                Nous Soutenir
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
