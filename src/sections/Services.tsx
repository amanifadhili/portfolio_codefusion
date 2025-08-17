import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Smartphone,
  Globe,
  Brain,
  Wifi,
  // Database,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className = "" }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  // Services data
  const services = [
    {
      id: "iot",
      icon: Wifi,
      title: "IoT Development",
      subtitle: "Connected Solutions",
      description:
        "Build smart, connected devices and IoT ecosystems that collect, analyze, and act on data in real-time.",
      features: [
        "Sensor Integration",
        "Real-time Data Processing",
        "Cloud Connectivity",
        "Device Management",
        "Security & Encryption",
        "Scalable Architecture",
      ],
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      gradient: "from-blue-500 to-cyan-500",
      category: "Hardware & Connectivity",
      complexity: "Advanced",
      deliveryTime: "8-12 weeks",
      price: "From $15,000",
    },
    {
      id: "embedded",
      icon: Cpu,
      title: "Embedded Systems",
      subtitle: "Hardware & Software Integration",
      description:
        "Design and develop embedded systems for industrial automation, consumer electronics, and specialized applications.",
      features: [
        "Microcontroller Programming",
        "Real-time Operating Systems",
        "Hardware-Software Co-design",
        "Power Management",
        "Thermal Design",
        "Compliance Testing",
      ],
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      gradient: "from-purple-500 to-pink-500",
      category: "Hardware & Software",
      complexity: "Expert",
      deliveryTime: "12-20 weeks",
      price: "From $25,000",
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobile Applications",
      subtitle: "iOS & Android Development",
      description:
        "Create native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "Native iOS & Android",
        "Cross-platform Development",
        "UI/UX Design",
        "Performance Optimization",
        "App Store Deployment",
        "Maintenance & Updates",
      ],
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      gradient: "from-green-500 to-emerald-500",
      category: "Software Development",
      complexity: "Intermediate",
      deliveryTime: "6-10 weeks",
      price: "From $12,000",
    },
    {
      id: "web",
      icon: Globe,
      title: "Web Development",
      subtitle: "Modern Web Applications",
      description:
        "Build responsive, scalable web applications using cutting-edge technologies and best practices for optimal performance.",
      features: [
        "Frontend & Backend Development",
        "Responsive Design",
        "API Integration",
        "Database Design",
        "Performance Optimization",
        "Security Implementation",
      ],
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      gradient: "from-orange-500 to-red-500",
      category: "Software Development",
      complexity: "Intermediate",
      deliveryTime: "4-8 weeks",
      price: "From $8,000",
    },
    {
      id: "ml",
      icon: Brain,
      title: "Machine Learning",
      subtitle: "AI-Powered Solutions",
      description:
        "Develop intelligent systems that learn from data to automate processes, predict outcomes, and provide insights.",
      features: [
        "Data Analysis & Preprocessing",
        "Model Development",
        "Training & Validation",
        "Deployment & Monitoring",
        "Performance Optimization",
        "Continuous Learning",
      ],
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      gradient: "from-indigo-500 to-purple-500",
      category: "Artificial Intelligence",
      complexity: "Advanced",
      deliveryTime: "10-16 weeks",
      price: "From $20,000",
    },
    {
      id: "consulting",
      icon: TrendingUp,
      title: "Technology Consulting",
      subtitle: "Strategic Guidance",
      description:
        "Expert consultation to help you choose the right technologies, plan implementations, and optimize your tech stack.",
      features: [
        "Technology Assessment",
        "Architecture Planning",
        "Implementation Strategy",
        "Performance Audits",
        "Security Reviews",
        "Team Training",
      ],
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
      gradient: "from-teal-500 to-blue-500",
      category: "Strategic Services",
      complexity: "All Levels",
      deliveryTime: "1-4 weeks",
      price: "From $150/hour",
    },
  ];

  // Handle service card hover
  const handleServiceHover = (serviceId: string | null) => {
    setHoveredService(serviceId);
  };

  // Handle learn more button click
  const handleLearnMore = (_serviceId: string) => {
    const portfolioSection = document.querySelector("#portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle get quote button click
  const handleGetQuote = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="services"
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
            title="Our Services"
            subtitle="Comprehensive technology solutions tailored to your business needs"
            variant="default"
            align="center"
            showDivider
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              onHoverStart={() => handleServiceHover(service.id)}
              onHoverEnd={() => handleServiceHover(null)}
              className="h-full"
            >
              <Card
                variant="elevated"
                className={`h-full p-6 border-2 transition-all duration-300 ${
                  hoveredService === service.id
                    ? `${service.borderColor} shadow-2xl`
                    : "border-transparent hover:shadow-lg"
                }`}
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                      service.bgColor
                    } mb-4 transition-transform duration-300 ${
                      hoveredService === service.id ? "scale-110" : ""
                    }`}
                  >
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {service.subtitle}
                  </p>
                </div>

                {/* Service Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features
                      .slice(0, 4)
                      .map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="text-xs text-gray-600 dark:text-gray-400 flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: featureIndex * 0.1,
                          }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                  </ul>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400 mb-1">
                      Category
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {service.category}
                    </div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-gray-500 dark:text-gray-400 mb-1">
                      Complexity
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {service.complexity}
                    </div>
                  </div>
                </div>

                {/* Service Metrics */}
                <div className="flex items-center justify-between mb-6 text-xs">
                  <div className="text-center">
                    <div className="text-gray-500 dark:text-gray-400 mb-1">
                      Delivery
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {service.deliveryTime}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 dark:text-gray-400 mb-1">
                      Starting At
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleLearnMore(service.id)}
                    className="w-full group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Our Services */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Services?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to
              deliver solutions that drive real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                description:
                  "Rigorous testing and quality control processes ensure reliable, bug-free solutions.",
                color: "text-green-600 dark:text-green-400",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description:
                  "Efficient development processes and agile methodologies for timely project completion.",
                color: "text-yellow-600 dark:text-yellow-400",
              },
              {
                icon: Star,
                title: "Expert Team",
                description:
                  "Experienced developers and engineers with deep knowledge in their respective domains.",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                icon: TrendingUp,
                title: "Scalable Solutions",
                description:
                  "Architecture designed to grow with your business needs and handle increased load.",
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
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and explore how our
              services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleGetQuote}
                className="group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleLearnMore("portfolio")}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
