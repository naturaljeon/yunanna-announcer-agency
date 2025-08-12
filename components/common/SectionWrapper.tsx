import React, { CSSProperties } from 'react';

// Define props for SectionWrapper to include style and fix positioning context for children
interface SectionWrapperProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    refProp?: React.RefObject<HTMLElement | null>;
    style?: CSSProperties;
}

// Section Wrapper Component for consistent styling
const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '', refProp, style }) => (
    <section id={id} ref={refProp} className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 ${className}`} style={style}>
        <div className="container mx-auto max-w-7xl relative">
            {children}
        </div>
    </section>
);

export default SectionWrapper;