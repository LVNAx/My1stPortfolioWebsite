import React from 'react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            active 
                ? "bg-white/95 backdrop-blur-md shadow-lg" 
                : "bg-white/90 backdrop-blur-sm"
        }`}>
            <div className="navbar py-4 px-6 lg:px-8 flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <div className="logo">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Portfolio</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="menu hidden md:flex items-center gap-8 lg:gap-10 text-gray-700">
                    <li>
                        <a href="#beranda" className="text-base lg:text-lg font-medium hover:text-violet-600 transition-colors">
                            Beranda
                        </a>
                    </li>
                    <li>
                        <a href="#proyek" className="text-base lg:text-lg font-medium hover:text-violet-600 transition-colors">
                            Proyek
                        </a>
                    </li>
                    <li>
                        <a href="#pendidikan" className="text-base lg:text-lg font-medium hover:text-violet-600 transition-colors">
                            Pendidikan
                        </a>
                    </li>
                    <li>
                        <a href="#kontak" className="text-base lg:text-lg font-medium hover:text-violet-600 transition-colors">
                            Kontak
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden flex flex-col gap-1 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                        mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}></span>
                    <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                        mobileMenuOpen ? 'opacity-0' : ''
                    }`}></span>
                    <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                        mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 transition-all duration-300 ${
                mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <ul className="py-4 px-6 space-y-4">
                    <li>
                        <a 
                            href="#beranda" 
                            className="block text-lg font-medium text-gray-700 hover:text-violet-600 transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Beranda
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#proyek" 
                            className="block text-lg font-medium text-gray-700 hover:text-violet-600 transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Proyek
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#pendidikan" 
                            className="block text-lg font-medium text-gray-700 hover:text-violet-600 transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pendidikan
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#kontak" 
                            className="block text-lg font-medium text-gray-700 hover:text-violet-600 transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Kontak
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;