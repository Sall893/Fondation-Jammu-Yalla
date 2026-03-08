import React from 'react';
import { motion } from 'framer-motion';
import ramadan1 from '../assets/ramadan-1.jpg';
import ramadan2 from '../assets/ramadan-2.jpg';
import ramadan3 from '../assets/ramadan-3.jpg';

const RamadanNdogou = () => {
    const images = [
        {
            url: ramadan1,
            title: "Engagement Bénévole",
            desc: "Nos équipes mobilisées pour la préparation des kits."
        },
        {
            url: ramadan2,
            title: "Distribution Solidaire",
            desc: "Partage de repas à travers les quartiers de Dakar."
        },
        {
            url: ramadan3,
            title: "Sourires et Partage",
            desc: "Un moment de communion et de fraternité."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                    >
                        Solidarité Ramadan
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tight"
                    >
                        Distribution de <span className="text-brand-blue">Ndogou</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Chaque année, la Fondation Jaamu Yàlla se mobilise avec les employés du Groupe PowerTech
                        pour offrir des kits de rupture de jeûne aux populations. Un moment fort de générosité
                        au cœur de nos valeurs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-white text-2xl font-bold mb-2">{img.title}</h3>
                                <p className="text-white/70 text-sm font-medium leading-snug opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {img.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-4 bg-gray-50 px-8 py-4 rounded-full border border-gray-100">
                        <span className="w-3 h-3 bg-brand-red rounded-full animate-pulse"></span>
                        <p className="text-brand-navy font-bold">Plus de 5 000 repas distribués en 2026</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RamadanNdogou;
