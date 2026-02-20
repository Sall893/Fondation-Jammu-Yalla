import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-projects.jpg';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Overlay dégradé complexe pour le texte */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-brand-navy/80 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-navy/40 z-10"></div>

            {/* Background Image avec animation de zoom lent */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="absolute inset-0"
            >
                <img
                    src={heroImg}
                    alt="Solidarité"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-brand-blue font-bold tracking-[0.3em] mb-4 uppercase text-sm"
                    >
                        Fondation Jaamu Yàlla
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-extrabold mb-8 leading-[1.1]"
                    >
                        L’Énergie de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">
                            faire le bien
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl text-gray-300 mb-12 leading-relaxed max-w-xl"
                    >
                        L'ingénierie au service du bien commun. Nous transformons les environnements précaires en espaces sécurisés, énergisés et durables au Sénégal.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Link to="/projets-phares" className="bg-brand-red text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-brand-red/50 transition-all transform hover:-translate-y-2 active:scale-95 text-center">
                            Nos Projets Phares
                        </Link>
                        <Link to="/devenir-partenaire" className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-brand-navy transition-all transform hover:-translate-y-2 active:scale-95 text-center">
                            Devenir Partenaire
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Indicateur de scroll minimaliste */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-10 z-20 hidden md:flex items-center gap-4"
            >
                <div className="h-24 w-[1px] bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 96] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-8 bg-brand-blue"
                    />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/50 rotate-90 origin-left">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
