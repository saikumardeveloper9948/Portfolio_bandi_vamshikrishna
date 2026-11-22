export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  phone: string;
  summary: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
  type: 'btech' | 'diploma' | 'ssc';
}

export interface Internship {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'cad' | 'cae' | 'programming' | 'manufacturing' | 'tools';
  proficiency: number;
  icon?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  score?: string;
  link?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  level: 'college' | 'national' | 'international';
}

export interface Workshop {
  name: string;
  issuer: string;
  date: string;
}

export interface Theme {
  mode: 'light' | 'dark';
  toggle: () => void;
}