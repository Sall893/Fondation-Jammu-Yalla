import React from 'react';
import { motion } from 'framer-motion';
import heroAbout from '../assets/hero-about.jpg';
import expertiseImg from '../assets/2.jpg';
import WolofTestimonials from '../components/WolofTestimonials';


const About = () => {
    const history = [
        { year: "2016", title: "L'Éveil", desc: "Naissance des premières actions de solidarité pour les enfants vulnérables." },
        { year: "2024", title: "La Puissance Technique", desc: "Création de PowerTech Engineering Group, structurant un savoir-faire unique." },
        { year: "2026", title: "Jaamu Yàlla", desc: "La fondation devient l'organe officiel de PTES pour une solidarité à grande échelle." },
    ];

    return (
        <div className="pt-24 pb-24 bg-white">
            {/* Hero Interne Immérsif */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-24">
                <img
                    src={heroAbout}
                    alt="Notre Histoire"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/70 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black mb-4 tracking-tight"
                    >
                        La Fondation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-brand-blue font-light italic"
                    >
                        Notre Histoire, Notre Engagement.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ADN Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 text-center md:text-left">Notre Vision</h2>
                        <h3 className="text-4xl font-extrabold text-brand-navy mb-6 text-center md:text-left">L'Ingénierie au Service du Bien Commun</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            La Fondation Jaamu Yàlla est le bras social et solidaire de <strong>PowerTech Engineering Group</strong>. Elle naît d'une volonté simple mais puissante : utiliser nos compétences techniques pour servir les plus fragiles. Un nom qui porte en lui nos racines et notre philosophie : agir avec le cœur et par foi en l'humanité.
                        </p>

                        <h4 className="text-2xl font-bold text-brand-navy mb-4">Notre ADN : L'Ingénierie Sociale</h4>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Ce qui rend la Fondation Jaamu Yàlla unique au Sénégal, c'est son lien indéfectible avec le monde des ingénieurs. Nous ne nous contentons pas de distribuer des aides ; nous apportons des solutions durables.
                            Grâce à l'appui de <strong>PowerTech Engineering Group</strong> et de ses solutions <strong>Z-Energy</strong>, nous transformons des environnements précaires en espaces sécurisés.
                        </p>
                    </motion.div>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                        <img
                            src={expertiseImg}
                            alt="Expertise Technique"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-32">
                    <h3 className="text-3xl font-bold text-brand-navy mb-16 text-center">De l'Action Sociale à l'Institutionnalisation</h3>
                    <div className="relative border-l-4 border-brand-blue ml-4 md:ml-0 md:flex md:border-l-0 md:border-t-4 md:pt-8 md:justify-between">
                        {[
                            { year: "2016", title: "L'Éveil", desc: "Naissance des premières actions de solidarité sous l'impulsion d'une volonté d'aider les enfants et les femmes vulnérables." },
                            { year: "2024", title: "Puissance Technique", desc: "Création de PowerTech Engineering Group, structurant un savoir-faire unique (Énergie, Maritime, EPC)." },
                            { year: "2026", title: "L'Union Stratégique", desc: "Jaamu Yàlla devient officiellement la fondation de PTES, garantissant transparence et innovation." },
                        ].map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="mb-12 md:mb-0 relative md:w-1/4 px-4"
                            >
                                <div className="absolute -left-7 md:left-auto md:-top-11 w-8 h-8 bg-brand-blue rounded-full border-4 border-white"></div>
                                <div className="text-2xl font-black text-brand-red mb-2">{item.year}</div>
                                <h4 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h4>
                                <p className="text-gray-600 italic text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Gouvernance & Valeurs */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Notre Boussole</h2>
                        <h3 className="text-4xl font-extrabold text-brand-navy">Nos Valeurs Piliers</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Rigueur Technique", icon: "⚙️", desc: "Chaque projet est traité avec le sérieux d'un audit industriel pour garantir sa pérennité." },
                            { title: "Proximité Culturelle", icon: "🤝", desc: "Nous agissons avec humilité et respect des réalités locales sénégalaises." },
                            { title: "Impact Mesurable", icon: "📈", desc: "Chaque franc investi doit produire un changement concret et vérifiable sur le terrain." }
                        ].map((val, i) => (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center"
                            >
                                <div className="text-5xl mb-6">{val.icon}</div>
                                <h4 className="text-2xl font-bold text-brand-navy mb-4">{val.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <WolofTestimonials />

                {/* Vision Futur */}
                <div className="bg-brand-navy rounded-3xl p-16 text-white text-center relative overflow-hidden group">

                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <h3 className="text-3xl font-bold mb-6 relative z-10">Notre Vision 2030</h3>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative z-10">
                        Notre ambition est de devenir la référence de l'ingénierie sociale au Sénégal,
                        en prouvant que la technique et l'humain sont les deux faces d'une même médaille.
                        Nous ne portons pas seulement de l'énergie, nous portons votre espoir.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
