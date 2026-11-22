import type { Certification, Achievement, Workshop } from '@/types';

export const certifications: Certification[] = [
  {
    name: 'Laser Based Manufacturing',
    issuer: 'NPTEL (IIT Madras)',
    year: '2024',
    score: '81/100',
    link: 'https://nptel.ac.in',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Best Draftman Award',
    description: 'Awarded for excellence in engineering drawing and CAD modeling at college level competition',
    year: '2022',
    level: 'college',
  },
];

export const workshops: Workshop[] = [
  {
    name: 'Universal Human Values',
    issuer: 'AICTE',
    date: 'January 2025',
  },
];