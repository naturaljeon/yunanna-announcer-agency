import React, { useState, FormEvent } from 'react';
import SectionWrapper from '../common/SectionWrapper';

// Contact Section Component
const ContactSection: React.FC<{ refProp: React.RefObject<HTMLElement | null> }> = ({ refProp }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', date: '', budget: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log('Form Submitted:', formData);
        setSubmitted(true);
        // Reset form after a delay
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '', date: '', budget: '' });
        }, 3000);
    };

    return (
        <SectionWrapper id="contact" refProp={refProp} className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="absolute inset-0 bg-[#0A1931] bg-opacity-80"></div>
            <div className="relative max-w-2xl mx-auto text-center">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">문의 / 견적</h2>
                 {submitted ? (
                     <div className="bg-[#D4A574] text-white p-6 rounded-lg shadow-lg">
                         <h3 className="text-2xl font-bold">감사합니다!</h3>
                         <p className="mt-2">문의가 성공적으로 제출되었습니다. 빠른 시일 내에 연락드리겠습니다.</p>
                     </div>
                 ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="name" placeholder="성함 / 회사명" required value={formData.name} onChange={handleChange} className="w-full p-3 bg-white/20 text-white placeholder-gray-300 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all" />
                            <input type="email" name="email" placeholder="이메일 주소" required value={formData.email} onChange={handleChange} className="w-full p-3 bg-white/20 text-white placeholder-gray-300 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <input type="text" name="date" placeholder="행사 예정일" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} value={formData.date} onChange={handleChange} className="w-full p-3 bg-white/20 text-white placeholder-gray-300 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all" />
                             <input type="text" name="budget" placeholder="예산 범위" value={formData.budget} onChange={handleChange} className="w-full p-3 bg-white/20 text-white placeholder-gray-300 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all" />
                        </div>
                        <textarea name="message" placeholder="문의 내용 (행사 종류, 장소, 시간 등)" required rows={5} value={formData.message} onChange={handleChange} className="w-full p-3 bg-white/20 text-white placeholder-gray-300 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all"></textarea>
                        <button type="submit" className="w-full py-3 px-6 bg-[#D4A574] text-white font-bold rounded-md shadow-lg hover:bg-opacity-80 transition-colors duration-300">
                            제출하기
                        </button>
                    </form>
                 )}
            </div>
        </SectionWrapper>
    );
};

export default ContactSection;