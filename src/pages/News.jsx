import React from 'react';
import { motion } from 'framer-motion';
import news1 from '../assets/ramadan-1.jpg';
import news2 from '../assets/news-2.jpg';
import heroNews from '../assets/hero-projects.jpg';
import transparencyImg from '../assets/transparency.jpg';
import programBayakh from '../assets/program-bayakh.jpg';
import ramadan4 from '../assets/ramadan-4.jpg';
import ramadan5 from '../assets/ramadan-5.jpg';

const News = () => {
    const mainArticle = {
        date: "02 Février 2026",
        title: "Inauguration du Forage Solaire à Bayakh : L'Eau, Source de Vie",
        category: "Histoire d'Impact",
        desc: "Au-delà de l'infrastructure, c'est toute une communauté qui retrouve son autonomie. Le nouveau forage solaire du Pôle Bayakh garantit désormais un accès continu à l'eau potable pour plus de 500 familles, transformant radicalement leur quotidien et ouvrant de nouvelles perspectives agricoles.",
        image: programBayakh
    };

    const articles = [
        {
            date: "15 Mars 2026",
            title: "Opération Ramadan 2026 : Appel à la Solidarité",
            category: "Événement",
            desc: "Comme chaque année, la Fondation Jaamu Yàlla se mobilise pour soutenir les familles démunies durant le mois béni.",
            image: news1
        },
        {
            date: "12 Mars 2026",
            title: "Action Terrain : Distribution des Kits de Rupture",
            category: "Impact",
            desc: "Nos bénévoles sur le terrain distribuent les premiers kits alimentaires.",
            image: ramadan4
        },
        {
            date: "10 Mars 2026",
            title: "Préparation Intense au Siège",
            category: "Engagement",
            desc: "Mobilisation totale pour le conditionnement des kits Ndogou.",
            image: ramadan5
        },
        {
            date: "20 Janvier 2026",
            title: "Rapport d'Impact 2025 disponible",
            category: "Transparence",
            desc: "Découvrez le bilan complet de nos actions de l'année passée. Plus de 5000 bénéficiaires directs atteints.",
            image: transparencyImg
        }
    ];

    return (
        <div className="pt-24 pb-24 bg-white">
            {/* Hero Interne Immérsif */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-16 md:mb-24">
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
                        Histoires d'Impact
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white opacity-90 font-light italic"
                    >
                        Les visages et les récits derrière nos actions.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Article Principal (Featured Story) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 group cursor-pointer flex flex-col md:flex-row"
                >
                    <div className="md:w-1/2 md:h-auto h-64 overflow-hidden">
                        <img src={mainArticle.image} alt={mainArticle.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{mainArticle.category}</span>
                            <span className="text-gray-400 text-sm font-medium">{mainArticle.date}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 leading-tight group-hover:text-brand-red transition-colors">{mainArticle.title}</h2>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            {mainArticle.desc}
                        </p>
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center gap-2 font-bold text-brand-blue group-hover:text-brand-navy transition-colors">
                                Lire le récit complet
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Grille d'Articles Secondaires */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {articles.map((art, index) => (
                        <motion.article
                            key={art.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all group cursor-pointer"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                                    <span className="text-brand-red font-bold text-xs uppercase tracking-widest">{art.category}</span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-400 text-sm font-medium">{art.date}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-brand-navy mb-4 leading-tight group-hover:text-brand-red transition-colors">{art.title}</h2>
                                <p className="text-gray-600 mb-8 line-clamp-3">
                                    {art.desc}
                                </p>
                                <div className="mt-auto">
                                    <a href="#" className="font-bold text-brand-blue flex items-center gap-2 group-hover:text-brand-navy transition-colors">
                                        Lire l'article
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter Section façon Rapport Annuel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 relative rounded-3xl overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-brand-navy"></div>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                    <div className="relative z-10 p-12 md:p-16 text-center text-white flex flex-col items-center">
                        <div className="w-16 h-16 bg-brand-red/20 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
                            </svg>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black mb-4">Recevez le Rapport d'Impact</h3>
                        <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">Inscrivez-vous pour recevoir notre bilan annuel, nos analyses terrain et les histoires inspirantes de nos bénéficiaires directement dans votre boîte mail.</p>
                        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto">
                            <input type="email" placeholder="Entrez votre adresse email..." className="flex-1 px-6 py-4 rounded-xl text-brand-navy outline-none font-medium" />
                            <button className="bg-brand-red px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">S'abonner</button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default News;
