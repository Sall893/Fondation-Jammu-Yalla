import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-transparent.png';

import powertechLogo from '../assets/powertech-logo.png';

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white pt-24 pb-12 relative overflow-hidden">
            {/* Décoration en fond */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                    {/* Colonne 1 : Identité */}
                    <div className="md:col-span-4 max-w-sm">
                        <Link to="/" className="inline-block mb-8 hover:scale-105 transition-transform">

                            <img
                                src={logo}
                                alt="Logo Fondation Jaamu Yàlla"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-lg mb-8">
                            L'énergie de faire le bien par l'ingénierie sociale. Une initiative du groupe
                            <strong> PowerTech Engineering Services</strong> pour un Sénégal plus solidaire.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all cursor-pointer group">
                                    <div className="w-5 h-5 bg-white/40 group-hover:bg-white rounded-sm"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Colonne 2 : Navigation Rapide */}
                    <div className="md:col-span-2">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-blue mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Accueil', path: '/' },
                                { name: 'La Fondation', path: '/la-fondation' },
                                { name: 'Devenir Partenaire', path: '/devenir-partenaire' },
                                { name: 'Actualités', path: '/news' }
                            ].map(link => (

                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue scale-0 group-hover:scale-100 transition-transform"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne 3 : Programmes */}
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-blue mb-8">Nos Programmes</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Petits Anges', path: '/programmes/petits-anges' },
                                { name: 'Sérénité Énergétique', path: '/programmes/serenite-energetique' },
                                { name: 'Pôle Bayakh', path: '/programmes/pole-bayakh' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red scale-0 group-hover:scale-100 transition-transform"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne 4 : Contact */}
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-blue mb-8">Nous Contacter</h4>
                        <div className="space-y-6 text-gray-400">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-brand-blue">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <p className="text-sm leading-relaxed">
                                    Siège Social PTES,<br />Dakar, Sénégal
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-brand-blue">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <p className="text-sm">contact@jaamuyalla.org</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subfooter */}
                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-gray-500 text-sm">
                        &copy; 2026 Fondation Jaamu Yàlla. Tous droits réservés.
                    </div>
                    <div className="flex items-center gap-8">
                        <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Partenaire Officiel</span>
                        <div className="flex items-center gap-2 transition-all cursor-default">
                            <img
                                src={powertechLogo}
                                alt="Logo Groupe PowerTech"
                                className="h-10 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 text-gray-500 text-xs font-bold uppercase tracking-wider">
                        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
