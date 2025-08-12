import React from 'react';

// 대표자 사진: `content/representative` 폴더의 첫 번째 이미지를 사용
const representativeImage = (() => {
    try {
        // Vite glob import로 정적 자산 로드
        const images = import.meta.glob('/content/representative/*.{png,jpg,jpeg,webp,avif,gif}', { eager: true, as: 'url' });
        const first = Object.values(images)[0] as unknown as string | undefined;
        return first ?? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3';
    } catch {
        return 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3';
    }
})();

// Hero Section Component
const Hero: React.FC = () => (
    <div className="relative h-[100svh] text-white">
        <div className="relative w-full h-full md:flex md:items-center md:h-full gap-[clamp(16px,4vw,64px)] px-6 md:px-12 lg:px-24">
            {/* Image: acts as full background on small, right 1/3 on md+ */}
            <div className="absolute inset-0 z-0 md:static md:z-0 md:w-1/3 md:flex-shrink-0 md:flex md:items-center md:justify-end">
                <div className="hidden md:block md:border-4 md:border-[#D4A574] md:rounded-lg md:shadow-2xl md:overflow-hidden">
                    <img src={representativeImage} alt="대표자 사진" className="w-full h-full md:max-h-[85vh] object-contain" />
                </div>
                <img src={representativeImage} alt="대표자 사진" className="md:hidden w-full h-full object-cover" />
            </div>

            {/* Text: overlays on top of image for small screens, sits left on md+ */}
            <div className="absolute inset-x-6 bottom-[clamp(24px,10vh,120px)] z-10 md:static md:z-auto md:flex-1 md:text-left">
                <h1 className="font-bold tracking-tight text-white text-[clamp(28px,6vw,56px)]">Event Personnel Agency</h1>
                <p className="mt-2 text-gray-200 text-[clamp(16px,3.2vw,24px)]">행사의 품격을 높여드립니다.</p>
            </div>
        </div>
    </div>
);

export default Hero;