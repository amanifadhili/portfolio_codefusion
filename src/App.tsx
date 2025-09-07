import { useEffect, useState } from "react";
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

// Import utility functions and testing tools
import { applyBrowserClasses } from "./utils/browserSupport";
import usePerformance from "./hooks/usePerformance";
import ResponsiveTester from "./components/ResponsiveTester";

/**
 * Main App Component
 *
 * This component serves as the root of the CodeFusion portfolio application.
 * It integrates all sections, provides theme context, and implements smooth scrolling.
 * Now includes comprehensive testing and optimization tools for Phase 7.3.
 */
function App() {
  const [showResponsiveTester, setShowResponsiveTester] = useState(false);
  const [showPerformancePanel, setShowPerformancePanel] = useState(false);

  // Performance monitoring
  const { metrics, startMonitoring } = usePerformance({
    monitorWebVitals: true,
    monitorMemory: true,
    monitorFPS: true,
    monitorNetwork: true,
    updateInterval: 2000,
    onMetricsChange: (metrics) => {
      // Log performance metrics in development
      if (import.meta.env.DEV) {
        console.log("Performance Metrics:", metrics);
      }
    },
  });

  /**
   * Initialize browser support and performance monitoring
   */
  useEffect(() => {
    // Apply browser-specific classes
    applyBrowserClasses();

    // Start performance monitoring
    const cleanup = startMonitoring();

    return cleanup;
  }, [startMonitoring]);

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

      // Ctrl/Cmd + Shift + T to toggle responsive tester
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "T") {
        e.preventDefault();
        setShowResponsiveTester((prev) => !prev);
      }

      // Ctrl/Cmd + Shift + P to toggle performance panel
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "P") {
        e.preventDefault();
        setShowPerformancePanel((prev) => !prev);
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
          <About />

          {/* Services Section */}
          <Services />

          {/* Portfolio Section */}
          <Portfolio />

          {/* Tech Stack Section */}
          <TechStack />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Team Section */}
          <Team />

          {/* Contact Section */}
          <Contact />
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

        {/* Development Tools (only visible in development) */}
        {import.meta.env.DEV && (
          <>
            {/* Responsive Tester Toggle */}
            <button
              onClick={() => setShowResponsiveTester(true)}
              className="fixed bottom-8 left-8 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
              title="Open Responsive Tester (Ctrl+Shift+T)"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>

            {/* Performance Panel Toggle */}
            <button
              onClick={() => setShowPerformancePanel((prev) => !prev)}
              className="fixed bottom-8 left-24 z-50 p-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
              title="Toggle Performance Panel (Ctrl+Shift+P)"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </button>
          </>
        )}

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

        {/* Responsive Tester */}
        <ResponsiveTester
          isVisible={showResponsiveTester}
          onVisibilityChange={setShowResponsiveTester}
          devOnly={true}
        />

        {/* Performance Panel */}
        {showPerformancePanel && import.meta.env.DEV && (
          <div className="fixed top-20 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Performance
              </h3>
              <button
                onClick={() => setShowPerformancePanel(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ×
              </button>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">FCP:</span>
                <span className="text-gray-900 dark:text-white">
                  {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">LCP:</span>
                <span className="text-gray-900 dark:text-white">
                  {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">FPS:</span>
                <span className="text-gray-900 dark:text-white">
                  {metrics.fps || "N/A"}
                </span>
              </div>
              {metrics.memory && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Memory:</span>
                  <span className="text-gray-900 dark:text-white">
                    {metrics.memory.used}MB / {metrics.memory.total}MB
                  </span>
                </div>
              )}
              {metrics.network && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Network:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {metrics.network.effectiveType}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
