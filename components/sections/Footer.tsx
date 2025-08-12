import React from 'react';

// Footer Component
const Footer: React.FC = () => (
    <footer className="bg-[#0A1931] text-white py-6">
        <div className="container mx-auto text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} YUNANNA MC Agency. All Rights Reserved.</p>
            <p className="mt-1">Professionalism, Elegance, and Trust.</p>
        </div>
    </footer>
);

export default Footer;