import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../api/api';
import heroPartner from '../assets/hero-partner.jpg';


const BecomePartner = () => {
    const [formData, setFormData] = useState({
        company: '',
        role: '',
        email: '',
        type: 'Mécénat Financier',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Envoi en cours...' });
        try {
            const result = await submitContactForm({ ...formData, type: `Partenariat: ${formData.type}` });
            setStatus({ type: 'success', message: result.message });
            setFormData({ company: '', role: '', email: '', type: 'Mécénat Financier', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: "Erreur lors de l'envoi. Veuillez réessayer." });
        }
    };

    return (
        <div className="pt-24 pb-24 bg-white">
            {/* Hero Interne Immérsif */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-16">
                <img
                    src={heroPartner}
                    alt="Devenir Partenaire"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-red/70 backdrop-blur-[2px]"></div>
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
                        className="text-xl text-white/90 font-light italic max-w-3xl mx-auto"
                    >
                        Unissez votre force RSE à notre expertise technique pour un Sénégal plus solidaire.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 mb-16">
                    <h2 className="text-3xl font-extrabold text-brand-navy mb-8 text-center italic">Formulaire d'Intention</h2>

                    {status.message && (
                        <div className={`mb-8 p-4 rounded-xl text-center font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' :
                            status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                            {status.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                required
                                type="text"
                                placeholder="Nom de votre Entreprise"
                                className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-200 outline-none focus:border-brand-blue"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                            <input
                                required
                                type="text"
                                placeholder="Votre Poste"
                                className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-200 outline-none focus:border-brand-blue"
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            />
                        </div>
                        <input
                            required
                            type="email"
                            placeholder="Email professionnel"
                            className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-200 outline-none focus:border-brand-blue"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <select
                            className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-200 outline-none focus:border-brand-blue text-gray-400"
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        >
                            <option>Mécénat Financier</option>
                            <option>Mécénat de Compétences</option>
                            <option>Partenariat Technique</option>
                        </select>
                        <textarea
                            required
                            placeholder="Décrivez brièvement vos attentes"
                            rows="4"
                            className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-200 outline-none focus:border-brand-blue"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                        <button
                            type="submit"
                            disabled={status.type === 'loading'}
                            className="w-full py-5 bg-brand-navy text-white font-black rounded-2xl shadow-xl hover:bg-brand-blue transition-all uppercase tracking-[0.2em] disabled:opacity-50"
                        >
                            {status.type === 'loading' ? 'Envoi...' : 'Envoyer ma Demande'}
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default BecomePartner;
