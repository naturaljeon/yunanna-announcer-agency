import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { PortfolioItem } from '../../types';
import { PORTFOLIO_DATA } from '../../constants';

// Portfolio Section Component  
const PortfolioSection: React.FC<{ refProp?: React.RefObject<HTMLElement | null> }> = ({ refProp }) => (
    <SectionWrapper id="portfolio" refProp={refProp} className="bg-transparent">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Portfolio</h2>
        <div className="max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#D4A574] scrollbar-track-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PORTFOLIO_DATA.map((item: PortfolioItem) => (
                    <div key={item.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 hover:bg-white/15">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-white truncate">{item.title}</h3>
                            <p className="text-sm text-gray-300 mt-1">{item.date}</p>
                            <p className="text-sm text-gray-300">{item.location}</p>
                            <p className="text-sm font-semibold text-[#D4A574] mt-3">MC: {item.mc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </SectionWrapper>
);

export default PortfolioSection;