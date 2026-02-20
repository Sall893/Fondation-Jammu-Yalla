import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import news1 from '../assets/1.jpg';
import news2 from '../assets/program-bayakh.jpg';

const RecentNewsPreview = () => {
    const news = [
        {
            date: "15 Mars 2026",
            title: "Opération Ramadan 2026",
            category: "Événement",
            image: news1
        },
        {
            date: "02 Février 2026",
            title: "Forage Solaire à Bayakh",
            category: "Projet Phare",
            image: news2
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Actualités</h2>
                        <h3 className="text-4xl font-extrabold text-brand-navy">Suivez nos dernières actions</h3>
                    </div>
                    <Link to="/news" className="bg-white border-2 border-brand-navy text-brand-navy px-8 py-3 rounded-full font-bold hover:bg-brand-navy hover:text-white transition-all shadow-md">
                        Voir toute l'actualité
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {news.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group flex bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                        >
                            <div className="w-1/3 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="w-2/3 p-8">
                                <span className="text-brand-red font-bold text-xs uppercase tracking-widest mb-2 block">{item.category}</span>
                                <h4 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm">{item.date}</span>
                                    <span className="text-brand-blue font-bold group-hover:translate-x-2 transition-transform">Lire →</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentNewsPreview;
