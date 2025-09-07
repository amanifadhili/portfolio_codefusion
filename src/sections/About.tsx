import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

// Import background image
import img3 from "../assets/background/img3.jpg";

export interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = "" }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
  };

  // Company values data
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver breakthrough solutions.",
      color: "text-primary-600 dark:text-primary-400",
      bgColor: "bg-primary-50 dark:bg-primary-900/20",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build solutions that align with your business goals.",
      color: "text-secondary-600 dark:text-secondary-400",
      bgColor: "bg-secondary-50 dark:bg-secondary-900/20",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description:
        "Complex challenges inspire us. We find elegant solutions where others see obstacles.",
      color: "text-accent-600 dark:text-accent-400",
      bgColor: "bg-accent-50 dark:bg-accent-900/20",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Every project undergoes rigorous testing to ensure reliability and performance.",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "We maintain rapid development cycles without compromising on quality or security.",
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description:
        "We stay ahead of industry trends and continuously enhance our skills and processes.",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  // Key achievements data
  const achievements = [
    { number: "150+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Shield },
  ];

  // Handle learn more button click
  const handleLearnMore = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="about"
      className={`relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden ${className}`}
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${img3})`,
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />
        {/* Overlay for content readability */}
        <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle
            title="About CodeFusion"
            subtitle="Empowering businesses through innovative technology solutions"
            variant="default"
            align="center"
            showDivider
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column - Company Story */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Founded in 2019, CodeFusion emerged from a simple yet powerful
                vision: to bridge the gap between cutting-edge technology and
                practical business solutions. What started as a small team of
                passionate developers has grown into a full-service technology
                company.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We believe that technology should be an enabler, not a barrier.
                Our team combines deep technical expertise with business acumen
                to deliver solutions that drive real results.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                To democratize advanced technology by making IoT, embedded
                systems, mobile applications, and machine learning accessible to
                businesses of all sizes. We transform complex technical
                challenges into elegant, scalable solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading technology partner for businesses seeking
                innovative, reliable, and scalable solutions that drive digital
                transformation and competitive advantage.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleLearnMore}
                className="group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Key Achievements */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Why Choose CodeFusion?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <achievement.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-100 dark:border-primary-800">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Industry Expertise
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                We specialize in emerging technologies including IoT, embedded
                systems, mobile applications, web development, and machine
                learning. Our team stays current with industry trends to deliver
                cutting-edge solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Company Values Section */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do, from project planning to
              final delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  variant="elevated"
                  className="h-full p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${value.bgColor} mb-4`}
                    >
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Culture Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Team Culture
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              We foster a culture of continuous learning, collaboration, and
              innovation. Our team members are passionate about technology and
              committed to delivering exceptional results for our clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "Collaboration",
                  description:
                    "We believe the best solutions come from diverse perspectives and teamwork.",
                },
                {
                  title: "Innovation",
                  description:
                    "We encourage creative thinking and experimentation to solve complex problems.",
                },
                {
                  title: "Excellence",
                  description:
                    "We maintain high standards in everything we do, from code quality to client communication.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
