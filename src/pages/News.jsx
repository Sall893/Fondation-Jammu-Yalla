import React from 'react';
import { motion } from 'framer-motion';
import news1 from '../assets/1.jpg';
import news2 from '../assets/news-2.jpg';
import heroNews from '../assets/hero-projects.jpg';
import transparencyImg from '../assets/transparency.jpg';
import programBayakh from '../assets/program-bayakh.jpg';

const News = () => {
    const articles = [
        {
            date: "15 Mars 2026",
            title: "Opération Ramadan 2026 : Appel à la Solidarité",
            category: "Événement",
            desc: "Comme chaque année, la Fondation Jaamu Yàlla se mobilise pour soutenir les familles démunies durant le mois béni.",
            image: news1
        },
        {
            date: "02 Février 2026",
            title: "Inauguration du Forage Solaire à Bayakh",
            category: "Projet Phare",
            desc: "Une étape cruciale franchie pour le Pôle Bayakh avec l'accès à l'eau autonome grâce à l'énergie solaire.",
            image: programBayakh
        },
        {
            date: "20 Janvier 2026",
            title: "Rapport d'Impact 2025 disponible",
            category: "Transparence",
            desc: "Découvrez le bilan complet de nos actions de l'année passée. Plus de 500 familles impactées.",
            image: transparencyImg
        }
    ];

    return (
        <div className="pt-24 pb-24 bg-white">
            {/* Hero Interne Immérsif */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-24">
                <img
                    src={heroNews}
                    alt="Actualités"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-blue/70 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black mb-4 tracking-tight"
                    >
                        Actualités
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white opacity-90 font-light italic"
                    >
                        Suivez nos actions sur le terrain.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {articles.map((art, index) => (
                        <motion.article
                            key={art.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
                        >
                            <div className="h-56 overflow-hidden">
                                <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" />
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-brand-red font-bold text-xs uppercase tracking-widest">{art.category}</span>
                                    <span className="text-gray-400 text-sm">{art.date}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-brand-navy mb-4 leading-tight">{art.title}</h2>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {art.desc}
                                </p>
                                <a href="#" className="font-bold text-brand-blue flex items-center gap-2 group">
                                    Lire la suite
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-32 bg-brand-navy rounded-3xl p-12 text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">Restez connectés</h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Inscrivez-vous à notre newsletter pour recevoir nos derniers rapports d'impact et actualités.</p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input type="email" placeholder="votre@email.com" className="flex-1 px-6 py-4 rounded-xl text-brand-navy outline-none" />
                        <button className="bg-brand-blue px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default News;
