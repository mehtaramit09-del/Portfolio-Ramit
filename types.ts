// Import React to resolve namespace issues for React.ReactNode in TypeScript
import React from 'react';

export interface ProjectItem {
  name: string;
  url: string;
  description?: string;
}

export interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  gradient: string;
  icon: React.ReactNode;
  link?: string;
  onCardClick?: () => void;
  onCompanyClick?: () => void;
}

export interface CaseStudyProps {
  id: string;
  header: string;
  period?: string;
  link?: string;
  challenge: string;
  approach?: string;
  execution?: string;
  results: string[];
  learnings?: string;
  tools?: string[];
  projects?: (string | ProjectItem)[];
  impact?: string;
  skills?: string[];
  gradient: string;
  icon: React.ReactNode;
}