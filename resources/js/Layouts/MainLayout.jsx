import { Link } from "@inertiajs/react";
import { Heart } from "lucide-react";
import Header from "../Components/Header";

export default function MainLayout({ children }) {
    const navigation = [
        { name: "Accueil", href: "/" },
        { name: "À Propos", href: "/a-propos" },
        // { name: "Rendez-vous", href: "/rendez-vous" },
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                                    <img
                                        src="/images/logo.png"
                                        alt="Biomédical Logo"
                                        className="h-20 w-auto object-contain"
                                    />
                                </div>
                                <span className="text-xl font-bold">
                                    Biomédical
                                </span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Votre partenaire santé en entreprise. Visites
                                médicales professionnelles directement sur votre
                                lieu de travail.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">
                                Liens Rapides
                            </h3>
                            <ul className="space-y-2">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Contact</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>Email: contact@biomedical.ci</li>
                                <li>Tél: +225 XX XX XX XX XX</li>
                                <li>Abidjan, Côte d'Ivoire</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>
                            © {new Date().getFullYear()} Biomédical. Tous droits
                            réservés.
                        </p>
                        <p className="mt-2 text-sm">esst.ci</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
