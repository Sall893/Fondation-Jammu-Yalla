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

// Logger global pour toutes les requêtes
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});

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

const axios = require('axios');

// CONFIGURATION PAYTECH
const PAYTECH_API_KEY = process.env.PAYTECH_API_KEY;
const PAYTECH_API_SECRET = process.env.PAYTECH_API_SECRET;

console.log("=== CONFIGURATION PAYTECH ===");
console.log("- API Key (début):", (PAYTECH_API_KEY || "").substring(0, 10) + "...");
console.log("==============================");

// ROUTE : Vérification de l'état de l'API de don
app.get('/api/donate-check', (req, res) => {
    res.json({
        status: 'ok',
        gateway: 'paytech',
        paytech_configured: !!PAYTECH_API_KEY
    });
});

// ROUTE : Initialiser un paiement PayTech
app.post('/api/donate', async (req, res) => {
    console.log("-> Requête de don reçue (via PayTech)...");
    let { amount, donorName, donorEmail } = req.body;

    amount = Number(amount);
    if (!amount || amount < 100) {
        return res.status(400).json({ error: "Montant invalide. Le minimum est de 100 FCFA." });
    }

    try {
        const frontendBase = process.env.FRONTEND_URL || 'http://localhost:5173';
        const formattedFrontendUrl = frontendBase.startsWith('http') ? frontendBase : `https://${frontendBase}`;

        const params = {
            item_name: `Don Fondation Jaamu Yàlla - ${donorName || 'Anonyme'}`,
            item_price: amount,
            currency: "XOF",
            ref_command: `DON_${Date.now()}`,
            command_name: `Don de soutien de ${donorName || 'Anonyme'}`,
            env: "live", // Passer par défaut en live
            ipn_url: `${process.env.BACKEND_URL || 'https://fondation-jammu-yalla.onrender.com'}/api/paytech-ipn`,
            success_url: `${formattedFrontendUrl}/don/succes`,
            cancel_url: `${formattedFrontendUrl}/don/annulation`,
            custom_field: JSON.stringify({ donorEmail, donorName })
        };

        console.log("Appel API PayTech avec params:", { ...params, custom_field: "..." });

        const response = await axios.post("https://paytech.sn/api/payment/request-payment", params, {
            headers: {
                "API_KEY": PAYTECH_API_KEY,
                "API_SECRET": PAYTECH_API_SECRET
            }
        });

        if (response.data && response.data.success === 1) {
            console.log("Lien PayTech généré avec succès:", response.data.token);
            res.json({ url: response.data.redirect_url, token: response.data.token });
        } else {
            console.error("Erreur PayTech (Réponse):", response.data);
            res.status(500).json({
                error: "Impossible de générer le lien de paiement PayTech.",
                details: response.data.errors || "Erreur inconnue"
            });
        }
    } catch (err) {
        console.error("Erreur critique PayTech:", err.message);
        res.status(500).json({
            error: "Erreur serveur lors de la communication avec PayTech.",
            systemError: err.message
        });
    }
});

// ROUTE : Webhook IPN PayTech (Notification post-paiement)
app.post('/api/paytech-ipn', async (req, res) => {
    console.log("=== NOTIFICATION PAYTECH REÇUE ===");
    try {
        const { type_event, api_key_sha256, api_secret_sha256, extra_cloud_params, item_price, ref_command } = req.body;

        // Note: PayTech envoie les clés hachées pour vérification
        // On vérifie (simplifié) si c'est bien une notification de vente
        if (type_event === 'sale_complete') {
            console.log(`Paiement confirmé ! Réf: ${ref_command}, Montant: ${item_price} XOF`);

            // Notification Admin via Resend
            if (process.env.RESEND_API_KEY) {
                const adminEmail = process.env.SMTP_USER || 'souleymanesall138@gmail.com';
                try {
                    await resend.emails.send({
                        from: 'Fondation Jaamu Yàlla <onboarding@resend.dev>',
                        to: [adminEmail],
                        subject: `🎉 Nouveau don reçu via PayTech : ${item_price} FCFA`,
                        html: `
                            <div style="font-family: Arial, sans-serif; padding: 20px;">
                                <h1 style="color: #10b981;">Confirmation de Don</h1>
                                <p>Un nouveau don de <strong>${item_price} FCFA</strong> a été reçu avec succès.</p>
                                <p>Référence: ${ref_command}</p>
                            </div>
                        `
                    });
                } catch (e) { console.error("Erreur envoi notification admin:", e); }
            }
        }
        res.status(200).send("OK");
    } catch (err) {
        console.error("Erreur traitement IPN PayTech:", err);
        res.status(500).send("Error");
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

