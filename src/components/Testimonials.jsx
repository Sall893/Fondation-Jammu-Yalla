import React from 'react';
import { motion } from 'framer-motion';
import imgMoussa from '../assets/testimonial-moussa.png';
import imgAminata from '../assets/testimonial-aminata.png';
import imgMactar from '../assets/testimonial-mactar.png';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Moussa Diop",
            role: "Bénéficiaire, Pôle Bayakh",
            text: "Le projet du Pôle Bayakh a changé ma vision de l'agriculture. Grâce au forage solaire, nous avons désormais un accès constant à l'eau.",
            avatar: imgMoussa
        },
        {
            name: "Aminata Kane",
            role: "Responsable Pouponnière",
            text: "Le soutien constant du programme Petits Anges nous permet d'offrir un meilleur avenir à ces enfants. Leur présence humaine est inestimable.",
            avatar: imgAminata
        },
        {
            name: "Mactar Sylla",
            role: "Partenaire Technique RSE",
            text: "Collaborer avec Jaamu Yàlla nous donne la garantie que notre investissement social est géré avec une rigueur d'ingénieur.",
            avatar: imgMactar
        }
    ];


    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Témoignages</h2>
                    <h3 className="text-4xl font-extrabold text-brand-navy">Ils nous font confiance</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-10 rounded-3xl relative shadow-sm border border-gray-100 hover:shadow-xl transition-all"
                        >
                            <div className="absolute -top-6 left-10">
                                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-md" />
                            </div>
                            <p className="text-gray-600 italic mb-8 pt-6 leading-relaxed">
                                "{t.text}"
                            </p>
                            <div>
                                <h4 className="font-bold text-brand-navy text-lg">{t.name}</h4>
                                <p className="text-brand-blue text-sm font-semibold">{t.role}</p>
                            </div>
                            <div className="absolute bottom-8 right-8 text-6xl text-brand-blue/10 font-serif">”</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
