import React from 'react';
import { Link } from 'react-router-dom';

const DonationCancel = () => {
    return (
        <div className="pt-32 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="max-w-xl mx-auto px-4 text-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <h1 className="text-4xl font-black text-brand-navy mb-4">Paiement Annulé</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Le processus de don a été interrompu. Aucun montant n'a été débité de votre compte.
                    Si vous avez rencontré un problème technique, n'hésitez pas à nous contacter.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/don" className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-colors">
                        Essayer à nouveau
                    </Link>
                    <Link to="/" className="bg-gray-200 text-brand-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-300 transition-colors">
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCancel;
