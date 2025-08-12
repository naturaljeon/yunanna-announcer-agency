import React, { useRef } from 'react';
import ParticleSystem from './components/effects/ParticleSystem';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import McSection from './components/sections/McSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';


type SectionRefs = {
    [key: string]: React.RefObject<HTMLElement | null>;
};

const App: React.FC = () => {
    const sectionRefs: SectionRefs = {
        services: useRef<HTMLElement>(null),
        portfolio: useRef<HTMLElement>(null),
        mcs: useRef<HTMLElement>(null),
        contact: useRef<HTMLElement>(null),
    };

    const handleNavigate = (id: string) => {
        const ref = sectionRefs[id];
        if (ref && ref.current) {
            const yOffset = -70; // Offset for fixed header
            const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#0A1931] relative min-h-screen" style={{ 
            color: 'white',
            backgroundImage: "url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="absolute inset-0 bg-[#0A1931] bg-opacity-70"></div>
            <ParticleSystem />
            <div className="relative z-10">
                <Header onNavigate={handleNavigate} />
                <main>
                    <Hero />
                    <ServicesSection refProp={sectionRefs.services} />
                    <PortfolioSection refProp={sectionRefs.portfolio} />
                    <McSection refProp={sectionRefs.mcs} />
                    <ContactSection refProp={sectionRefs.contact} />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;