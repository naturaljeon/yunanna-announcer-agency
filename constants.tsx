import React from 'react';
import { Service, PortfolioItem, McProfile } from './types';

export const MENU_ITEMS = [
    { name: '서비스', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Our MCs', id: 'mcs' },
    { name: '문의/견적', id: 'contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'mc',
    title: '행사 MC',
    description: '공식행사, 시상식, 포럼 등 다양한 행사에 맞는 전문 MC가 품격을 더합니다.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
  },
  {
    id: 'lecture',
    title: '강의',
    description: '기업 및 공공기관을 위한 스피치, 프레젠테이션 스킬 향상 교육을 제공합니다.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  {
    id: 'docent',
    title: '도슨트/통역',
    description: '전시 및 국제 행사를 위한 전문 도슨트와 순차/동시 통역사를 지원합니다.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9.5a18.03 18.03 0 01-5.917 1.708M9 9a3 3 0 100-6 3 3 0 000 6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    id: 'staffing',
    title: '행사 운영인력 대행',
    description: '원활한 행사 진행을 위한 의전, 등록, 안내 등 전문 스태프를 파견합니다.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" /></svg>
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 1,
    title: '유관순상 시상식',
    date: '2024년 3월 26일',
    location: '독립기념관 겨레의탑',
    mc: '윤희정 MC',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    title: '국제 스타트업 포럼',
    date: '2024년 2월 12일',
    location: '코엑스 그랜드볼룸',
    mc: '윤희정 MC',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 6,
    title: '스마트시티 서밋',
    date: '2024년 1월 20일',
    location: '세종 컨벤션센터',
    mc: 'KTV 앵커 신경은',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 7,
    title: 'AI 윤리 국제 컨퍼런스',
    date: '2023년 12월 15일',
    location: '서울시청 다목적홀',
    mc: '윤희정 MC',
    image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 8,
    title: '문화유산 보존 세미나',
    date: '2023년 11월 02일',
    location: '국립중앙박물관',
    mc: '장새론 MC',
    image: 'https://images.unsplash.com/photo-1509098681029-b45e9c845022?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 9,
    title: '국제 의료기기 박람회',
    date: '2023년 10월 10일',
    location: '킨텍스',
    mc: '윤희정 MC',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 10,
    title: '게임 인더스트리 어워즈',
    date: '2023년 09월 28일',
    location: '부산 벡스코',
    mc: 'KTV 앵커 신경은',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 11,
    title: '친환경 에너지 심포지엄',
    date: '2023년 08월 17일',
    location: '대전 컨벤션센터',
    mc: '윤희정 MC',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 12,
    title: '블록체인 테크 페스티벌',
    date: '2023년 07월 09일',
    location: '판교 스타트업 캠퍼스',
    mc: '장새론 MC',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 2,
    title: '지역활성화 투자펀드 출범식',
    date: '2024년 3월 26일',
    location: '천안시청 봉서홀',
    mc: 'KTV 앵커 신경은',
    image: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: '2023 아시아휠체어컬링선수권대회',
    date: '2023년 11월 23일',
    location: '강릉컬링센터',
    mc: '윤희정 MC',
    image: 'https://images.unsplash.com/photo-1594993491493-633d436c7341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
    {
    id: 4,
    title: '대한민국 예술문화인대상',
    date: '2023년 5월 20일',
    location: '국회 의원회관',
    mc: '장새론 MC',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const MC_DATA: McProfile[] = [
  {
    id: 1,
    name: '윤희정',
    title: '대표 MC',
    career: ['KTV 국민방송 앵커', '정부 및 지자체 공식행사 전문', '국제 포럼 및 시상식 다수 진행'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: '장나연',
    title: '프리랜서 MC',
    career: ['TBN 한국교통방송 MC', '경제 TV 채널 앵커', '기업 IR 및 신제품 발표회 전문'],
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: '오혜선',
    title: '프리랜서 MC',
    career: ['케이블 방송 뉴스 앵커', '문화/예술 분야 행사 전문 MC', '북콘서트 및 팬미팅 진행'],
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: '김가영',
    title: '프리랜서 MC',
    career: ['지역 민영방송 MC', '정부 정책 브리핑 및 토론회 사회', '공식 만찬 및 기념식 진행'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
   {
    id: 5,
    name: '장새론',
    title: '프리랜서 MC',
    career: ['국회방송 MC', '시사 프로그램 진행', '국제 컨퍼런스 영어 MC'],
    image: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    name: '추보라',
    title: '프리랜서 MC',
    career: ['라이브커머스 쇼호스트', '온라인 론칭쇼 및 웨비나 전문', '뷰티/패션 행사 MC'],
    image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];