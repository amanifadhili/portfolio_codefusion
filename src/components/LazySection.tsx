import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Props for the LazySection component
 */
interface LazySectionProps {
  /** The component to lazy load */
  component: React.ComponentType<any>;
  /** Props to pass to the component */
  componentProps?: Record<string, any>;
  /** Loading fallback component */
  fallback?: React.ReactNode;
  /** Whether to preload the component */
  preload?: boolean;
  /** Intersection observer options */
  observerOptions?: IntersectionObserverInit;
  /** Animation variants for the section */
  animationVariants?: any;
  /** Custom loading text */
  loadingText?: string;
  /** Custom error text */
  errorText?: string;
}

/**
 * Default loading fallback component
 */
const DefaultFallback: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="flex items-center justify-center min-h-[400px] bg-gray-50 dark:bg-gray-800">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">{text}</p>
    </div>
  </div>
);

/**
 * Default error fallback component
 */
const DefaultError: React.FC<{ text?: string; onRetry?: () => void }> = ({ 
  text = 'Failed to load content', 
  onRetry 
}) => (
  <div className="flex items-center justify-center min-h-[400px] bg-red-50 dark:bg-red-900/20">
    <div className="text-center">
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <p className="text-red-600 dark:text-red-400 mb-4">{text}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  </div>
);

/**
 * LazySection Component
 * 
 * This component implements lazy loading for sections to improve performance.
 * It only loads the component when it comes into view, reducing initial bundle size.
 * 
 * @example
 * ```tsx
 * <LazySection
 *   component={Hero}
 *   componentProps={{ title: 'Welcome' }}
 *   loadingText="Loading hero section..."
 * />
 * ```
 */
const LazySection: React.FC<LazySectionProps> = ({
  component,
  componentProps = {},
  fallback,
  preload = false,
  observerOptions = { threshold: 0.1, rootMargin: '50px' },
  animationVariants,
  loadingText,
  errorText,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

  // Lazy load the component
  const loadComponent = async () => {
    try {
      // If component is already a component, use it directly
      if (typeof component === 'function') {
        setComponent(() => component);
      } else {
        // If it's a dynamic import, handle it
        const module = await component;
        setComponent(() => module.default || module);
      }
      setIsLoaded(true);
    } catch (error) {
      console.error('Failed to load component:', error);
      setHasError(true);
    }
  };

  // Set up intersection observer
  useEffect(() => {
    if (preload) {
      loadComponent();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      observerOptions
    );

    const element = document.createElement('div');
    observer.observe(element);

    return () => observer.disconnect();
  }, [preload, observerOptions]);

  // Load component when visible
  useEffect(() => {
    if (isVisible && !isLoaded && !hasError) {
      loadComponent();
    }
  }, [isVisible, isLoaded, hasError]);

  // Handle retry
  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    setComponent(null);
    loadComponent();
  };

  // Render loading state
  if (!isLoaded && !hasError) {
    return (
      <div {...props}>
        {fallback || <DefaultFallback text={loadingText} />}
      </div>
    );
  }

  // Render error state
  if (hasError) {
    return (
      <div {...props}>
        <DefaultError text={errorText} onRetry={handleRetry} />
      </div>
    );
  }

  // Render the actual component
  if (!Component) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        {...props}
        initial={animationVariants?.initial || { opacity: 0, y: 20 }}
        animate={animationVariants?.animate || { opacity: 1, y: 0 }}
        exit={animationVariants?.exit || { opacity: 0, y: -20 }}
        transition={animationVariants?.transition || { duration: 0.6, ease: 'easeOut' }}
      >
        <Suspense fallback={fallback || <DefaultFallback text={loadingText} />}>
          <Component {...componentProps} />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

export default LazySection;
