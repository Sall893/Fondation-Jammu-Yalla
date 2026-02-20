import React from 'react';
import { motion } from 'framer-motion';
import heroPrograms from '../assets/hero-programs.jpg';
import programPetitsAnges from '../assets/program-petits-anges.jpg';
import programSerenite from '../assets/program-serenite.jpg';
import programBayakh from '../assets/program-bayakh.jpg';

const Programs = () => {
    const details = [
        {
            title: "Petits Anges",
            subtitle: "La Chaleur Humaine",
            desc: "Notre programme historique. Nous intervenons dans les pouponnières pour fournir du matériel médical, des denrées alimentaires et surtout une présence humaine. Chaque enfant mérite de grandir dans la dignité.",
            tags: ["Enfance", "Santé", "Social"],
            image: programPetitsAnges
        },
        {
            title: "Sérénité Energétique",
            subtitle: "L'Expertise PowerTech",
            desc: "Nous utilisons nos ingénieurs pour auditer des installations électriques vétustes dans des centres sociaux. Nous installons des kits solaires pour garantir la continuité des soins et de l'éducation.",
            tags: ["Solaire", "Sécurité", "Ingénierie"],
            image: programSerenite
        },
        {
            title: "Pôle Bayakh",
            subtitle: "L'Autonomisation Durable",
            desc: "Un projet d'envergure sur 3000m². Un centre de formation agricole moderne couplé à des technologies d'irrigation solaire. L'objectif : créer de l'emploi et de la richesse locale.",
            tags: ["Agriculture", "Formation", "3000m²"],
            image: programBayakh
        }
    ];

    return (
        <div className="pt-24 pb-24 bg-gray-50">
            {/* Hero Interne Immérsif */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-24">
                <img
                    src={heroPrograms}
                    alt="Nos Actions"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-red/70 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black mb-4 tracking-tight"
                    >
                        Nos Programmes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/90 font-light italic text-center"
                    >
                        Des solutions concrètes pour des défis réels au Sénégal.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                {details.map((prog, index) => (
                    <motion.div
                        key={prog.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
                    >
                        <div className="flex-1">
                            <div className="flex gap-2 mb-4">
                                {prog.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase">{tag}</span>
                                ))}
                            </div>
                            <h2 className="text-brand-blue font-bold text-lg mb-2">{prog.subtitle}</h2>
                            <h3 className="text-4xl font-extrabold text-brand-navy mb-6">{prog.title}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {prog.desc}
                            </p>
                            <div className="flex gap-4">
                                <button className="px-8 py-3 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-blue transition-all">
                                    Voir l'Impact
                                </button>
                                {prog.title === "Pôle Bayakh" && (
                                    <button className="px-8 py-3 border-2 border-brand-navy text-brand-navy rounded-xl font-bold hover:bg-brand-navy hover:text-white transition-all">
                                        Télécharger les Plans
                                    </button>
                                )}
                            </div>
                            {index === 0 && (
                                <div className="mt-8 p-4 bg-brand-blue/5 rounded-2xl flex items-center gap-4">
                                    <span className="text-2xl">🇸🇳</span>
                                    <p className="text-sm text-gray-500 italic">Visionnez nos témoignages en <strong>Wolof</strong> sur le terrain.</p>
                                </div>
                            )}
                        </div>
                        <div className="flex-1 w-full">
                            <div className="aspect-video bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Barre de progression Bayakh */}
                <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <h4 className="text-2xl font-bold text-brand-navy">Progression Pôle Bayakh</h4>
                            <p className="text-gray-500">Phase 1 : Aménagement du terrain et forage</p>
                        </div>
                        <div className="text-4xl font-black text-brand-red">35%</div>
                    </div>
                    <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '35%' }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-brand-red"
                        ></motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
