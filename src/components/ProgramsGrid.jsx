import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const programs = [
    {
        title: "Petits Anges",
        slug: "petits-anges",
        subtitle: "Protection de l'Enfance",
        description: "Pouponnières & Enfance. Accompagnement constant des centres pour enfants en difficulté et handicapés.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        color: "brand-blue",
        bg: "bg-blue-50",
    },
    {
        title: "Sérénité Énergétique",
        slug: "serenite-energetique",
        subtitle: "Audit & Sécurité",
        description: "Audits électriques et installations solaires pour assurer la sécurité et la continuité des soins et de l'éducation.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "brand-red",
        bg: "bg-red-50",
    },
    {
        title: "Pôle Bayakh",
        slug: "pole-bayakh",
        subtitle: "Centre d'Excellence",
        description: "Projet phare de 3000 m² : transformation agricole et technologique pour l'autonomisation durable du Sénégal.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        color: "brand-yellow",
        bg: "bg-yellow-50",
    }
];

const ProgramsGrid = () => {
    return (
        <section className="py-32 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-blue font-black tracking-[0.4em] uppercase text-xs mb-6 block"
                    >
                        Impact Social
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black text-brand-navy mb-8 tracking-tight"
                    >
                        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-navy">Programmes</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto font-light"
                    >
                        Des actions structurées par l'ingénierie pour un impact social mesurable et durable au cœur du Sénégal.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Body */}
                            <div className="relative h-full bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col">

                                {/* Icon Container */}
                                <div className={`w-16 h-16 ${program.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <div className={`text-${program.color}`}>
                                        {program.icon}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <span className={`text-[10px] font-black uppercase tracking-widest text-${program.color} mb-2 block opacity-60`}>
                                        {program.subtitle}
                                    </span>
                                    <h3 className="text-3xl font-black text-brand-navy leading-tight">
                                        {program.title}
                                    </h3>
                                </div>

                                <p className="text-gray-500 leading-relaxed mb-auto pb-10 font-medium">
                                    {program.description}
                                </p>

                                <Link
                                    to={`/programmes/${program.slug}`}
                                    className="flex items-center gap-4 group/btn"
                                >
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-brand-navy/5 group-hover/btn:border-brand-blue group-hover/btn:bg-brand-blue transition-all duration-300`}>
                                        <svg className="w-5 h-5 text-brand-navy group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                    <span className="font-black text-xs uppercase tracking-[0.2em] text-brand-navy group-hover/btn:text-brand-blue transition-colors">
                                        En savoir plus
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsGrid;

