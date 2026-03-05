import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 bg-white min-h-screen">
            {/* Header / Hero Section */}
            <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-6"
                    >
                        Contactez-<span className="text-brand-red">Nous</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
                    >
                        Vous avez une question, une proposition de partenariat ou vous souhaitez simplement en savoir plus sur nos actions ? Notre équipe est à votre écoute.
                    </motion.p>
                </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Contact Information */}
                    <div>
                        <h2 className="text-3xl font-black text-brand-navy mb-12 tracking-tight">Nos Coordonnées</h2>

                        <div className="space-y-10">
                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-1">Téléphone</h4>
                                    <p className="text-2xl font-bold text-brand-navy tracking-tight hover:text-brand-red transition-colors cursor-pointer">
                                        (+221) 76 643 20 45
                                    </p>
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-1">Email</h4>
                                    <p className="text-2xl font-bold text-brand-navy tracking-tight hover:text-brand-blue transition-colors cursor-pointer">
                                        contact@jaamu-yalla.org
                                    </p>
                                </div>
                            </motion.div>

                            {/* Address */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-start gap-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-navy/10 flex items-center justify-center text-brand-navy group-hover:scale-110 transition-transform">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-1">Siège Social</h4>
                                    <address className="not-italic text-xl text-gray-600 font-medium leading-relaxed">
                                        BP 20000 Rufisque <br />
                                        Immeuble Rassoul, Rond-point SIPRES <br />
                                        Cité Thianar Ndoye – ZAC Mbao <br />
                                        Rufisque – Dakar – SENEGAL
                                    </address>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social/Extra Info */}
                        <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100 italic text-gray-500">
                            "L'énergie de faire le bien commence par une simple discussion. N'hésitez pas à nous rendre visite ou à nous appeler."
                        </div>
                    </div>

                    {/* Right Side: Contact Form (Professional UI) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_32px_80px_rgba(0,0,0,0.06)] border border-gray-100"
                    >
                        <h2 className="text-3xl font-black text-brand-navy mb-8">Envoyez-nous un message</h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Prénom & Nom</label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-blue outline-none transition-all text-brand-navy font-bold"
                                        placeholder="Votre nom complet"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-blue outline-none transition-all text-brand-navy font-bold"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Sujet</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-blue outline-none transition-all text-brand-navy font-bold appearance-none">
                                    <option>Faire un don</option>
                                    <option>Devenir partenaire</option>
                                    <option>Demande d'information</option>
                                    <option>Autre</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-blue outline-none transition-all text-brand-navy font-bold resize-none"
                                    placeholder="Comment pouvons-nous vous aider ?"
                                ></textarea>
                            </div>

                            <button className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-brand-red transition-all shadow-xl shadow-brand-navy/10 group">
                                <span>Envoyer le Message</span>
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
