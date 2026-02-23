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



app.get('/', (req, res) => {
    res.send('API Fondation Jaamu Yàlla est opérationnelle.');
});

app.listen(PORT, () => {
    console.log('==========================================');
    console.log('  VERSION PROFESSIONNELLE AVEC LOGO ACTIVE ');
    console.log(`  Serveur sur http://localhost:${PORT}      `);
    console.log('==========================================');
});

