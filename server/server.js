const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Autoriser temporairement tous les origines pour le débogage du déploiement
app.use(cors());

app.use(express.json());



console.log(`Serveur redémarré. CWD: ${process.cwd()}, Dirname: ${__dirname}`);



const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.power-techservices.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true' ? true : false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    // Forcer l'IPv4 car Render a des problèmes avec l'IPv6 sortant vers les serveurs mail
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
    family: 4, // FORCE IPv4
    tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
    }
});




// Vérification de la connexion SMTP au démarrage
console.log('Vérification du serveur SMTP...');
transporter.verify((error, success) => {
    if (error) {
        console.error('Erreur SMTP:', error.message);
    } else {
        console.log('Serveur de messagerie prêt');
    }
});





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
    const adminEmail = process.env.SMTP_USER || 'souleymane.sall@power-techservices.com';

    console.log(`Nouveau contact [${type}]:`, { name, email, company, message });

    const logoPath = path.join(__dirname, '../src/assets/logo-transparent.png');

    // Envoi de la notification par e-mail
    const mailOptions = {
        from: `"Fondation Jaamu Yàlla" <${adminEmail}>`,
        to: adminEmail,
        replyTo: email,
        subject: `[PRO-FONDATION-2026] Nouveau Formulaire: ${type}`,
        text: `
            Nouveautés sur le site Fondation Jaamu Yàlla
            
            Vous avez reçu une nouvelle soumission de formulaire :
            Type: ${type}
            Nom: ${name || company || 'N/A'}
            Email: ${email}
            ${company ? `Entreprise: ${company}` : ''}
            
            Message:
            ${message}
        `,
        html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-bottom: 4px solid #ed2124;">
                    <img src="cid:logo" alt="Fondation Jaamu Yàlla" style="max-height: 80px; margin-bottom: 20px;">
                    <h1 style="color: #1e293b; margin: 0; font-size: 24px;">Nouvelle demande de contact</h1>
                </div>
                
                <div style="padding: 40px; color: #334155; line-height: 1.6;">
                    <p style="font-size: 16px;">Bonjour,</p>
                    <p style="font-size: 16px;">Vous avez reçu une nouvelle soumission via le formulaire <strong>${type}</strong>.</p>
                    
                    <div style="background-color: #f1f5f9; padding: 25px; border-radius: 8px; margin: 30px 0;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding-bottom: 10px; font-weight: bold; color: #64748b; width: 120px;">NOM :</td>
                                <td style="padding-bottom: 10px; color: #1e293b;">${name || company || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 10px; font-weight: bold; color: #64748b;">EMAIL :</td>
                                <td style="padding-bottom: 10px; color: #1e293b;"><a href="mailto:${email}" style="color: #ed2124; text-decoration: none;">${email}</a></td>
                            </tr>
                            ${company ? `
                            <tr>
                                <td style="padding-bottom: 10px; font-weight: bold; color: #64748b;">ENTREPRISE :</td>
                                <td style="padding-bottom: 10px; color: #1e293b;">${company}</td>
                            </tr>` : ''}
                        </table>
                    </div>
                    
                    <p style="font-weight: bold; color: #64748b; margin-bottom: 10px; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Message :</p>
                    <div style="background-color: #ffffff; border-left: 4px solid #ed2124; padding: 20px; font-style: italic; color: #1e293b; white-space: pre-wrap; font-size: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        ${message}
                    </div>
                </div>
                
                <div style="background-color: #1e293b; padding: 25px; color: #94a3b8; font-size: 13px; text-align: center;">
                    <p style="margin: 0;">© 2026 Fondation Jaamu Yàlla - Tous droits réservés.</p>
                    <p style="margin: 10px 0 0 0;">Cet e-mail a été généré automatiquement par le serveur de la fondation.</p>
                </div>
            </div>
        `,
        attachments: [{
            filename: 'logo.png',
            path: logoPath,
            cid: 'logo'
        }]
    };

    try {
        if (process.env.SMTP_USER || adminEmail) {
            console.log(`Tentative d'envoi d'e-mail pro de ${adminEmail} vers ${adminEmail}...`);
            const info = await transporter.sendMail(mailOptions);
            console.log('E-mail pro envoyé avec succès:', info.messageId);
        } else {
            console.log('Mode Démo: E-mail non envoyé (SMTP_USER manquant).');
        }

        res.status(201).json({
            message: 'Message reçu avec succès ! Notre équipe reviendra vers vous sous 48h.',
            id: Math.random().toString(36).substr(2, 9)
        });
    } catch (error) {
        console.error("Erreur critique lors de l'envoi de l'e-mail pro:", error.message);
        res.status(201).json({
            message: 'Message reçu (Erreur de notification). Notre équipe reviendra vers vous.',
            id: Math.random().toString(36).substr(2, 9)
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

