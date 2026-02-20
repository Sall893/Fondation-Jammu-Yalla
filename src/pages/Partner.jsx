import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../api/api';
import heroPartner from '../assets/hero-partner.jpg';


const Partner = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Envoi en cours...' });
        try {
            const result = await submitContactForm({ ...formData, type: 'Directeur RSE' });
            setStatus({ type: 'success', message: result.message });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: "Erreur lors de l'envoi. Veuillez réessayer." });
        }
    };

    const packs = [
        { name: "Pack Bronze", price: "Soutien Local", features: ["Visibilité site web", "Rapport d'impact annuel", "Mention réseaux sociaux"], border: "border-gray-200" },
        { name: "Pack Argent", price: "Partenariat Actif", features: ["Pack Bronze +", "Logo sur supports physiques", "Visite terrain annuelle"], border: "border-brand-blue" },
        { name: "Pack Or", price: "Alliance Stratégique", features: ["Pack Argent +", "Co-branding de projets", "Siège au comité consultatif"], border: "border-brand-red shadow-brand-red/20" },
    ];

    return (
        <div className="pt-24 pb-24 bg-white">
            {/* ... hero section same ... */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-24">
                <img
                    src={heroPartner}
                    alt="Partenariat"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/70 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black mb-4 tracking-tight"
                    >
                        Devenir Partenaire
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-brand-blue font-light italic"
                    >
                        Le levier PowerTech pour amplifier votre impact RSE.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Packs Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-navy">Nos Offres de Partenariat</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Choisissez le niveau d'engagement qui correspond à vos valeurs et à vos objectifs RSE.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {packs.map((pack, index) => (
                        <motion.div
                            key={pack.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-10 bg-white border-2 rounded-3xl shadow-xl flex flex-col items-center ${pack.border}`}
                        >
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">{pack.name}</h3>
                            <p className="text-brand-blue font-semibold mb-8">{pack.price}</p>
                            <ul className="w-full space-y-4 mb-10 text-gray-600">
                                {pack.features.map(f => (
                                    <li key={f} className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span> {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => alert(`Merci pour votre intérêt pour le ${pack.name}. Veuillez remplir le formulaire plus bas.`)}
                                className="mt-auto w-full py-4 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-blue transition-all"
                            >
                                Choisir ce Pack
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Partners Section */}
                <div className="mb-24 py-16 border-y border-gray-100">
                    <h3 className="text-center text-gray-400 font-bold uppercase tracking-[0.2em] text-xs mb-12">Ils soutiennent l'ingénierie sociale</h3>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {["Sénégal Énergie", "Dakar Tech", "PowerTech", "EcoBank", "Orange RSE"].map(partner => (
                            <div key={partner} className="font-black text-2xl text-gray-600 tracking-tighter">
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Donation UI */}
                <div className="bg-gray-50 rounded-3xl p-12 border-2 border-dashed border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-brand-navy mb-6">Faire un Don Direct</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Pas besoin de carte bancaire pour nous aider. Utilisez vos moyens de paiement locaux habituels
                                pour soutenir nos actions immédiatement.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center gap-3 group hover:border-blue-400 transition-all">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 font-black text-xs">WAVE</div>
                                    <div className="text-center">
                                        <div className="text-sm font-bold text-brand-navy">78 000 00 00</div>
                                        <div className="text-[10px] text-gray-400 uppercase tracking-widest">Compte Officiel</div>
                                    </div>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center gap-3 group hover:border-orange-400 transition-all">
                                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 font-black text-xs">OM</div>
                                    <div className="text-center">
                                        <div className="text-sm font-bold text-brand-navy">77 000 00 00</div>
                                        <div className="text-[10px] text-gray-400 uppercase tracking-widest">Marchand Jaamu</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-brand-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-blue transition-all shadow-lg flex items-center justify-center gap-3 text-sm">
                                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 3h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h2" /></svg>
                                    Fiche Partenariat 2026 (PDF)
                                </button>
                                <button className="border-2 border-brand-navy/10 text-brand-navy px-8 py-4 rounded-xl font-bold hover:bg-brand-navy/5 transition-all text-sm">
                                    RIB Bancaire
                                </button>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <h4 className="font-bold text-xl mb-4 text-brand-navy italic">Espace Directeurs RSE</h4>

                            {status.message && (
                                <div className={`mb-6 p-4 rounded-xl text-center font-bold text-sm ${status.type === 'success' ? 'bg-green-100 text-green-700' :
                                    status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                                    }`}>
                                    {status.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    required
                                    type="text"
                                    placeholder="Nom du responsable RSE"
                                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-brand-blue"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <input
                                    required
                                    type="email"
                                    placeholder="Email institutionnel"
                                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-brand-blue"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <textarea
                                    required
                                    placeholder="Décrivez votre projet de collaboration"
                                    rows="3"
                                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:border-brand-blue"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={status.type === 'loading'}
                                    className="w-full py-4 bg-brand-red text-white font-bold rounded-xl shadow-lg hover:shadow-brand-red/30 transition-all uppercase tracking-widest text-sm disabled:opacity-50"
                                >
                                    {status.type === 'loading' ? 'Envoi...' : 'Contacter la Fondation'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Partner;
