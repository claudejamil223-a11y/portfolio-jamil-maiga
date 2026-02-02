
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  demoUrl?: string; // Optionnel : pour intégrer une démo live
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Design' | 'Other';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'Professional' | 'Association';
  location: string;
  logoUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link: string;
  imageUrl?: string;
}

export interface EducationItem {
  school: string;
  period: string;
  degree: string;
  details: string;
  courses: string[];
}