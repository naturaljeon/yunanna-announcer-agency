import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { McProfile } from '../../types';
import { MC_DATA } from '../../constants';

const MC_PROFILES: McProfile[] = (() => {
    // Vite 환경에서 동기 실행: 위 함수는 동적으로 import를 시도하므로 동기 버전으로 감쌀 수 없음
    // 따라서 try/catch로 동기 경로만 사용
    try {
        // meta.json과 이미지가 없을 때를 대비하여 즉시 시도
        const metas = import.meta.glob('/content/mcs/*/meta.json', { eager: true, import: 'default' }) as Record<string, any>;
        const imageMaps = import.meta.glob('/content/mcs/*/*.{png,jpg,jpeg,webp,avif,gif}', { eager: true, as: 'url' }) as Record<string, string>;
        const byFolder: Record<string, { meta?: any; image?: string }> = {};
        Object.entries(metas).forEach(([path, data]) => {
            const folder = path.split('/').slice(0, -1).join('/');
            byFolder[folder] = { ...(byFolder[folder] || {}), meta: data };
        });
        Object.entries(imageMaps).forEach(([path, url]) => {
            const folder = path.split('/').slice(0, -1).join('/');
            const file = path.split('/').pop() || '';
            const isPreferred = /^photo\./i.test(file);
            if (!byFolder[folder]) byFolder[folder] = {} as any;
            if (isPreferred || !byFolder[folder].image) {
                byFolder[folder].image = url as unknown as string;
            }
        });
        const profiles: McProfile[] = Object.values(byFolder).map(({ meta, image }, idx) => ({
            id: meta?.id ?? idx + 1,
            name: meta?.name ?? '이름 미정',
            title: meta?.title,
            description: meta?.description,
            career: meta?.career,
            image: image ?? meta?.image ?? ''
        })).filter(p => p.image);
        if (profiles.length > 0) return profiles;
    } catch {}
    return [] as McProfile[];
})();

// MC Section Component
const McSection: React.FC<{ refProp: React.RefObject<HTMLElement | null> }> = ({ refProp }) => (
    <SectionWrapper id="mcs" refProp={refProp} className="bg-transparent">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our MCs</h2>
        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#D4A574] scrollbar-track-white/10">
            <div className="flex gap-8 min-w-max px-4">
                {(MC_PROFILES.length ? MC_PROFILES : MC_DATA).map((mc: McProfile) => (
                    <div key={mc.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden text-center p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/15 w-80 flex-shrink-0">
                        <img src={mc.image} alt={mc.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#D4A574]" />
                        <h3 className="text-xl font-bold mt-4 text-white">{mc.name}</h3>
                        {mc.title && <p className="text-md text-[#D4A574] font-medium">{mc.title}</p>}
                        {mc.description && <p className="mt-2 text-sm text-gray-200">{mc.description}</p>}
                        <ul className="mt-4 text-left text-sm text-gray-200 space-y-1 list-disc list-inside">
                            {mc.career?.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </SectionWrapper>
);

export default McSection;