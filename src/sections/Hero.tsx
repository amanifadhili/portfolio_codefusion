import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  // Handle smooth scroll to next section
  const handleScrollDown = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle CTA button click
  const handleGetStarted = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle watch video (placeholder)
  const handleWatchVideo = () => {
    // This would typically open a video modal or navigate to video section
    console.log("Watch video clicked");
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900" />

      {/* Animated Background Shapes */}
      <motion.div
        className="absolute inset-0 opacity-10"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-accent-500 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* Main Content */}
      <Container className="relative z-10 text-center">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
            variants={itemVariants}
          >
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse" />
            Innovating the Future of Technology
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-primary-100 to-secondary-100 bg-clip-text text-transparent">
              Code
            </span>
            <span className="bg-gradient-to-r from-secondary-100 via-accent-100 to-white bg-clip-text text-transparent">
              Fusion
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Empowering businesses with cutting-edge{" "}
            <span className="text-primary-300 font-semibold">IoT</span>,{" "}
            <span className="text-secondary-300 font-semibold">
              Embedded Systems
            </span>
            , <span className="text-accent-300 font-semibold">Mobile Apps</span>
            , and{" "}
            <span className="text-primary-300 font-semibold">
              Machine Learning
            </span>{" "}
            solutions
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We transform ideas into reality, building innovative solutions that
            drive business growth and technological advancement. From concept to
            deployment, we're your trusted partner in digital transformation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            <Button
              variant="primary"
              size="xl"
              onClick={handleGetStarted}
              className="group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={handleWatchVideo}
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
            variants={itemVariants}
          >
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-white/50 text-sm mb-4">
              Trusted by leading companies worldwide
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-40">
              {/* Placeholder company logos - these would be replaced with actual logos */}
              {["TechCorp", "InnovateLab", "FutureSystems", "DigitalFlow"].map(
                (company, index) => (
                  <motion.div
                    key={company}
                    className="text-white/60 font-medium text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.6, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    {company}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        variants={scrollIndicatorVariants}
        animate="animate"
        onClick={handleScrollDown}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-200">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-10 w-16 h-16 bg-secondary-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default Hero;
