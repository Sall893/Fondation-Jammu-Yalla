import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fetchProjectById } from '../api/api';
import programPetitsAnges from '../assets/program-petits-anges.jpg';

import programSerenite from '../assets/program-serenite.jpg';
import programBayakh from '../assets/program-bayakh.jpg';



const programData = {
    'petits-anges': {
        title: "Petits Anges",
        subtitle: "La Chaleur Humaine avant tout",
        icon: "👼",
        color: "brand-blue",
        image: programPetitsAnges,

        description: "Petits Anges est notre programme historique. Nous intervenons dans les pouponnières et centres d'accueil pour enfants en situation de vulnérabilité extrême ou de handicap. Plus qu'une aide matérielle, nous apportons une présence humaine constante.",
        stats: [
            { label: "Enfants suivis", value: "250+" },
            { label: "Pouponnières", value: "12" },
            { label: "Bénévoles", value: "45" }
        ],
        details: [
            "Appui nutritionnel et médical hebdomadaire.",
            "Amélioration des infrastructures (ventilation, hygiène).",
            "Organisation de moments de partage et de jeux.",
            "Formation du personnel encadrant."
        ]
    },
    'serenite-energetique': {
        title: "Sérénité Énergétique",
        subtitle: "L'Expertise PowerTech au Service du Social",
        icon: "⚡",
        color: "brand-red",
        image: programSerenite,

        description: "Ce programme mobilise les ingénieurs de PowerTech Engineering Services pour auditer et sécuriser les installations électriques des centres sociaux, hôpitaux et écoles. Nous installons également des kits solaires Z-Energy pour garantir la continuité du service.",
        stats: [
            { label: "Centres audités", value: "35" },
            { label: "Kits Solaires", value: "1.2k" },
            { label: "Économie NRJ", value: "40%" }
        ],
        details: [
            "Diagnostic complet des risques électriques.",
            "Installation de systèmes solaires autonomes.",
            "Maintenance préventive des équipements sensibles.",
            "Formation à la sécurité électrique."
        ]
    },
    'pole-bayakh': {
        title: "Pôle Bayakh",
        subtitle: "L'Ingénierie de l'Autonomie",
        icon: "🏗️",
        color: "brand-yellow",
        image: programBayakh,

        description: "Un projet d'envergure sur un terrain de 3000m². Le Pôle Bayakh combine centre de formation agricole moderne et exploitation durable. Grâce aux technologies d'irrigation solaire, nous créons un modèle de développement reproductible.",
        stats: [
            { label: "Surface", value: "3000m²" },
            { label: "Emplois créés", value: "15" },
            { label: "Avancement", value: "35%" }
        ],
        details: [
            "Forage solaire de grande capacité.",
            "Unités de transformation de produits locaux.",
            "Formation à l'agro-écologie.",
            "Système d'irrigation automatisé basse consommation."
        ]
    }
};

const ProgramDetail = () => {
    const { slug } = useParams();
    const [program, setProgram] = useState(programData[slug]);
    const [backendData, setBackendData] = useState(null);

    useEffect(() => {
        const getProjectData = async () => {
            try {
                const data = await fetchProjectById(slug);
                setBackendData(data);
                if (data && data.progress) {
                    // Update the local data with backend data
                    const updatedProgram = { ...programData[slug] };
                    const progressStat = updatedProgram.stats.find(s => s.label === "Avancement");
                    if (progressStat) {
                        progressStat.value = `${data.progress}%`;
                    }
                    setProgram(updatedProgram);
                }
            } catch (error) {
                console.error("Error fetching project data:", error);
            }
        };
        getProjectData();
    }, [slug]);

    if (!program) {

        return (
            <div className="pt-32 text-center">
                <h1 className="text-2xl font-bold">Programme non trouvé</h1>
                <Link to="/" className="text-brand-blue underline">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-24">
            {/* Hero Detail */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-7xl mb-6"
                    >
                        {program.icon}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
                    >
                        {program.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl font-light italic"
                    >
                        {program.subtitle}
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Contenu Principal */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className={`text-3xl font-bold text-brand-navy mb-6 border-l-8 border-${program.color} pl-6`}>
                                Vue d'ensemble
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {program.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {program.stats.map(stat => (
                                <div key={stat.label} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center">
                                    <div className={`text-4xl font-black text-brand-navy mb-2`}>{stat.value}</div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-8">Ce que nous faisons concrètement</h3>

                            {slug === 'pole-bayakh' && (
                                <div className="mb-12 p-8 bg-brand-navy/5 rounded-[2rem] border-2 border-dashed border-brand-navy/20">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="font-bold text-brand-navy uppercase tracking-widest text-sm">Avancement du Chantier</h4>
                                        <span className="text-brand-red font-black">{backendData?.progress || '35'}%</span>
                                    </div>
                                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${backendData?.progress || 35}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-brand-red"
                                        />
                                    </div>
                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                                            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                                            </div>
                                            <div>
                                                <div className="font-bold text-brand-navy leading-tight">Plans 3D</div>
                                                <div className="text-xs text-gray-400">Consultation Maquette</div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                            </div>
                                            <div>
                                                <div className="font-bold text-brand-navy leading-tight">Devis Descriptif</div>
                                                <div className="text-xs text-gray-400">Télécharger PDF</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {program.details.map(detail => (
                                    <li key={detail} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                                        <span className="text-green-500 font-bold text-xl">✓</span>
                                        <span className="text-gray-600 leading-snug">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-brand-navy p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
                                <h4 className="text-2xl font-bold mb-6 italic">Envie de soutenir ce projet spécifique ?</h4>
                                <p className="text-gray-400 mb-10 leading-relaxed">
                                    Chaque don est intégralement alloué au programme de votre choix.
                                </p>
                                <Link to="/partenariat" className="block w-full text-center py-5 bg-brand-red rounded-2xl font-bold shadow-lg hover:shadow-brand-red/30 transition-all uppercase tracking-widest text-sm">
                                    Nous Soutenir
                                </Link>
                                <Link to="/devenir-partenaire" className="block w-full text-center mt-4 py-5 border border-white/30 rounded-2xl font-bold hover:bg-white hover:text-brand-navy transition-all uppercase tracking-widest text-sm text-white">
                                    Devenir Partenaire
                                </Link>
                            </div>

                            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 italic text-gray-500 text-sm text-center leading-relaxed">
                                "L'ingénierie au service du social n'est pas un slogan, c'est notre méthode de travail."
                                <div className="mt-4 font-black not-italic text-brand-navy uppercase tracking-widest text-xs">— Direction Fondation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll de recommandation simple */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 pt-16 border-t border-gray-100">
                <h4 className="text-2xl font-bold text-brand-navy mb-8">Découvrir d'autres actions</h4>
                <div className="flex flex-wrap gap-4">
                    {Object.keys(programData).filter(p => p !== slug).map(p => (
                        <Link
                            key={p}
                            to={`/programmes/${p}`}
                            className="px-8 py-4 bg-gray-50 rounded-2xl font-bold text-gray-600 hover:bg-brand-blue hover:text-white transition-all shadow-sm"
                        >
                            {programData[p].title} →
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramDetail;
