// CodeFusion Portfolio - Type Definitions
// This file contains all TypeScript interfaces and type definitions for the application

import { LucideIcon } from "lucide-react";

// ============================================================================
// CORE INTERFACES
// ============================================================================

/**
 * Base interface for all entities with common properties
 */
export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Base interface for all content with common content properties
 */
export interface BaseContent extends BaseEntity {
  title: string;
  description: string;
  isActive?: boolean;
  isFeatured?: boolean;
  tags?: string[];
  metadata?: Record<string, any>;
}

// ============================================================================
// SERVICE INTERFACES
// ============================================================================

/**
 * Service category types
 */
export type ServiceCategory = 
  | "iot" 
  | "embedded" 
  | "mobile" 
  | "web" 
  | "ml" 
  | "consulting";

/**
 * Service pricing structure
 */
export interface ServicePricing {
  starter: string;
  professional: string;
  enterprise: string | "Custom";
}

/**
 * Service interface representing a service offering
 */
export interface Service extends BaseContent {
  subtitle: string;
  icon: LucideIcon;
  category: ServiceCategory;
  features: string[];
  technologies: string[];
  pricing: ServicePricing;
  deliveryTime: string;
  teamSize: string;
  longDescription?: string;
  benefits?: string[];
  useCases?: string[];
  caseStudies?: string[];
  testimonials?: string[];
  faqs?: ServiceFAQ[];
}

/**
 * Service FAQ item
 */
export interface ServiceFAQ {
  question: string;
  answer: string;
  category?: string;
}

/**
 * Service category information
 */
export interface ServiceCategoryInfo {
  name: string;
  description: string;
  icon: string;
  color: string;
  count?: number;
}

// ============================================================================
// PORTFOLIO INTERFACES
// ============================================================================

/**
 * Project category types
 */
export type ProjectCategory = 
  | "iot" 
  | "embedded" 
  | "mobile" 
  | "web" 
  | "ml" 
  | "consulting" 
  | "all";

/**
 * Project status types
 */
export type ProjectStatus = 
  | "planning" 
  | "in-progress" 
  | "completed" 
  | "on-hold" 
  | "cancelled";

/**
 * Project interface representing a portfolio project
 */
export interface Project extends BaseContent {
  subtitle: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  client: string;
  duration: string;
  teamSize: number;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: string;
  featured: boolean;
  longDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  metrics?: ProjectMetrics;
  gallery?: string[];
  documents?: ProjectDocument[];
}

/**
 * Project metrics and KPIs
 */
export interface ProjectMetrics {
  users?: string;
  devices?: string;
  energySaved?: string;
  uptime?: string;
  factories?: string;
  performance?: string;
  safety?: string;
  rating?: string;
  engagement?: string;
  retention?: string;
  loadTime?: string;
  conversion?: string;
  seo?: string;
  accuracy?: string;
  roi?: string;
  adoption?: string;
}

/**
 * Project document
 */
export interface ProjectDocument {
  name: string;
  url: string;
  type: "pdf" | "doc" | "ppt" | "xls";
  size: string;
  description?: string;
}

/**
 * Project category information
 */
export interface ProjectCategoryInfo {
  name: string;
  description: string;
  icon: string;
  color: string;
  count: number;
}

// ============================================================================
// TECHNOLOGY INTERFACES
// ============================================================================

/**
 * Technology category types
 */
export type TechCategory = 
  | "frontend" 
  | "backend" 
  | "mobile" 
  | "iot" 
  | "ml" 
  | "cloud" 
  | "database" 
  | "devops";

/**
 * Proficiency level types
 */
export type ProficiencyLevel = 
  | "beginner" 
  | "intermediate" 
  | "advanced" 
  | "expert";

/**
 * Technology interface representing a technology in our stack
 */
export interface Technology extends BaseContent {
  category: TechCategory;
  icon: string;
  proficiency: ProficiencyLevel;
  yearsOfExperience: number;
  projectsUsed: number;
  bgColor: string;
  textColor: string;
  features?: string[];
  useCases?: string[];
  certifications?: string[];
  learningPath?: string[];
  alternatives?: string[];
  documentation?: string;
  community?: string;
}

/**
 * Technology category information
 */
export interface TechCategoryInfo {
  name: string;
  description: string;
  icon: string;
  color: string;
  technologies?: Technology[];
}

// ============================================================================
// TESTIMONIAL INTERFACES
// ============================================================================

/**
 * Testimonial interface representing client feedback
 */
export interface Testimonial extends BaseContent {
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  rating: number;
  content: string;
  projectType: string;
  projectDuration: string;
  projectValue?: string;
  isFeatured: boolean;
  tags: string[];
  avatar: string;
  date?: string;
  verified?: boolean;
  caseStudy?: string;
  videoUrl?: string;
  socialProof?: SocialProof;
}

/**
 * Social proof data
 */
export interface SocialProof {
  followers?: string;
  subscribers?: string;
  repositories?: string;
  companySize?: string;
  industry?: string;
}

// ============================================================================
// TEAM INTERFACES
// ============================================================================

/**
 * Team member role types
 */
export type TeamRole = 
  | "Co-Founder & CEO" 
  | "Co-Founder & CTO" 
  | "VP of Engineering" 
  | "Head of Design" 
  | "Lead Data Scientist" 
  | "Head of Operations" 
  | "Senior Developer" 
  | "Product Manager" 
  | "Designer" 
  | "Developer";

/**
 * Skill level types
 */
export type SkillLevel = 
  | "beginner" 
  | "intermediate" 
  | "advanced" 
  | "expert";

/**
 * Team member skill
 */
export interface TeamSkill {
  name: string;
  level: SkillLevel;
  icon: LucideIcon;
  yearsOfExperience?: number;
  certifications?: string[];
}

/**
 * Social media links
 */
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  email?: string;
  instagram?: string;
  youtube?: string;
  medium?: string;
  dribbble?: string;
  behance?: string;
}

/**
 * Team member interface representing a team member
 */
export interface TeamMember extends BaseContent {
  role: TeamRole;
  title: string;
  bio: string;
  expertise: string[];
  experience: string;
  education: string;
  location: string;
  avatar: string;
  isFounder: boolean;
  isFeatured: boolean;
  socialLinks: SocialLinks;
  skills: TeamSkill[];
  funFact: string;
  favoriteTech: string;
  joinedDate: string;
  achievements?: string[];
  publications?: string[];
  speaking?: string[];
  patents?: string[];
  awards?: string[];
  languages?: string[];
  interests?: string[];
  availability?: string;
  timezone?: string;
}

// ============================================================================
// CONTACT INTERFACES
// ============================================================================

/**
 * Contact form data interface
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
  preferredContact?: "email" | "phone";
  newsletter?: boolean;
  gdprConsent?: boolean;
}

/**
 * Contact form validation errors
 */
export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
  preferredContact?: string;
  newsletter?: string;
  gdprConsent?: string;
}

/**
 * Contact form submission status
 */
export type ContactFormStatus = 
  | "idle" 
  | "submitting" 
  | "success" 
  | "error";

/**
 * Contact form submission response
 */
export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: ContactFormErrors;
  submissionId?: string;
  estimatedResponseTime?: string;
}

// ============================================================================
// COMPANY INTERFACES
// ============================================================================

/**
 * Company information interface
 */
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  industry: string;
  size: string;
  location: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  businessHours: string;
  timezone: string;
  logo?: string;
  favicon?: string;
  mission?: string;
  vision?: string;
  values?: string[];
}

/**
 * Contact information structure
 */
export interface ContactInfo {
  primary: {
    email: string;
    phone: string;
    address: string;
  };
  support: {
    email: string;
    phone: string;
    responseTime: string;
  };
  sales: {
    email: string;
    phone: string;
    responseTime: string;
  };
  careers: {
    email: string;
    website: string;
  };
}

/**
 * Social media link structure
 */
export interface SocialLink {
  url: string;
  handle: string;
  followers?: string;
  subscribers?: string;
  repositories?: string;
}

/**
 * Social media links collection
 */
export interface SocialLinks {
  linkedin: SocialLink;
  twitter: SocialLink;
  github: SocialLink;
  youtube: SocialLink;
  instagram: SocialLink;
}

/**
 * Company statistics
 */
export interface CompanyStats {
  founded: number;
  teamSize: number;
  projectsDelivered: number;
  clientsServed: number;
  satisfactionRate: number;
  averageResponseTime: string;
  uptime: string;
  countriesServed: number;
}

// ============================================================================
// NAVIGATION INTERFACES
// ============================================================================

/**
 * Navigation menu item
 */
export interface NavigationMenuItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  children?: NavigationMenuItem[];
  isExternal?: boolean;
  isActive?: boolean;
}

/**
 * Footer link structure
 */
export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  description?: string;
}

/**
 * Footer links organized by category
 */
export interface FooterLinks {
  company: FooterLink[];
  services: FooterLink[];
  resources: FooterLink[];
  support: FooterLink[];
}

// ============================================================================
// ANIMATION INTERFACES
// ============================================================================

/**
 * Animation configuration
 */
export interface AnimationConfig {
  durations: {
    fast: number;
    normal: number;
    slow: number;
    slower: number;
  };
  easings: {
    easeOut: string;
    easeIn: string;
    easeInOut: string;
    bounce: string;
  };
  delays: {
    none: number;
    small: number;
    medium: number;
    large: number;
  };
}

/**
 * Breakpoint configuration
 */
export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

// ============================================================================
// COLOR INTERFACES
// ============================================================================

/**
 * Color palette structure
 */
export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

/**
 * Color system
 */
export interface Colors {
  primary: ColorPalette;
  secondary: ColorPalette;
  success: ColorPalette;
  warning: ColorPalette;
  error: ColorPalette;
}

// ============================================================================
// FORM INTERFACES
// ============================================================================

/**
 * Form validation rules
 */
export interface FormValidationRules {
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  pattern?: RegExp;
  custom?: (value: any) => string | undefined;
}

/**
 * Form validation configuration
 */
export interface FormValidationConfig {
  name: FormValidationRules;
  email: FormValidationRules;
  message: FormValidationRules;
  phone: FormValidationRules;
}

/**
 * Form submission configuration
 */
export interface FormSubmissionConfig {
  timeout: number;
  retryAttempts: number;
  successMessageDuration: number;
}

/**
 * Form configuration
 */
export interface FormConfig {
  validation: FormValidationConfig;
  submission: FormSubmissionConfig;
}

// ============================================================================
// SEO INTERFACES
// ============================================================================

/**
 * SEO configuration
 */
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  robots: string;
  viewport: string;
  charset: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

// ============================================================================
// PERFORMANCE INTERFACES
// ============================================================================

/**
 * Performance configuration
 */
export interface PerformanceConfig {
  lazyLoading: {
    threshold: number;
    rootMargin: string;
  };
  animations: {
    reduceMotion: boolean;
    prefersReducedMotion: boolean;
  };
  images: {
    quality: number;
    format: string;
    sizes: number[];
  };
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Utility type for making specific properties optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Utility type for making specific properties required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Utility type for picking specific properties
 */
export type PickBy<T, K extends keyof T> = Pick<T, K>;

/**
 * Utility type for omitting specific properties
 */
export type OmitBy<T, K extends keyof T> = Omit<T, K>;

/**
 * Utility type for component props
 */
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * Utility type for function parameters
 */
export type FunctionParameters<T> = T extends (...args: infer P) => any ? P : never;

/**
 * Utility type for function return type
 */
export type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// ============================================================================
// EXPORT ALL TYPES
// ============================================================================

export type {
  // Core interfaces
  BaseEntity,
  BaseContent,
  
  // Service interfaces
  ServiceCategory,
  ServicePricing,
  Service,
  ServiceFAQ,
  ServiceCategoryInfo,
  
  // Portfolio interfaces
  ProjectCategory,
  ProjectStatus,
  Project,
  ProjectMetrics,
  ProjectDocument,
  ProjectCategoryInfo,
  
  // Technology interfaces
  TechCategory,
  ProficiencyLevel,
  Technology,
  TechCategoryInfo,
  
  // Testimonial interfaces
  Testimonial,
  SocialProof,
  
  // Team interfaces
  TeamRole,
  SkillLevel,
  TeamSkill,
  SocialLinks,
  TeamMember,
  
  // Contact interfaces
  ContactFormData,
  ContactFormErrors,
  ContactFormStatus,
  ContactFormResponse,
  
  // Company interfaces
  CompanyInfo,
  ContactInfo,
  SocialLink,
  SocialLinks,
  CompanyStats,
  
  // Navigation interfaces
  NavigationMenuItem,
  FooterLink,
  FooterLinks,
  
  // Animation interfaces
  AnimationConfig,
  Breakpoints,
  
  // Color interfaces
  ColorPalette,
  Colors,
  
  // Form interfaces
  FormValidationRules,
  FormValidationConfig,
  FormSubmissionConfig,
  FormConfig,
  
  // SEO interfaces
  SEOConfig,
  
  // Performance interfaces
  PerformanceConfig,
  
  // Utility types
  PartialBy,
  RequiredBy,
  PickBy,
  OmitBy,
  ComponentProps,
  FunctionParameters,
  FunctionReturnType,
};

// Default export for convenience
export default {
  // Core interfaces
  BaseEntity,
  BaseContent,
  
  // Service interfaces
  ServiceCategory,
  ServicePricing,
  Service,
  ServiceFAQ,
  ServiceCategoryInfo,
  
  // Portfolio interfaces
  ProjectCategory,
  ProjectStatus,
  Project,
  ProjectMetrics,
  ProjectDocument,
  ProjectCategoryInfo,
  
  // Technology interfaces
  TechCategory,
  ProficiencyLevel,
  Technology,
  TechCategoryInfo,
  
  // Testimonial interfaces
  Testimonial,
  SocialProof,
  
  // Team interfaces
  TeamRole,
  SkillLevel,
  TeamSkill,
  SocialLinks,
  TeamMember,
  
  // Contact interfaces
  ContactFormData,
  ContactFormErrors,
  ContactFormStatus,
  ContactFormResponse,
  
  // Company interfaces
  CompanyInfo,
  ContactInfo,
  SocialLink,
  SocialLinks,
  CompanyStats,
  
  // Navigation interfaces
  NavigationMenuItem,
  FooterLink,
  FooterLinks,
  
  // Animation interfaces
  AnimationConfig,
  Breakpoints,
  
  // Color interfaces
  ColorPalette,
  Colors,
  
  // Form interfaces
  FormValidationRules,
  FormValidationConfig,
  FormSubmissionConfig,
  FormConfig,
  
  // SEO interfaces
  SEOConfig,
  
  // Performance interfaces
  PerformanceConfig,
  
  // Utility types
  PartialBy,
  RequiredBy,
  PickBy,
  OmitBy,
  ComponentProps,
  FunctionParameters,
  FunctionReturnType,
};
