import React from 'react';
import { motion } from 'framer-motion';
import transparencyImg from '../assets/transparency.jpg';

const Transparency = () => {
    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden">
            {/* Texture d'arrière-plan avec image réelle */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img
                    src={transparencyImg}
                    alt="Transparence"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-brand-blue to-brand-navy"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block">Confiance & Intégrité</span>
                        <h3 className="text-4xl font-extrabold text-white mb-8">Un engagement total vers la transparence</h3>
                        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                            Pour la Fondation Jaamu Yàlla, la transparence n'est pas une option, c'est une responsabilité. Nous publions chaque année un rapport d'impact détaillé audité par nos partenaires.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-opacity-90 transition-all flex items-center gap-3">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>
                                Rapport d'Impact 2025 (PDF)
                            </button>
                            <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold bg-white/5 hover:bg-white/10 transition-all flex items-center gap-3">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20,6V12H18V8H12V6M16,10V16H14V12H8V10M12,14V20H10V16H4V14H12Z" /></svg>
                                Galerie des Actions
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-8"
                    >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center">
                            <div className="text-3xl font-black text-brand-blue mb-2">100%</div>
                            <p className="text-gray-400 text-sm">Dons alloués aux projets terrain</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center">
                            <div className="text-3xl font-black text-brand-red mb-2">Audit</div>
                            <p className="text-gray-400 text-sm">Comptabilité certifiée annuelle</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center">
                            <div className="text-3xl font-black text-brand-yellow mb-2">Local</div>
                            <p className="text-gray-400 text-sm">Équipes 100% sénégalaises</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center">
                            <div className="text-3xl font-black text-green-400 mb-2">Zéro</div>
                            <p className="text-gray-400 text-sm">Frais de fonctionnement prélevés</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Transparency;
