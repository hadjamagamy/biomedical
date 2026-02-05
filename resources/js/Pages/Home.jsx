import { Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle,
    Calendar,
    Shield,
    Users,
    Heart,
} from "lucide-react";

import MainLayout from "../Layouts/MainLayout";

export default function Home() {
    const benefits = [
        "Visites médicales sur site",
        "Équipe médicale qualifiée",
        "Conformité réglementaire",
        "Suivi personnalisé",
        "Rapports détaillés",
        "Disponibilité flexible",
    ];

    return (
        <>
            <Head title="Accueil - Biomédical" />

            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white">
                    <div className="absolute inset-0 opacity-20">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                            }}
                        ></div>
                    </div>

                    <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                    La santé de vos employés,
                                    <span className="block text-emerald-200">
                                        notre priorité
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
                                    Services de visites médicales
                                    professionnelles directement dans votre
                                    entreprise
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/rendez-vous"
                                        className="inline-flex items-center justify-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                                    >
                                        Prendre Rendez-vous
                                        <ArrowRight className="w-6 h-6" />
                                    </Link>
                                    <Link
                                        href="/a-propos"
                                        className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
                                    >
                                        En savoir plus
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="hidden md:block"
                            >
                                <div className="relative">
                                    <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
                                        <img
                                            src="/images/8DE9F35E-F383-468C-8062-035F1A29CDCB.JPG"
                                            alt="Biologie"
                                            className="w-full h-full object-cover rounded-3xl"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Pourquoi Biomédical ?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Une solution complète et pratique pour la santé
                                de vos collaborateurs
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                    }}
                                    className="flex items-center gap-4 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                                >
                                    <CheckCircle className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium text-lg">
                                        {benefit}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="text-6xl font-bold mb-4">
                                    500+
                                </div>
                                <div className="text-xl text-emerald-100">
                                    Entreprises servies
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <div className="text-6xl font-bold mb-4">
                                    10K+
                                </div>
                                <div className="text-xl text-emerald-100">
                                    Employés examinés
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <div className="text-6xl font-bold mb-4">
                                    100%
                                </div>
                                <div className="text-xl text-emerald-100">
                                    Satisfaction client
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Prêt à commencer ?
                            </h2>
                            <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                                Planifiez votre première visite médicale
                                d'entreprise aujourd'hui
                            </p>
                            <Link
                                href="/rendez-vous"
                                className="inline-flex items-center gap-3 bg-white text-emerald-600 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                            >
                                <Calendar className="w-7 h-7" />
                                Prendre Rendez-vous
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}

Home.layout = (page) => <MainLayout>{page}</MainLayout>;
