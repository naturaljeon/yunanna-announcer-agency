import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface PortfolioItem {
  id: number;
  title: string;
  date: string;
  location: string;
  mc: string;
  image: string;
}

export interface McProfile {
  id: number;
  name: string;
  title?: string;
  description?: string;
  career?: string[];
  image: string;
}