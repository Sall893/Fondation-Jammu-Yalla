const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { Resend } = require('resend');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Autoriser temporairement tous les origines pour le débogage du déploiement
app.use(cors());

app.use(express.json());

console.log(`Serveur redémarré. CWD: ${process.cwd()}, Dirname: ${__dirname}`);

// Initialisation de Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.RESEND_API_KEY) {
    console.warn("Attention: Clé API RESEND manquante dans l'environnement !");
} else {
    console.log("Service Resend configuré.");
}

// Mock Data for Projects
const projects = [
    { id: 'petits-anges', progress: 100, status: 'Actif' },
    { id: 'serenite-energetique', progress: 65, status: 'En cours' },
    { id: 'pole-bayakh', progress: 35, status: 'Chantier' }
];

// Routes
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
    const project = projects.find(p => p.id === req.params.id);
    if (project) {
        res.json(project);
    } else {
        res.status(404).json({ message: 'Projet non trouvé' });
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, company, message, type } = req.body;
    // Resend sandbox only sends to the verified email address
    const adminEmail = process.env.SMTP_USER || 'souleymanesall138@gmail.com';

    console.log(`Nouveau contact [${type}]:`, { name, email, company, message });

    try {
        if (process.env.RESEND_API_KEY) {
            console.log(`Tentative d'envoi d'e-mail via Resend vers ${adminEmail}...`);
            const { data, error } = await resend.emails.send({
                // Pour l'environnement de test Resend (sans domaine configuré), on doit utiliser onboarding@resend.dev
                from: 'Fondation Jaamu Yàlla <onboarding@resend.dev>',
                to: [adminEmail],
                replyTo: email,
                subject: `[FONDATION] Nouveau Formulaire: ${type}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px;">
                        <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-bottom: 4px solid #ed2124;">
                            <h1 style="color: #1e293b; margin: 0; font-size: 20px;">Nouvelle demande de contact</h1>
                        </div>
                        <div style="padding: 30px; color: #334155; line-height: 1.6;">
                            <p>Vous avez reçu une nouvelle soumission via le formulaire <strong>${type}</strong>.</p>
                            <ul>
                                <li><strong>Nom:</strong> ${name || company || 'N/A'}</li>
                                <li><strong>Email:</strong> ${email}</li>
                                ${company ? `<li><strong>Entreprise:</strong> ${company}</li>` : ''}
                            </ul>
                            <p style="font-weight: bold; margin-top: 20px;">Message :</p>
                            <div style="background-color: #f1f5f9; border-left: 4px solid #ed2124; padding: 15px; font-style: italic;">
                                ${message}
                            </div>
                        </div>
                    </div>
                `,
            });

            if (error) {
                console.error("Erreur API Resend:", error);
                return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
            }

            console.log('E-mail envoyé via Resend avec succès. ID:', data.id);
            res.status(201).json({
                message: 'Message envoyé avec succès ! Notre équipe reviendra vers vous sous 48h.',
                id: data.id
            });
        } else {
            console.log('Mode Démo: E-mail non envoyé (RESEND_API_KEY manquante).');
            res.status(201).json({
                message: 'Message reçu (Mode Démo).',
            });
        }
    } catch (error) {
        console.error("Erreur inattendue serveur contact:", error.message);
        res.status(500).json({
            message: 'Erreur interne du serveur.',
        });
    }
});

// INITIALISATION DE PAYDUNYA
const paydunya = require('paydunya');

const paydunyaModeEnv = (process.env.PAYDUNYA_MODE || '').toLowerCase().trim();
const publicKey = (process.env.PAYDUNYA_PUBLIC_KEY || '').trim();

// Auto-détection du mode si la variable est manquante ou mal configurée
let paydunyaMode = 'test';
if (paydunyaModeEnv === 'live' || publicKey.startsWith('live_')) {
    paydunyaMode = 'live';
}

const paydunyaSetup = new paydunya.Setup({
    masterKey: (process.env.PAYDUNYA_MASTER_KEY || 'dummy_master').trim(),
    privateKey: (process.env.PAYDUNYA_PRIVATE_KEY || 'dummy_private').trim(),
    publicKey: publicKey || 'dummy_public',
    token: (process.env.PAYDUNYA_TOKEN || 'dummy_token').trim(),
    mode: paydunyaMode
});

console.log("=== CONFIGURATION PAYDUNYA ===");
console.log("- Mode Final :", paydunyaMode.toUpperCase());
console.log("- Source Mode :", paydunyaModeEnv ? "Variable d'env" : "Auto-détection via clé");
console.log("- Public Key :", publicKey.substring(0, 12) + '...');
console.log("===============================");

const frontendBase = process.env.FRONTEND_URL || 'http://localhost:5173';
const formattedFrontendUrl = frontendBase.startsWith('http') ? frontendBase : `https://${frontendBase}`;

const paydunyaStore = new paydunya.Store({
    name: 'Fondation Jaamu Yàlla', // only name is required
    tagline: "L'énergie de faire le bien.",
    postalAddress: 'Dakar, Sénégal',
    logoURL: 'https://fondation-jammu-yalla.vercel.app/logo-transparent.png',
    returnURL: `${formattedFrontendUrl}/don/succes`,
    cancelURL: `${formattedFrontendUrl}/don/annulation`
});

// ROUTE : Initialiser un paiement
app.post('/api/donate', async (req, res) => {
    let { amount, donorName, donorEmail } = req.body;

    // S'assurer que le montant est un nombre
    amount = Number(amount);

    if (!amount || amount < 100) {
        return res.status(400).json({ error: "Montant invalide. Le minimum est de 100 FCFA." });
    }

    try {
        console.log(`Initialisation paiement PayDunya de ${amount} FCFA pour ${donorName || 'Anonyme'}`);
        const invoice = new paydunya.CheckoutInvoice(paydunyaSetup, paydunyaStore);

        // Nettoyer les entrées pour éviter des erreurs de caractères spéciaux dans le nom
        const cleanName = (donorName || 'Anonyme').substring(0, 50);

        invoice.addItem(`Don de soutien - ${cleanName}`, 1, amount, amount);
        invoice.totalAmount = amount;
        invoice.description = 'Soutien aux actions de la fondation';

        if (donorEmail) {
            invoice.addCustomData('donorEmail', donorEmail);
        }

        await invoice.create();

        if (invoice.url) {
            console.log("Facture PayDunya créée avec succès:", invoice.token);
            res.json({ url: invoice.url, token: invoice.token });
        } else {
            console.error("Paydunya (Erreur creation):", invoice.responseText);
            res.status(500).json({
                error: "Impossible de générer le lien de paiement PayDunya.",
                details: invoice.responseText,
                code: invoice.responseCode
            });
        }
    } catch (err) {
        console.error("Erreur critique PayDunya:", err);
        res.status(500).json({
            error: "Erreur serveur lors de la communication avec PayDunya.",
            systemError: err.message
        });
    }
});

// ROUTE : Webhook IPN (Notification Post-Paiement par PayDunya)
app.post('/api/paydunya-ipn', async (req, res) => {
    try {
        // PayDunya sends the hash inside req.body.data.hash
        const hash = req.body.data ? req.body.data.hash : req.body.hash;

        if (!hash) {
            return res.status(400).send("Hash manquant");
        }

        const invoice = new paydunya.CheckoutInvoice(paydunyaSetup, paydunyaStore);
        const receipt = await invoice.confirm(hash);

        console.log(`\n=== NOTIFICATION PAYDUNYA REÇUE ===`);
        console.log(`Statut du paiement : ${receipt.status}`);
        console.log(`Montant : ${invoice.totalAmount}`);
        console.log(`Client :`, invoice.customer);
        console.log(`===================================\n`);

        if (receipt.status === 'completed') {
            // Le paiement a réussi
            // TODO: Enregistrer le don dans une base de données ou envoyer email de remerciement

            // On peut envoyer un e-mail à l'admin pour l'avertir
            if (process.env.RESEND_API_KEY) {
                const adminEmail = process.env.SMTP_USER || 'souleymanesall138@gmail.com';
                try {
                    await resend.emails.send({
                        from: 'Fondation Jaamu Yàlla <onboarding@resend.dev>',
                        to: [adminEmail],
                        subject: `🎉 Un nouveau don de ${invoice.totalAmount} FCFA a été reçu !`,
                        html: `<p>Bonne nouvelle ! Le paiement PayDunya a été confirmé.</p><p>Montant: <strong>${invoice.totalAmount} FCFA</strong></p>`
                    });
                } catch (e) { console.error("Erreur envoi notification admin:", e); }
            }
        }

        res.status(200).send("OK");
    } catch (err) {
        console.error("Erreur lors du traitement de l'IPN PayDunya:", err);
        res.status(500).send("Erreur de confirmation");
    }
});

app.get('/', (req, res) => {
    res.send('API Fondation Jaamu Yàlla est opérationnelle.');
});

app.listen(PORT, () => {
    console.log('==========================================');
    console.log('  VERSION PROFESSIONNELLE AVEC LOGO ACTIVE ');
    console.log(`  Serveur sur http://localhost:${PORT}      `);
    console.log('==========================================');
});

