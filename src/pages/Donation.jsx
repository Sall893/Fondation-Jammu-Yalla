import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Donation = () => {
    const [amount, setAmount] = useState(5000); // Montant par défaut
    const [customAmount, setCustomAmount] = useState('');
    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    console.log("DEBUG: Appel API vers", API_BASE_URL);

    const handleDonate = async (e) => {
        e.preventDefault();
        setError('');

        const finalAmount = customAmount ? parseInt(customAmount) : amount;

        if (!finalAmount || finalAmount < 100) {
            setError('Le montant minimum est de 100 FCFA.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/donate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: finalAmount,
                    donorName,
                    donorEmail
                }),
            });

            const data = await response.json();

            if (response.ok && data.url) {
                // Redirection vers la page de paiement sécurisée PayDunya
                window.location.href = data.url;
            } else {
                // Si le backend renvoie un message spécifique (ex: KYC)
                setError(data.error || "Erreur de connexion au service de paiement.");
            }
        } catch (err) {
            console.error(err);
            setError("Impossible de joindre le serveur. Veuillez réessayer plus tard.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-brand-navy mb-4">Soutenez Notre Mission</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Votre don, peu importe le montant, a un impact direct sur la vie des familles sénégalaises. Payez de façon sécurisée via <span className="font-bold text-orange-500">Orange Money</span>, <span className="font-bold text-blue-500">Wave</span>, ou Carte Bancaire.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
                >
                    <form onSubmit={handleDonate} className="space-y-8">
                        {/* Sélection du Montant */}
                        <div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Combien souhaitez-vous donner ?</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                {[5000, 10000, 25000, 50000].map(val => (
                                    <button
                                        key={val}
                                        type="button"
                                        onClick={() => { setAmount(val); setCustomAmount(''); }}
                                        className={`py-4 px-6 rounded-xl font-bold border-2 transition-all ${amount === val && !customAmount
                                            ? 'bg-brand-red text-white border-brand-red'
                                            : 'bg-white text-gray-700 border-gray-200 hover:border-brand-red hover:text-brand-red'
                                            }`}
                                    >
                                        {val} FCFA
                                    </button>
                                ))}
                            </div>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">Autre montant :</span>
                                <input
                                    type="number"
                                    min="100"
                                    placeholder="Ex: 500"
                                    value={customAmount}
                                    onChange={(e) => { setCustomAmount(e.target.value); setAmount(0); }}
                                    className="w-full pl-36 pr-12 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-colors"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">FCFA</span>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Informations Donateur */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Nom / Prénom (Optionnel)</label>
                                <input
                                    type="text"
                                    value={donorName}
                                    onChange={(e) => setDonorName(e.target.value)}
                                    placeholder="Comment devrions-nous vous appeler ?"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-blue outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email (Optionnel)</label>
                                <input
                                    type="email"
                                    value={donorEmail}
                                    onChange={(e) => setDonorEmail(e.target.value)}
                                    placeholder="Pour recevoir un reçu"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-brand-blue outline-none transition-colors"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 font-medium">
                                {error}
                            </div>
                        )}

                        {/* Bouton de Paiement */}
                        <button
                            type="submit"
                            disabled={loading || (!amount && !customAmount)}
                            className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-brand-red transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Connexion à PayTech...
                                </>
                            ) : (
                                `Donner ${customAmount || amount || 0} FCFA`
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                        <p className="text-sm font-medium text-gray-500 mb-4">Paiements 100% Sécurisés</p>
                        <div className="flex justify-center items-center gap-6 opacity-60">
                            {/* Logos placeholders simplifiés pour l'UI */}
                            <span className="font-black text-xl text-blue-600">Wave</span>
                            <span className="font-black text-xl text-orange-500">Orange Money</span>
                            <span className="font-black text-xl text-gray-800">VISA</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Donation;
