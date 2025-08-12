import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { Service } from '../../types';
import { SERVICES_DATA } from '../../constants';

// Services Section Component
const ServicesSection: React.FC<{ refProp: React.RefObject<HTMLElement | null> }> = ({ refProp }) => (
    <SectionWrapper id="services" refProp={refProp} className="bg-transparent">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
        
        {/* 강의 및 행사 운영인력 대행 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">강의 (Lectures & Training)</h3>
                <p className="text-gray-200 leading-relaxed">
                    기업 및 공공기관 임직원의 비즈니스 커뮤니케이션 역량 강화를 위한 맞춤형 스피치 교육을 제공합니다. 
                    또한, MC 지망생을 대상으로 실전 중심의 MC 양성 과정을 운영하여 차세대 전문 방송인 배출에 기여합니다.
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">행사 운영인력 대행 (Event Staffing)</h3>
                <p className="text-gray-200 leading-relaxed">
                    성공적인 행사를 위한 보이지 않는 손, YUNANNA가 함께합니다. 의전, 등록, 안내, 현장 통제 등 
                    각 분야에서 전문 교육을 이수한 운영 스태프를 파견하여 행사의 모든 과정이 원활하게 진행되도록 지원합니다.
                </p>
            </div>
        </div>

        {/* 서비스 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service: Service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center transform hover:-translate-y-2 hover:bg-white/15">
                    <div className="text-[#D4A574] mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
            ))}
        </div>
    </SectionWrapper>
);

export default ServicesSection;