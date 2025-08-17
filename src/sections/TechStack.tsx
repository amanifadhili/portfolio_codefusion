import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Cpu,
  Brain,
  Wifi,
  Globe,
  Zap,
  Shield,
  Layers,
  Rocket,
  TrendingUp,
  Star,
  CheckCircle,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

export interface TechStackProps {
  className?: string;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  proficiency: "expert" | "advanced" | "intermediate" | "beginner";
  yearsOfExperience: number;
  projectsUsed: number;
  isFavorite: boolean;
  color: string;
  bgColor: string;
}

const TechStack: React.FC<TechStackProps> = ({ className = "" }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

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
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  // Technology data
  const technologies: Technology[] = [
    // Frontend Technologies
    {
      id: "react",
      name: "React",
      category: "frontend",
      icon: "⚛️",
      description: "Modern JavaScript library for building user interfaces",
      proficiency: "expert",
      yearsOfExperience: 5,
      projectsUsed: 25,
      isFavorite: true,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "frontend",
      icon: "▲",
      description: "Full-stack React framework with server-side rendering",
      proficiency: "advanced",
      yearsOfExperience: 3,
      projectsUsed: 15,
      isFavorite: true,
      color: "text-gray-800 dark:text-gray-200",
      bgColor: "bg-gray-50 dark:bg-gray-800",
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      icon: "TS",
      description: "Typed superset of JavaScript for better development",
      proficiency: "expert",
      yearsOfExperience: 4,
      projectsUsed: 30,
      isFavorite: true,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      icon: "🎨",
      description: "Utility-first CSS framework for rapid UI development",
      proficiency: "advanced",
      yearsOfExperience: 3,
      projectsUsed: 20,
      isFavorite: false,
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    },

    // Backend Technologies
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      icon: "🟢",
      description: "JavaScript runtime for server-side development",
      proficiency: "expert",
      yearsOfExperience: 5,
      projectsUsed: 28,
      isFavorite: true,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      id: "python",
      name: "Python",
      category: "backend",
      icon: "🐍",
      description: "High-level programming language for backend and ML",
      proficiency: "advanced",
      yearsOfExperience: 4,
      projectsUsed: 18,
      isFavorite: false,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "backend",
      icon: "🐘",
      description: "Advanced open-source relational database",
      proficiency: "advanced",
      yearsOfExperience: 4,
      projectsUsed: 22,
      isFavorite: false,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "backend",
      icon: "🍃",
      description: "NoSQL document database for modern applications",
      proficiency: "intermediate",
      yearsOfExperience: 3,
      projectsUsed: 12,
      isFavorite: false,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },

    // Mobile Technologies
    {
      id: "react-native",
      name: "React Native",
      category: "mobile",
      icon: "📱",
      description: "Cross-platform mobile app development framework",
      proficiency: "advanced",
      yearsOfExperience: 3,
      projectsUsed: 16,
      isFavorite: true,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "flutter",
      name: "Flutter",
      category: "mobile",
      icon: "🦋",
      description: "Google's UI toolkit for cross-platform apps",
      proficiency: "intermediate",
      yearsOfExperience: 2,
      projectsUsed: 8,
      isFavorite: false,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "swift",
      name: "Swift",
      category: "mobile",
      icon: "🍎",
      description: "Apple's programming language for iOS development",
      proficiency: "intermediate",
      yearsOfExperience: 2,
      projectsUsed: 6,
      isFavorite: false,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },

    // IoT & Embedded
    {
      id: "arduino",
      name: "Arduino",
      category: "iot",
      icon: "🔌",
      description: "Open-source electronics platform for IoT projects",
      proficiency: "advanced",
      yearsOfExperience: 4,
      projectsUsed: 14,
      isFavorite: false,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "raspberry-pi",
      name: "Raspberry Pi",
      category: "iot",
      icon: "🍓",
      description: "Single-board computer for IoT and embedded systems",
      proficiency: "advanced",
      yearsOfExperience: 3,
      projectsUsed: 12,
      isFavorite: false,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      id: "mqtt",
      name: "MQTT",
      category: "iot",
      icon: "📡",
      description: "Lightweight messaging protocol for IoT devices",
      proficiency: "intermediate",
      yearsOfExperience: 2,
      projectsUsed: 8,
      isFavorite: false,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },

    // Machine Learning
    {
      id: "tensorflow",
      name: "TensorFlow",
      category: "ml",
      icon: "🧠",
      description: "Open-source ML framework by Google",
      proficiency: "advanced",
      yearsOfExperience: 3,
      projectsUsed: 10,
      isFavorite: true,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      id: "pytorch",
      name: "PyTorch",
      category: "ml",
      icon: "🔥",
      description: "Deep learning framework with dynamic computation",
      proficiency: "intermediate",
      yearsOfExperience: 2,
      projectsUsed: 6,
      isFavorite: false,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      id: "scikit-learn",
      name: "Scikit-learn",
      category: "ml",
      icon: "📊",
      description: "Machine learning library for Python",
      proficiency: "advanced",
      yearsOfExperience: 3,
      projectsUsed: 12,
      isFavorite: false,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },

    // Cloud & DevOps
    {
      id: "aws",
      name: "AWS",
      category: "cloud",
      icon: "☁️",
      description: "Amazon Web Services cloud computing platform",
      proficiency: "advanced",
      yearsOfExperience: 3,
      projectsUsed: 18,
      isFavorite: true,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      id: "docker",
      name: "Docker",
      category: "cloud",
      icon: "🐳",
      description: "Containerization platform for application deployment",
      proficiency: "intermediate",
      yearsOfExperience: 2,
      projectsUsed: 10,
      isFavorite: false,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "kubernetes",
      name: "Kubernetes",
      category: "cloud",
      icon: "⚓",
      description: "Container orchestration platform for microservices",
      proficiency: "intermediate",
      yearsOfExperience: 2,
      projectsUsed: 6,
      isFavorite: false,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
  ];

  // Categories for filtering
  const categories = [
    {
      id: "all",
      name: "All Technologies",
      icon: Code,
      count: technologies.length,
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: Globe,
      count: technologies.filter((t) => t.category === "frontend").length,
    },
    {
      id: "backend",
      name: "Backend",
      icon: Database,
      count: technologies.filter((t) => t.category === "backend").length,
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: Smartphone,
      count: technologies.filter((t) => t.category === "mobile").length,
    },
    {
      id: "iot",
      name: "IoT & Embedded",
      icon: Wifi,
      count: technologies.filter((t) => t.category === "iot").length,
    },
    {
      id: "ml",
      name: "Machine Learning",
      icon: Brain,
      count: technologies.filter((t) => t.category === "ml").length,
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: Cloud,
      count: technologies.filter((t) => t.category === "cloud").length,
    },
  ];

  // Filtered technologies
  const filteredTechnologies =
    selectedCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Handle technology hover
  const handleTechHover = (techId: string | null) => {
    setHoveredTech(techId);
  };

  // Get proficiency color
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "expert":
        return "text-green-600 dark:text-green-400";
      case "advanced":
        return "text-blue-600 dark:text-blue-400";
      case "intermediate":
        return "text-yellow-600 dark:text-yellow-400";
      case "beginner":
        return "text-gray-600 dark:text-gray-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  // Get proficiency badge color
  const getProficiencyBadgeColor = (proficiency: string) => {
    switch (proficiency) {
      case "expert":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "beginner":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <section
      id="tech-stack"
      className={`py-20 bg-white dark:bg-gray-800 ${className}`}
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
            title="Our Tech Stack"
            subtitle="Cutting-edge technologies we master to deliver exceptional solutions"
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
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
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

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredTechnologies.map((tech) => (
            <motion.div
              key={tech.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              onHoverStart={() => handleTechHover(tech.id)}
              onHoverEnd={() => handleTechHover(null)}
            >
              <Card
                variant="elevated"
                className={`h-full p-6 text-center transition-all duration-300 ${
                  hoveredTech === tech.id
                    ? "ring-2 ring-primary-500 shadow-2xl"
                    : ""
                }`}
              >
                {/* Technology Icon */}
                <div className="mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                      tech.bgColor
                    } mb-3 transition-transform duration-300 ${
                      hoveredTech === tech.id ? "scale-110" : ""
                    }`}
                  >
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  {tech.isFavorite && (
                    <div className="flex justify-center mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                  )}
                </div>

                {/* Technology Name */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>

                {/* Technology Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {tech.description}
                </p>

                {/* Proficiency Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getProficiencyBadgeColor(
                      tech.proficiency
                    )}`}
                  >
                    {tech.proficiency.charAt(0).toUpperCase() +
                      tech.proficiency.slice(1)}
                  </span>
                </div>

                {/* Technology Stats */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400 mb-1">
                      Experience
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {tech.yearsOfExperience} years
                    </div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400 mb-1">
                      Projects
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {tech.projectsUsed}+
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Highlights */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Our Tech Stack Matters
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We carefully select and master technologies that enable us to
              deliver scalable, secure, and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Performance",
                description:
                  "Optimized technologies for lightning-fast applications",
                color: "text-yellow-600 dark:text-yellow-400",
              },
              {
                icon: Shield,
                title: "Security",
                description:
                  "Enterprise-grade security with every technology choice",
                color: "text-green-600 dark:text-green-400",
              },
              {
                icon: Layers,
                title: "Scalability",
                description: "Technologies that grow with your business needs",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                icon: Rocket,
                title: "Innovation",
                description: "Cutting-edge tools for breakthrough solutions",
                color: "text-purple-600 dark:text-purple-400",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 mb-4`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to Leverage Our Expertise?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you choose the right
              technologies and build solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
              >
                <CheckCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Start Your Project
              </button>
              <button
                onClick={() => {
                  const portfolioSection = document.querySelector("#portfolio");
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View Our Work
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TechStack;
