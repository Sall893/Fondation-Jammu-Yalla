import React from 'react';
import { motion } from 'framer-motion';
import imgMame from '../assets/testimonial-mame.png';
import imgPape from '../assets/testimonial-pape.png';

const WolofTestimonials = () => {
    const testimonials = [
        {
            name: "Mame Diarra",
            role: "Doyenne - Bayakh",
            avatar: imgMame,
            text: "Li dëgg dëgg la, Jaamu Yàlla jappale na nu ba nu am ndox mu sell ak kuraŋ. Jërëjëf PowerTech.",
            translation: "C'est une réalité, Jaamu Yàlla nous a aidés à avoir de l'eau propre et de l'électricité. Merci PowerTech."
        },
        {
            name: "Pape Gueye",
            role: "Père de famille - Dakar",
            avatar: imgPape,
            text: "Dama contane ci li ngen def ci pouponnière bi. Sunu doom yi am nañu sécurité.",
            translation: "Je suis content de ce que vous avez fait dans la pouponnière. Nos enfants sont en sécurité."
        }
    ];


    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Preuve Sociale</h2>
                    <h3 className="text-4xl font-extrabold text-brand-navy">Témoignages en Wolof</h3>
                    <p className="text-gray-500 mt-4 italic">Car la solidarité parle avant tout la langue du cœur.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 relative group"
                        >
                            <div className="absolute top-8 left-8 text-6xl text-brand-blue/10 font-serif">“</div>
                            <div className="relative z-10">
                                <p className="text-xl font-bold text-brand-navy mb-4 leading-relaxed italic">
                                    "{t.text}"
                                </p>
                                <p className="text-gray-500 text-sm mb-8 border-l-2 border-brand-red/30 pl-4">
                                    {t.translation}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div>
                                        <div className="font-black text-brand-navy">{t.name}</div>
                                        <div className="text-xs text-brand-blue font-bold uppercase tracking-widest">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WolofTestimonials;
