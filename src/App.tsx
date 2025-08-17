import React, { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";

// Import all sections
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// Import utility functions
import { COMPANY_INFO } from "./utils/constants";

/**
 * Main App Component
 *
 * This component serves as the root of the CodeFusion portfolio application.
 * It integrates all sections, provides theme context, and implements smooth scrolling.
 */
function App() {
  /**
   * Initialize smooth scrolling behavior
   * This ensures that all internal navigation links scroll smoothly to their targets
   */
  useEffect(() => {
    // Check if smooth scrolling is supported
    if ("scrollBehavior" in document.documentElement.style) {
      // Smooth scrolling is natively supported
      return;
    }

    // Fallback for browsers that don't support smooth scrolling
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");

      // Only handle internal links
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }
    };

    // Add event listeners to all internal navigation links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup function
    return () => {
      internalLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  /**
   * Handle scroll to top functionality
   * This provides a smooth scroll to top when needed
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /**
   * Handle keyboard navigation
   * This ensures accessibility and keyboard navigation support
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close any open modals or menus
      if (e.key === "Escape") {
        // You can add modal close logic here if needed
        console.log("Escape key pressed");
      }

      // Home key to scroll to top
      if (e.key === "Home") {
        e.preventDefault();
        scrollToTop();
      }

      // End key to scroll to bottom
      if (e.key === "End") {
        e.preventDefault();
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  /**
   * Handle scroll-based effects
   * This can be used for scroll-triggered animations or effects
   */
  useEffect(() => {
    const handleScroll = () => {
      // You can add scroll-based effects here
      // For example, parallax effects, scroll-triggered animations, etc.
      const scrollY = window.scrollY;

      // Example: Add scroll-based classes to body
      if (scrollY > 100) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section - Full Screen */}
          <section id="home" className="relative">
            <Hero />
          </section>

          {/* About Section */}
          <section
            id="about"
            className="relative py-20 bg-gray-50 dark:bg-gray-800"
          >
            <About />
          </section>

          {/* Services Section */}
          <section
            id="services"
            className="relative py-20 bg-white dark:bg-gray-900"
          >
            <Services />
          </section>

          {/* Portfolio Section */}
          <section
            id="portfolio"
            className="relative py-20 bg-gray-50 dark:bg-gray-800"
          >
            <Portfolio />
          </section>

          {/* Tech Stack Section */}
          <section
            id="tech-stack"
            className="relative py-20 bg-white dark:bg-gray-900"
          >
            <TechStack />
          </section>

          {/* Testimonials Section */}
          <section
            id="testimonials"
            className="relative py-20 bg-gray-50 dark:bg-gray-800"
          >
            <Testimonials />
          </section>

          {/* Team Section */}
          <section
            id="team"
            className="relative py-20 bg-white dark:bg-gray-900"
          >
            <Team />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="relative py-20 bg-gray-50 dark:bg-gray-800"
          >
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-700"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>

        {/* Loading Indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
          <div
            className="h-full bg-primary-600 dark:bg-primary-500 transition-all duration-300"
            style={{ width: "0%" }}
            id="loading-bar"
          ></div>
        </div>

        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Main Content Landmark */}
        <div id="main-content" className="sr-only">
          Main content area
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
