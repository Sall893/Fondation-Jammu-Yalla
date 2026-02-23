import React from 'react';
import { Link } from 'react-router-dom';

const DonationSuccess = () => {
    return (
        <div className="pt-32 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="max-w-xl mx-auto px-4 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-4xl font-black text-brand-navy mb-4">Merci pour votre générosité !</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Votre don a été traité avec succès. Grâce à vous, nous pouvons continuer à transformer des vies au Sénégal.
                </p>
                <Link to="/" className="inline-block bg-brand-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-blue transition-colors">
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
};

export default DonationSuccess;
