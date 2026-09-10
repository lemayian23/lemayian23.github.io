export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Languages' | 'AI/ML' | 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Other';
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  stack?: string[];
}
