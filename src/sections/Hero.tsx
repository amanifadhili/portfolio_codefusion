import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import useBackgroundImages from "../hooks/useBackgroundImages";

// Import all background images
import img1 from "../assets/background/img1.jpg";
import img2 from "../assets/background/img2.jpg";
import img3 from "../assets/background/img3.jpg";
import img4 from "../assets/background/img4.jpg";
import img5 from "../assets/background/img5.jpg";
import img6 from "../assets/background/img6.jpg";
import img7 from "../assets/background/img7.jpg";
import img8 from "../assets/background/img8.jpg";
import img9 from "../assets/background/img9.jpg";
import img10 from "../assets/background/img10.jpg";
import img11 from "../assets/background/img11.jpg";
import img12 from "../assets/background/img12.jpg";
import img13 from "../assets/background/img13.jpg";
import img14 from "../assets/background/img14.jpg";
import img15 from "../assets/background/img15.jpg";

export interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  // Background images array
  const backgroundImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];

  // Use custom hook for background image management
  const {
    currentIndex: currentBgIndex,
    currentImage,
    isLoading,
    totalImages,
    goToNext: handleNextBackground,
    goToPrevious: handlePrevBackground,
    goToIndex: setCurrentBgIndex,
  } = useBackgroundImages(backgroundImages, 5000, true);

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

  // Background image transition variants
  const backgroundImageVariants = {
    enter: {
      opacity: 1,
      scale: 1.05,
      transition: {
        duration: 1.0,
        ease: "easeInOut" as const,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 1.0,
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
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentBgIndex}
            className="absolute inset-0 w-full h-full"
            variants={backgroundImageVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <img
              src={currentImage}
              alt={`Background ${currentBgIndex + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle overlay for content visibility */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      {/* Main Content */}
      <Container className="relative z-10 text-center">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            variants={itemVariants}
          >
            <span className="text-white">Code</span>
            <span className="text-white">Fusion</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md"
            variants={itemVariants}
          >
            Empowering businesses with cutting-edge{" "}
            <span className="text-yellow-300 font-semibold">IoT</span>,{" "}
            <span className="text-blue-300 font-semibold">
              Embedded Systems
            </span>
            , <span className="text-green-300 font-semibold">Mobile Apps</span>,
            and{" "}
            <span className="text-purple-300 font-semibold">
              Machine Learning
            </span>{" "}
            solutions
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
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

          {/* Trust Indicators */}
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-white text-sm mb-4 drop-shadow-sm">
              Trusted by leading companies worldwide
            </p>
            <div className="flex items-center justify-center space-x-8">
              {/* Placeholder company logos - these would be replaced with actual logos */}
              {["TechCorp", "InnovateLab", "FutureSystems", "DigitalFlow"].map(
                (company, index) => (
                  <motion.div
                    key={company}
                    className="text-white font-medium text-lg drop-shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
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
        <div className="flex flex-col items-center text-white hover:text-white transition-colors duration-200 drop-shadow-md">
          <span className="text-sm mb-2 drop-shadow-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6 drop-shadow-sm" />
        </div>
      </motion.div>

      {/* Background Navigation Controls */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handlePrevBackground}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
          aria-label="Previous background"
        >
          <ChevronDown className="w-5 h-5 rotate-90" />
        </button>
        <button
          onClick={handleNextBackground}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
          aria-label="Next background"
        >
          <ChevronDown className="w-5 h-5 -rotate-90" />
        </button>
      </div>

      {/* Background Image Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        {Array.from({ length: totalImages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBgIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentBgIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to background ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
