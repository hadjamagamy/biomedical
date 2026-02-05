import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: "Accueil", href: "/" },
        { name: "À Propos", href: "/a-propos" },
    ];

    const isActive = (path) => {
        if (path === "/") return url === "/";
        return url.startsWith(path);
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                            <img
                                src="/images/logo.png"
                                alt="Biomédical Logo"
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                            Biomédical
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`font-medium transition-colors duration-300 relative group ${
                                    isActive(item.href)
                                        ? "text-emerald-600"
                                        : "text-gray-700 hover:text-emerald-600"
                                }`}
                            >
                                {item.name}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
                                        isActive(item.href)
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                ></span>
                            </Link>
                        ))}

                        {/* <Link
                            href="/rendez-vous"
                            className={`font-medium transition-colors duration-300 relative group ${
                                isActive("/rendez-vous")
                                    ? "text-emerald-600"
                                    : "text-gray-700 hover:text-emerald-600"
                            }`}
                        >
                            Rendez-vous
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
                                    isActive("/rendez-vous")
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                }`}
                            ></span>
                        </Link> */}

                        <Link
                            href="/rendez-vous"
                            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Prendre RDV
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-8 h-8" />
                        ) : (
                            <Menu className="w-8 h-8" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 border-t border-gray-100 space-y-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                                            isActive(item.href)
                                                ? "bg-emerald-50 text-emerald-600 font-semibold"
                                                : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                                        }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/rendez-vous"
                                    className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                                        isActive("/rendez-vous")
                                            ? "bg-emerald-50 text-emerald-600 font-semibold"
                                            : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Rendez-vous
                                </Link>
                                <div className="pt-4 px-4">
                                    <Link
                                        href="/rendez-vous"
                                        className="block w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold text-center shadow-md hover:shadow-lg transition-all duration-300"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Prendre RDV
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
