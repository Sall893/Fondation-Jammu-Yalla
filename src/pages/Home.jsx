import React from 'react';
import Hero from '../components/Hero';
import StrategicPillars from '../components/StrategicPillars';
import KeyFigures from '../components/KeyFigures';
import ProgramsGrid from '../components/ProgramsGrid';
import Testimonials from '../components/Testimonials';
import RecentNewsPreview from '../components/RecentNewsPreview';
import Transparency from '../components/Transparency';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />

            {/* Piliers Stratégiques */}
            <StrategicPillars />

            {/* Chiffres Clés */}
            <KeyFigures />

            <ProgramsGrid />
            <Transparency />

            {/* CTA Vision Stratégique */}
            <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-6">La Route vers 2030</h2>
                        <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            Découvrez notre vision à long terme et les stratégies que nous déployons pour maximiser l'impact social, éducatif et économique au Sénégal.
                        </p>
                        <button className="bg-white text-brand-navy px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-brand-red hover:text-white transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 mx-auto">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 3h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h2" />
                            </svg>
                            Lire le Rapport d'Impact 2026
                        </button>
                    </motion.div>
                </div>
            </section>

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
