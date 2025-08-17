// CodeFusion Portfolio - Constants and Configuration
// This file contains all static data, company information, and configuration constants

// Company Information
export const COMPANY_INFO = {
  name: "CodeFusion",
  tagline: "Where Innovation Meets Technology",
  description: "Leading technology company specializing in IoT, embedded systems, mobile applications, and machine learning solutions.",
  founded: "2020",
  industry: "Technology & Software Development",
  size: "10-50 employees",
  location: "San Francisco, CA",
  website: "https://codefusion.com",
  email: "hello@codefusion.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech Valley, CA 94000",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
  timezone: "PST/PDT",
} as const;

// Contact Information
export const CONTACT_INFO = {
  primary: {
    email: "hello@codefusion.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech Valley, CA 94000",
  },
  support: {
    email: "support@codefusion.com",
    phone: "+1 (555) 123-4568",
    responseTime: "Within 24 hours",
  },
  sales: {
    email: "sales@codefusion.com",
    phone: "+1 (555) 123-4569",
    responseTime: "Within 4 hours",
  },
  careers: {
    email: "careers@codefusion.com",
    website: "https://careers.codefusion.com",
  },
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: {
    url: "https://linkedin.com/company/codefusion",
    handle: "@codefusion",
    followers: "2,500+",
  },
  twitter: {
    url: "https://twitter.com/codefusion",
    handle: "@codefusion",
    followers: "5,000+",
  },
  github: {
    url: "https://github.com/codefusion",
    handle: "codefusion",
    repositories: "50+",
  },
  youtube: {
    url: "https://youtube.com/@codefusion",
    handle: "@codefusion",
    subscribers: "1,000+",
  },
  instagram: {
    url: "https://instagram.com/codefusion",
    handle: "@codefusion",
    followers: "3,000+",
  },
} as const;

// Navigation Menu Items
export const NAVIGATION_MENU = [
  { id: "home", label: "Home", href: "#home", icon: "home" },
  { id: "about", label: "About", href: "#about", icon: "info" },
  { id: "services", label: "Services", href: "#services", icon: "settings" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio", icon: "briefcase" },
  { id: "tech-stack", label: "Tech Stack", href: "#tech-stack", icon: "code" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials", icon: "star" },
  { id: "team", label: "Team", href: "#team", icon: "users" },
  { id: "contact", label: "Contact", href: "#contact", icon: "mail" },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "Press Kit", href: "/press-kit" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "IoT Development", href: "#services" },
    { label: "Embedded Systems", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Machine Learning", href: "#services" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "White Papers", href: "/white-papers" },
    { label: "Webinars", href: "/webinars" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Contact Support", href: "#contact" },
    { label: "Status Page", href: "/status" },
    { label: "Community", href: "/community" },
    { label: "Training", href: "/training" },
  ],
} as const;

// Company Statistics
export const COMPANY_STATS = {
  founded: 2020,
  teamSize: 25,
  projectsDelivered: 150,
  clientsServed: 75,
  satisfactionRate: 98,
  averageResponseTime: "4 hours",
  uptime: "99.9%",
  countriesServed: 15,
} as const;

// Technology Categories
export const TECH_CATEGORIES = {
  frontend: {
    name: "Frontend",
    description: "Modern web technologies and frameworks",
    icon: "globe",
    color: "blue",
  },
  backend: {
    name: "Backend",
    description: "Server-side technologies and databases",
    icon: "database",
    color: "green",
  },
  mobile: {
    name: "Mobile",
    description: "Cross-platform mobile development",
    icon: "smartphone",
    color: "purple",
  },
  iot: {
    name: "IoT & Embedded",
    description: "Internet of Things and embedded systems",
    icon: "wifi",
    color: "orange",
  },
  ml: {
    name: "Machine Learning",
    description: "AI and machine learning solutions",
    icon: "brain",
    color: "indigo",
  },
  cloud: {
    name: "Cloud & DevOps",
    description: "Cloud infrastructure and deployment",
    icon: "cloud",
    color: "cyan",
  },
} as const;

// Project Categories
export const PROJECT_CATEGORIES = {
  iot: {
    name: "IoT Solutions",
    description: "Smart devices and connected systems",
    icon: "wifi",
    color: "blue",
    count: 25,
  },
  embedded: {
    name: "Embedded Systems",
    description: "Custom hardware and firmware",
    icon: "cpu",
    color: "purple",
    count: 20,
  },
  mobile: {
    name: "Mobile Applications",
    description: "iOS and Android apps",
    icon: "smartphone",
    color: "green",
    count: 30,
  },
  web: {
    name: "Web Development",
    description: "Websites and web applications",
    icon: "globe",
    color: "orange",
    count: 35,
  },
  ml: {
    name: "Machine Learning",
    description: "AI and predictive analytics",
    icon: "brain",
    color: "indigo",
    count: 15,
  },
} as const;

// Service Categories
export const SERVICE_CATEGORIES = {
  development: {
    name: "Custom Development",
    description: "Tailored software solutions",
    icon: "code",
    color: "blue",
  },
  consulting: {
    name: "Technology Consulting",
    description: "Strategic technology guidance",
    icon: "lightbulb",
    color: "yellow",
  },
  integration: {
    name: "System Integration",
    description: "Seamless technology integration",
    icon: "link",
    color: "green",
  },
  support: {
    name: "Ongoing Support",
    description: "24/7 technical support",
    icon: "headphones",
    color: "purple",
  },
} as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
  },
  easings: {
    easeOut: "easeOut",
    easeIn: "easeIn",
    easeInOut: "easeInOut",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
  delays: {
    none: 0,
    small: 0.1,
    medium: 0.2,
    large: 0.5,
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Color Palette
export const COLORS = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  secondary: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  },
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
} as const;

// Form Configuration
export const FORM_CONFIG = {
  validation: {
    name: {
      minLength: 2,
      maxLength: 50,
      required: true,
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    message: {
      minLength: 10,
      maxLength: 1000,
      required: true,
    },
    phone: {
      pattern: /^[\+]?[1-9][\d]{0,15}$/,
      required: false,
    },
  },
  submission: {
    timeout: 30000, // 30 seconds
    retryAttempts: 3,
    successMessageDuration: 5000, // 5 seconds
  },
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  title: "CodeFusion - Where Innovation Meets Technology",
  description: "Leading technology company specializing in IoT, embedded systems, mobile applications, and machine learning solutions. Transform your ideas into reality with our expert team.",
  keywords: [
    "IoT Development",
    "Embedded Systems",
    "Mobile Applications",
    "Web Development",
    "Machine Learning",
    "Technology Consulting",
    "Custom Software",
    "System Integration",
    "CodeFusion",
    "Technology Solutions",
  ],
  author: "CodeFusion",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
} as const;

// Performance Configuration
export const PERFORMANCE_CONFIG = {
  lazyLoading: {
    threshold: 0.1,
    rootMargin: "50px",
  },
  animations: {
    reduceMotion: true,
    prefersReducedMotion: true,
  },
  images: {
    quality: 80,
    format: "webp",
    sizes: [320, 640, 768, 1024, 1280, 1536],
  },
} as const;

// Export all constants
export default {
  COMPANY_INFO,
  CONTACT_INFO,
  SOCIAL_LINKS,
  NAVIGATION_MENU,
  FOOTER_LINKS,
  COMPANY_STATS,
  TECH_CATEGORIES,
  PROJECT_CATEGORIES,
  SERVICE_CATEGORIES,
  ANIMATION_CONFIG,
  BREAKPOINTS,
  COLORS,
  FORM_CONFIG,
  SEO_CONFIG,
  PERFORMANCE_CONFIG,
};
