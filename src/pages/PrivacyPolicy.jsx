import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    const lastUpdate = "5 Mars 2026";

    return (
        <div className="pt-24 bg-gray-50 min-h-screen pb-24 text-brand-navy">
            {/* Minimal Header */}
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-black mb-4"
                    >
                        Politique de <span className="text-brand-blue">Confidentialité</span>
                    </motion.h1>
                    <p className="text-gray-500 font-medium">Dernière mise à jour : {lastUpdate}</p>
                </div>
            </section>

            {/* Content Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
            >
                <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)] prose prose-lg max-w-none">
                    <p>
                        La <strong>Fondation Jaamu Yàlla</strong> accorde une importance capitale à la protection de vos données personnelles.
                        Cette page vous informe de nos politiques concernant la collecte, l'utilisation et la divulgation des informations personnelles que nous recevons des utilisateurs du site.
                    </p>

                    <h2 className="text-2xl font-black mt-12 mb-6">1. Collecte des Informations</h2>
                    <p>
                        Nous collectons plusieurs types d'informations à différentes fins pour vous fournir et améliorer notre service :
                    </p>
                    <ul>
                        <li><strong>Données de Contact :</strong> Lorsque vous remplissez un formulaire (Contact, Devenir Partenaire), nous collectons votre nom, email, numéro de téléphone et entreprise.</li>
                        <li><strong>Données de Donation :</strong> Pour les dons via PayTech, les informations transactionnelles sont gérées de manière sécurisée par notre prestataire. Nous conservons uniquement les détails nécessaires au suivi du don (nom, montant, email).</li>
                    </ul>

                    <h2 className="text-2xl font-black mt-12 mb-6">2. Utilisation des Données</h2>
                    <p>
                        La Fondation Jaamu Yàlla utilise les données collectées pour :
                    </p>
                    <ul>
                        <li>Répondre à vos demandes de renseignements.</li>
                        <li>Traiter vos dons et vous envoyer les reçus correspondants.</li>
                        <li>Vous tenir informé de l'impact de nos projets (si vous avez consenti à recevoir notre newsletter).</li>
                        <li>Améliorer l'expérience utilisateur sur notre site web.</li>
                    </ul>

                    <h2 className="text-2xl font-black mt-12 mb-6">3. Protection des Données</h2>
                    <p>
                        La sécurité de vos données est importante pour nous. Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos informations personnelles contre tout accès non autorisé, altération, divulgation ou destruction.
                    </p>

                    <h2 className="text-2xl font-black mt-12 mb-6">4. Partage des Informations</h2>
                    <p>
                        Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager des informations avec des prestataires de services tiers (comme PayTech ou Resend) uniquement dans le but de réaliser les services liés à la Fondation.
                    </p>

                    <h2 className="text-2xl font-black mt-12 mb-6">5. Vos Droits</h2>
                    <p>
                        Conformément aux lois en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>contact@jaamu-yalla.org</strong>.
                    </p>

                    <h2 className="text-2xl font-black mt-12 mb-6">6. Cookies</h2>
                    <p>
                        Notre site utilise des cookies pour améliorer votre navigation. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer quand un cookie est envoyé.
                    </p>

                    <div className="mt-16 pt-8 border-t border-gray-100 text-sm text-gray-400 text-center">
                        Fondation Jaamu Yàlla - Tous droits réservés.
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default PrivacyPolicy;
