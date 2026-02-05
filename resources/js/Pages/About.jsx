import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Stethoscope, Heart, Users, Shield, Target, Award, Truck, Activity } from "lucide-react";
import MainLayout from '../Layouts/MainLayout';

// Utils
const getInitials = (name) =>
    name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

// Carte flip
function TeamCard({ member }) {
    return (
        <div className="perspective group cursor-pointer">
            <div className="relative w-72 h-96 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Face avant – Photo */}
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                     <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'bg-emerald-100');
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span class="text-4xl font-bold text-emerald-600">${getInitials(member.name)}</span>`;
                        }}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-emerald-300 font-medium">{member.role}</p>
                    </div>
                </div>

                {/* Face arrière – Description */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-6 text-white shadow-xl flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-emerald-200 mb-4 font-medium">{member.role}</p>
                    <p className="text-sm leading-relaxed opacity-90">
                        {member.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

// Carousel auto-scroll
function TeamCarousel({ team }) {
    return (
        <div className="overflow-hidden py-10">
            <motion.div
                className="flex gap-8 w-max px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...team, ...team].map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))}
            </motion.div>
        </div>
    );
}

export default function About() {
    const team = [
        {
            name: "Dr. Marie Kouassi",
            role: "Directrice Générale",
            image: "/images/photo-1560250097-0b93528c311a.avif",
            description: "15 ans d'expérience en médecine du travail. Elle dirige la vision stratégique de Bio-Médical.",
        },
        {
            name: "M. Jean Koffi",
            role: "Directeur Technique",
            image: "/images/8DE9F35E-F383-468C-8062-035F1A29CDCB.JPG",
            description: "Expert en gestion de projets biomédicaux avec une expérience internationale.",
        },
         {
            name: "Dr. Sophie Laurent",
            role: "Médecin Chef",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
            description: "Spécialiste en santé au travail, elle supervise l'ensemble des activités médicales.",
        },
         {
            name: "Marc Andre",
            role: "Responsable Logistique",
            image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop",
            description: "Assure le déploiement efficace de nos unités mobiles sur le terrain.",
        },
    ];

    const values = [
        {
            title: "INTÉGRITÉ",
            description: "L’intégrité représente la pierre angulaire de notre édifice. Elle nous sert de référence et guide nos choix et actions. Ainsi, nos actions sont fiables car nous respectons nos engagements et la déontologie.",
            icon: Shield
        },
        {
            title: "EFFICACITÉ",
            description: "L'histoire de Bio-Médical a montré que le succès de l'entreprise est affaire d'efficacité individuelle et collective. Etre efficace, c'est être pragmatique, flexible, rapide et performant.",
            icon: Target
        },
        {
            title: "INNOVATION",
            description: "L’innovation Bio-Médical est une mise en adéquation entre la technologie et notre marché. Notre avantage concurrentiel repose sur la vitesse de transformation de nos compétences.",
            icon: Activity
        },
        {
            title: "ENGAGEMENT",
            description: "Valeur fondatrice de Bio-Médical, l'engagement est au cœur de l'entreprise. C'est comprendre les besoins de nos clients et mobiliser notre expertise pour viser l'excellence.",
            icon: Users
        }
    ];

    const activities = [
        {
            title: "VISITE MÉDICALE DU PERMIS DE CONDUIRE",
            description: "Depuis 2007, BIO-MEDICAL est le garant médical du processus de délivrance du permis de conduire ivoirien. Nous apprécions l’état clinique des candidats (environ 200.000 personnes/an) dans plus de 20 localités.",
            icon: Truck
        },
        {
            title: "VISITE MÉDICALE D’APTITUDE PROFESSIONNELLE",
            description: "Depuis plus de 11 ans, nous mettons notre expertise au service des concours d’aptitude professionnelle (CAFOP, Fonction Publique…). Plus d'un million de visites par an.",
            icon: Award
        },
        {
            title: "VISITE MÉDICALE EN ENTREPRISE",
            description: "Unités mobiles pour réaliser la visite médicale du personnel sur site, en adéquation avec la convention collective. Plus de 25.000 personnes visitées.",
            icon: Stethoscope
        },
         {
            title: "DISTRIBUTION D’EQUIPEMENTS",
            description: "Gamme complète de plus de 5.000 références : protection, désinfection, premiers secours, soins, pansements, hypodermie, mobilier médical...",
            icon: Activity
        }
    ];

    return (
        <>
            <Head title="À Propos - Biomédical" />

            <div className="min-h-screen bg-gray-50">
                {/* Hero / Presentation Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative bg-gradient-to-r from-emerald-700 to-teal-800 text-white py-24 md:py-32 overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')]"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h1 
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                            >
                                Leader National en <span className="text-emerald-300">Biologie Médicale</span>
                            </motion.h1>
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl leading-relaxed text-emerald-50 space-y-6 text-justify"
                            >
                                <p>
                                    BIO-MEDICAL est issue de la volonté commune du Ministère du transport de Côte d’Ivoire et d’un ensemble de médecins et de biologistes, d’instaurer un service médical de qualité dans le processus d’obtention du permis de conduire.
                                </p>
                                <p>
                                    Créée en Octobre 2007, BIO-MEDICAL SA lutte contre la fraude dans la délivrance du permis. En 2013, pour accompagner la création des centres de gestion intégrés, nous sommes passés de 2 à 26 sites en 4 ans.
                                </p>
                                <p>
                                    La recherche perpétuelle de l’excellence nous guide. Notre équipe compte aujourd'hui 52 médecins, 27 biologistes, 29 opticiens, 5 optométristes, 35 aides-soignants et 10 techniciens d’imagerie.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Vision & Mission */}
                <section className="py-20 container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div 
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-emerald-500"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <Target className="w-8 h-8 text-emerald-600" />
                                VISION
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Devenir le leader Africain de la médecine préventive. Pour cela, nous consacrons tous nos efforts à l’innovation et à la responsabilité, afin de vous offrir les technologies et les services de pointe qui vous aideront à améliorer votre santé et à prévenir les risques.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-teal-500"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <Heart className="w-8 h-8 text-teal-600" />
                                MISSION
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Insuffler une nouvelle vie dans le monde médical, en offrant des solutions innovantes qui améliorent la vie de nos partenaires et de notre communauté, et qui contribuent à rendre l’univers socialement responsable.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-emerald-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800">Nos Valeurs</h2>
                            <p className="text-gray-600 mt-4 text-xl">Les piliers de notre excellence</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                        <value.icon className="w-7 h-7 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Objectives */}
                <section className="py-20 container mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white shadow-2xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Objectifs</h2>
                        <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-300">
                            Notre objectif est d’aider nos partenaires à prévenir toute sorte de risque médical, notamment en renforçant leur sécurité routière, mais également en améliorant l’efficacité de leur personnel par l’anticipation des sinistres médicaux.
                        </p>
                    </motion.div>
                </section>

                {/* Activities Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800">Nos Activités</h2>
                            <p className="text-gray-600 mt-4 text-xl">Une expertise diversifiée à votre service</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {activities.map((activity, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-colors"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                                            <activity.icon className="w-8 h-8 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {activity.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-gradient-to-b from-gray-50 to-emerald-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800">Notre Équipe</h2>
                            <p className="text-gray-600 mt-4 text-xl">Des professionnels qualifiés et expérimentés</p>
                        </div>
                        <TeamCarousel team={team} />
                    </div>
                </section>
            </div>
        </>
    );
}

About.layout = (page) => <MainLayout>{page}</MainLayout>;
