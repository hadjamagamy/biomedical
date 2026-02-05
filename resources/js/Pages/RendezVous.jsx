import { Head, useForm, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    Phone,
    Mail,
     User,
    Briefcase,
    MessageSquare,
    Send,
    CheckCircle,
    X,
} from "lucide-react";
import MainLayout from "../Layouts/MainLayout";
import { useEffect, useState } from "react";

export default function RendezVous() {
    const { flash = {} } = usePage().props;
    const [showSuccess, setShowSuccess] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        nom: "",
        email: "",
        telephone: "",
        fonction: "",
        date_rendez_vous: "",
        message: "",
    });

    useEffect(() => {
        if (flash.success) {
            setShowSuccess(true);
            const timer = setTimeout(() => setShowSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [flash?.success]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/rendez-vous", {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <>
            <Head title="Prendre un Rendez-vous - Biomédical" />

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                     <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative z-10 pointer-events-auto"
                        >
                            <button 
                                onClick={() => setShowSuccess(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            
                            <div className="text-center">
                                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Demande Envoyée !
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    {flash.success || "Votre demande de rendez-vous a été envoyée avec succès. Nous vous contacterons bientôt."}
                                </p>
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-[1.02] duration-300"
                                >
                                    Fermer
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-white py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
                            PRENDRE UN
                        </h1>
                        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                             RENDEZ-VOUS
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Nom */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <div className="relative">
                                    <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        id="nom"
                                        value={data.nom}
                                        onChange={(e) =>
                                            setData("nom", e.target.value)
                                        }
                                        placeholder="Nom *"
                                        className="w-full pl-8 pb-3 border-b-2 border-gray-300 focus:border-emerald-500 outline-none transition-colors duration-300 text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>
                                {errors.nom && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.nom}
                                    </p>
                                )}
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <div className="relative">
                                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="Adresse Email *"
                                        className="w-full pl-8 pb-3 border-b-2 border-gray-300 focus:border-emerald-500 outline-none transition-colors duration-300 text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </motion.div>

                            {/* Téléphone */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <div className="relative">
                                    <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        id="telephone"
                                        value={data.telephone}
                                        onChange={(e) =>
                                            setData("telephone", e.target.value)
                                        }
                                        placeholder="Numéro de téléphone *"
                                        className="w-full pl-8 pb-3 border-b-2 border-gray-300 focus:border-emerald-500 outline-none transition-colors duration-300 text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>
                                {errors.telephone && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.telephone}
                                    </p>
                                )}
                            </motion.div>

                            {/* Fonction */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <div className="relative">
                                    <Briefcase className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        id="fonction"
                                        value={data.fonction}
                                        onChange={(e) =>
                                            setData("fonction", e.target.value)
                                        }
                                        placeholder="Votre fonction"
                                        className="w-full pl-8 pb-3 border-b-2 border-gray-300 focus:border-emerald-500 outline-none transition-colors duration-300 text-gray-700 placeholder-gray-400"
                                    />
                                </div>
                                {errors.fonction && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.fonction}
                                    </p>
                                )}
                            </motion.div>

                            {/* Date */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <div className="relative">
                                    <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="date"
                                        id="date_rendez_vous"
                                        value={data.date_rendez_vous}
                                        onChange={(e) =>
                                            setData(
                                                 "date_rendez_vous",
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Date du rendez-vous"
                                        className="w-full pl-8 pb-3 border-b-2 border-gray-300 focus:border-emerald-500 outline-none transition-colors duration-300 text-gray-700 placeholder-gray-400"
                                    />
                                </div>
                                {errors.date_rendez_vous && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.date_rendez_vous}
                                    </p>
                                )}
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <div className="relative">
                                    <MessageSquare className="absolute left-0 top-4 w-5 h-5 text-gray-400" />
                                    <textarea
                                        id="message"
                                        value={data.message}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                        placeholder="Message"
                                        rows="5"
                                        className="w-full pl-8 pb-3 border-b-2 border-gray-300 focus:border-emerald-500 outline-none transition-colors duration-300 text-gray-700 placeholder-gray-400 resize-none"
                                    ></textarea>
                                </div>
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">
                                         {errors.message}
                                    </p>
                                )}
                            </motion.div>

                            {/* WhatsApp Link */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                                className="flex justify-end"
                            >
                                <a
                                    href="https://wa.me/2250000000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    <span className="font-semibold">
                                        WhatsApp
                                    </span>
                                </a>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-6 h-6" />
                                    <span>ENVOYEZ</span>
                                </button>
                            </motion.div>
                        </form>

                        {/* Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="text-center mt-8 text-gray-500 text-sm"
                        >
                            esst.ci
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

RendezVous.layout = (page) => <MainLayout>{page}</MainLayout>;
