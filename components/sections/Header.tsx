import React, { useState } from 'react';
import { MENU_ITEMS } from '../../constants';

// Header Component
const Header: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0A1931]/90 backdrop-blur-sm shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4 max-w-7xl">
                <a href="#" className="text-2xl font-bold text-white tracking-widest" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    YUNANNA
                </a>
                 <nav className="hidden md:flex items-center space-x-6">
                    {MENU_ITEMS.map(item => (
                        <button key={item.id} onClick={() => onNavigate(item.id)} className="text-white font-medium text-sm tracking-wider hover:text-[#D4A574] transition-colors duration-300 px-2 py-1">
                            {item.name}
                        </button>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
             {isMenuOpen && (
                <nav className="md:hidden bg-[#0A1931] py-4">
                    {MENU_ITEMS.map(item => (
                        <button key={item.id} onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }} className="block text-white text-center w-full py-2 hover:bg-[#D4A574] transition-colors duration-300">
                            {item.name}
                        </button>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;