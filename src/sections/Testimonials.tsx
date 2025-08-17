import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  User,
  Building,
  Calendar,
  CheckCircle,
  ArrowRight,
  Heart,
  ThumbsUp,
  Award,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

export interface TestimonialsProps {
  className?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  companyLogo?: string;
  rating: number;
  content: string;
  projectType: string;
  projectDuration: string;
  projectValue: string;
  testimonialDate: string;
  isFeatured: boolean;
  tags: string[];
  avatar?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

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

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Testimonial data
  const testimonials: Testimonial[] = [
    {
      id: "smart-home-iot",
      clientName: "Sarah Johnson",
      clientRole: "CTO",
      company: "TechHome Solutions",
      companyLogo: "🏠",
      rating: 5,
      content:
        "CodeFusion transformed our IoT platform from concept to reality in just 6 months. Their expertise in embedded systems and real-time data processing exceeded our expectations. The smart home automation system now serves 10,000+ devices with 99.9% uptime.",
      projectType: "IoT Platform Development",
      projectDuration: "6 months",
      projectValue: "$250,000",
      testimonialDate: "March 2024",
      isFeatured: true,
      tags: ["IoT", "Embedded Systems", "Real-time Processing"],
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "industrial-automation",
      clientName: "Michael Chen",
      clientRole: "Engineering Director",
      company: "ManufactureTech Industries",
      companyLogo: "🏭",
      rating: 5,
      content:
        "Working with CodeFusion on our industrial automation controller was a game-changer. Their deep understanding of ARM architecture and real-time operating systems resulted in a 30% performance improvement and deployment across 50+ factories.",
      projectType: "Industrial Automation System",
      projectDuration: "8 months",
      projectValue: "$180,000",
      testimonialDate: "February 2024",
      isFeatured: true,
      tags: ["Embedded Systems", "ARM", "Real-time OS"],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "fitness-tracker-app",
      clientName: "Emily Rodriguez",
      clientRole: "Product Manager",
      company: "FitLife Technologies",
      companyLogo: "💪",
      rating: 5,
      content:
        "CodeFusion delivered an exceptional fitness tracking app that exceeded our user engagement goals. The cross-platform performance and real-time synchronization features helped us achieve a 4.8/5 rating with 100,000+ active users.",
      projectType: "Mobile Application",
      projectDuration: "5 months",
      projectValue: "$120,000",
      testimonialDate: "January 2024",
      isFeatured: false,
      tags: ["React Native", "Cross-platform", "Real-time Sync"],
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "ecommerce-platform",
      clientName: "David Thompson",
      clientRole: "CEO",
      company: "ShopSmart Retail",
      companyLogo: "🛒",
      rating: 5,
      content:
        "CodeFusion built us a scalable e-commerce platform that handles our growing business needs perfectly. The performance optimization and secure payment integration resulted in a 35% increase in mobile conversions and 99.9% payment success rate.",
      projectType: "E-commerce Platform",
      projectDuration: "4 months",
      projectValue: "$95,000",
      testimonialDate: "December 2023",
      isFeatured: false,
      tags: ["React", "Next.js", "E-commerce", "Payment Integration"],
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "predictive-analytics",
      clientName: "Dr. Lisa Wang",
      clientRole: "Chief Data Scientist",
      company: "DataInsight Corp",
      companyLogo: "📊",
      rating: 5,
      content:
        "CodeFusion's machine learning expertise helped us build a predictive analytics engine that delivers 95% accuracy. The distributed processing capabilities and real-time prediction pipeline have provided a 200% ROI increase for our clients.",
      projectType: "Machine Learning Platform",
      projectDuration: "7 months",
      projectValue: "$300,000",
      testimonialDate: "November 2023",
      isFeatured: true,
      tags: ["Machine Learning", "Python", "TensorFlow", "Real-time Analytics"],
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "healthcare-app",
      clientName: "Dr. Robert Kim",
      clientRole: "Medical Director",
      company: "HealthTech Innovations",
      companyLogo: "🏥",
      rating: 5,
      content:
        "CodeFusion developed a secure healthcare application that meets all HIPAA compliance requirements. Their attention to security and user experience resulted in a platform that healthcare professionals love to use daily.",
      projectType: "Healthcare Application",
      projectDuration: "9 months",
      projectValue: "$220,000",
      testimonialDate: "October 2023",
      isFeatured: false,
      tags: ["Healthcare", "HIPAA Compliance", "Security", "User Experience"],
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Navigation functions
  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Pagination dots
  const renderPaginationDots = () => {
    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary-500 scale-125"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  // Rating stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          {rating}/5
        </span>
      </div>
    );
  };

  return (
    <section
      id="testimonials"
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
            title="What Our Clients Say"
            subtitle="Real feedback from businesses we've helped transform with technology"
            variant="default"
            align="center"
            showDivider
          />
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative max-w-6xl mx-auto mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    goToNext();
                  } else if (swipe > swipeConfidenceThreshold) {
                    goToPrevious();
                  }
                }}
                className="absolute w-full"
              >
                <Card variant="elevated" className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left Column - Client Info */}
                    <div className="text-center lg:text-left">
                      {/* Avatar */}
                      <div className="relative mb-6">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].clientName}
                          className="w-24 h-24 rounded-full mx-auto lg:mx-0 object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                        />
                        {testimonials[currentIndex].isFeatured && (
                          <div className="absolute -top-2 -right-2 bg-primary-500 text-white p-2 rounded-full">
                            <Award className="w-4 h-4" />
                          </div>
                        )}
                      </div>

                      {/* Client Details */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {testimonials[currentIndex].clientName}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-1">
                          {testimonials[currentIndex].clientRole}
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                          <span className="text-2xl">
                            {testimonials[currentIndex].companyLogo}
                          </span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {testimonials[currentIndex].company}
                          </span>
                        </div>
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>

                      {/* Project Details */}
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{testimonials[currentIndex].projectType}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>
                            {testimonials[currentIndex].projectDuration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Award className="w-4 h-4 text-purple-500" />
                          <span>{testimonials[currentIndex].projectValue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Center Column - Testimonial Content */}
                    <div className="lg:col-span-2">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="w-12 h-12 text-primary-500 opacity-20" />
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                        "{testimonials[currentIndex].content}"
                      </blockquote>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {testimonials[currentIndex].tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-400 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Date */}
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[currentIndex].testimonialDate}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={toggleAutoPlay}
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 shadow-lg"
              aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
            >
              {isAutoPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          {renderPaginationDots()}
        </motion.div>

        {/* Testimonial Statistics */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Heart, value: "98%", label: "Client Satisfaction" },
              { icon: ThumbsUp, value: "150+", label: "Projects Completed" },
              { icon: User, value: "50+", label: "Happy Clients" },
              { icon: Award, value: "5.0", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/20 mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
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
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar
              results with cutting-edge technology solutions.
            </p>
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
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
