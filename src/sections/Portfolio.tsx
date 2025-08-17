import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  X,
  ArrowRight,
  Calendar,
  Users,
  Clock,
  Tag,
  Globe,
  Smartphone,
  Cpu,
  Brain,
  Code,
  Filter,
  Wifi,
  TrendingUp,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export interface PortfolioProps {
  className?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  client: string;
  duration: string;
  teamSize: number;
  status: "completed" | "in-progress" | "planned";
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  featured: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ className = "" }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const,
      },
    },
  };

  // Portfolio data
  const projects: Project[] = [
    {
      id: "smart-home-iot",
      title: "Smart Home IoT Platform",
      subtitle: "Connected Home Automation System",
      description:
        "A comprehensive IoT platform for smart home automation with real-time monitoring and control.",
      longDescription:
        "This project involved developing a complete smart home ecosystem that integrates various IoT devices including smart lights, thermostats, security cameras, and environmental sensors.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "iot",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "MQTT",
        "TensorFlow",
        "AWS IoT",
      ],
      client: "TechHome Solutions",
      duration: "6 months",
      teamSize: 8,
      status: "completed",
      liveUrl: "https://smarthome.demo.com",
      githubUrl: "https://github.com/codefusion/smart-home-iot",
      challenges: [
        "Integrating multiple IoT protocols",
        "Real-time data processing",
        "Security compliance",
      ],
      solutions: [
        "MQTT and CoAP protocols",
        "Real-time data pipeline",
        "End-to-end encryption",
      ],
      results: [
        "40% energy reduction",
        "99.9% uptime",
        "10,000+ devices supported",
      ],
      featured: true,
    },
    {
      id: "industrial-automation",
      title: "Industrial Automation Controller",
      subtitle: "Embedded System for Manufacturing",
      description:
        "Custom embedded controller for industrial automation with real-time processing capabilities.",
      longDescription:
        "Developed a specialized embedded system controller for industrial manufacturing processes with real-time operating system integration.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      category: "embedded",
      technologies: ["C/C++", "FreeRTOS", "ARM Cortex-M7", "CAN Bus", "Modbus"],
      client: "ManufactureTech Industries",
      duration: "8 months",
      teamSize: 6,
      status: "completed",
      githubUrl: "https://github.com/codefusion/industrial-controller",
      challenges: [
        "Real-time performance",
        "Industrial reliability",
        "Safety certification",
      ],
      solutions: [
        "Optimized ARM code",
        "Redundant systems",
        "IEC 61508 compliance",
      ],
      results: [
        "99.99% uptime",
        "30% faster processing",
        "50+ factories deployed",
      ],
      featured: true,
    },
    {
      id: "fitness-tracker-app",
      title: "Advanced Fitness Tracker",
      subtitle: "Mobile App with Health Analytics",
      description:
        "Cross-platform mobile application for fitness tracking with advanced health metrics and social features.",
      longDescription:
        "A comprehensive fitness tracking application that monitors workouts, nutrition, sleep, and overall health metrics.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      category: "mobile",
      technologies: [
        "React Native",
        "TypeScript",
        "Redux",
        "Node.js",
        "PostgreSQL",
      ],
      client: "FitLife Technologies",
      duration: "5 months",
      teamSize: 7,
      status: "completed",
      liveUrl: "https://fittracker.app",
      githubUrl: "https://github.com/codefusion/fitness-tracker",
      challenges: [
        "Cross-platform performance",
        "Real-time sync",
        "Wearable integration",
      ],
      solutions: ["Native modules", "WebSocket sync", "Unified API"],
      results: ["4.8/5 rating", "100,000+ users", "40% engagement increase"],
      featured: false,
    },
    {
      id: "ecommerce-platform",
      title: "Modern E-commerce Platform",
      subtitle: "Full-Stack Web Application",
      description:
        "Scalable e-commerce platform with advanced features, payment integration, and admin dashboard.",
      longDescription:
        "A complete e-commerce solution built with modern web technologies including product management and analytics.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "web",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Stripe",
      ],
      client: "ShopSmart Retail",
      duration: "4 months",
      teamSize: 5,
      status: "completed",
      liveUrl: "https://shopdemo.codefusion.com",
      githubUrl: "https://github.com/codefusion/ecommerce-platform",
      challenges: [
        "High performance",
        "Secure payments",
        "Real-time inventory",
      ],
      solutions: [
        "Server-side rendering",
        "Stripe integration",
        "WebSocket updates",
      ],
      results: [
        "<2s load time",
        "99.9% payment success",
        "35% mobile conversion",
      ],
      featured: false,
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics Engine",
      subtitle: "Machine Learning for Business Intelligence",
      description:
        "AI-powered analytics platform that predicts business trends and provides actionable insights.",
      longDescription:
        "A sophisticated machine learning platform that analyzes business data to predict future trends and patterns.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "ml",
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "FastAPI",
      ],
      client: "DataInsight Corp",
      duration: "7 months",
      teamSize: 9,
      status: "completed",
      githubUrl: "https://github.com/codefusion/predictive-analytics",
      challenges: [
        "Large-scale processing",
        "Model accuracy",
        "Real-time predictions",
      ],
      solutions: [
        "Distributed processing",
        "Cross-validation",
        "Streaming pipeline",
      ],
      results: ["95% accuracy", "70% faster processing", "200% ROI increase"],
      featured: true,
    },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Projects", icon: Filter, count: projects.length },
    {
      id: "iot",
      name: "IoT Solutions",
      icon: Wifi,
      count: projects.filter((p) => p.category === "iot").length,
    },
    {
      id: "embedded",
      name: "Embedded Systems",
      icon: Cpu,
      count: projects.filter((p) => p.category === "embedded").length,
    },
    {
      id: "mobile",
      name: "Mobile Apps",
      icon: Smartphone,
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "web",
      name: "Web Development",
      icon: Globe,
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "ml",
      name: "Machine Learning",
      icon: Brain,
      count: projects.filter((p) => p.category === "ml").length,
    },
  ];

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Handle project selection
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Handle external link
  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="portfolio"
      className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}
    >
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle
            title="Our Portfolio"
            subtitle="Showcasing innovative solutions across diverse technology domains"
            variant="default"
            align="center"
            showDivider
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="ml-1 text-xs opacity-75">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                layout
                className="h-full"
              >
                <Card
                  variant="elevated"
                  className="h-full overflow-hidden cursor-pointer group"
                  onClick={() => handleProjectSelect(project)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          project.category === "iot"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                            : project.category === "embedded"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
                            : project.category === "mobile"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : project.category === "web"
                            ? "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
                            : "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400"
                        }`}
                      >
                        {
                          categories.find((c) => c.id === project.category)
                            ?.name
                        }
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.teamSize} people
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === "completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : project.status === "in-progress"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                        }`}
                      >
                        {project.status.replace("-", " ")}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            handleExternalLink(project.liveUrl!);
                          }}
                          className="flex-1"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            handleExternalLink(project.githubUrl!);
                          }}
                          className="flex-1"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-100 dark:border-primary-800">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with
              cutting-edge technology and innovative solutions.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleModalClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
                <div className="flex items-start gap-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {selectedProject.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {selectedProject.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {selectedProject.teamSize} people
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedProject.status.replace("-", " ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Challenges */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Tag className="w-5 h-5 mr-2 text-red-500" />
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-green-500" />
                      Solutions
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                      Results
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {selectedProject.liveUrl && (
                    <Button
                      variant="primary"
                      onClick={() =>
                        handleExternalLink(selectedProject.liveUrl!)
                      }
                      className="group"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      View Live Demo
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outline"
                      onClick={() =>
                        handleExternalLink(selectedProject.githubUrl!)
                      }
                      className="group"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
