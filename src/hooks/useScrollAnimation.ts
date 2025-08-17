import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Configuration options for the scroll animation hook
 */
export interface ScrollAnimationOptions {
  /** Threshold for triggering the animation (0-1) */
  threshold?: number;
  /** Root margin for the intersection observer */
  rootMargin?: string;
  /** Whether to trigger the animation only once */
  triggerOnce?: boolean;
  /** Delay before starting the animation (in ms) */
  delay?: number;
  /** Custom animation class to apply */
  animationClass?: string;
  /** Whether to enable the hook (useful for conditional animations) */
  enabled?: boolean;
}

/**
 * Return type for the scroll animation hook
 */
export interface ScrollAnimationReturn {
  /** Ref to attach to the element you want to animate */
  ref: React.RefObject<HTMLElement>;
  /** Whether the element is currently in view */
  isInView: boolean;
  /** Whether the animation has been triggered */
  hasTriggered: boolean;
  /** Function to manually trigger the animation */
  triggerAnimation: () => void;
  /** Function to reset the animation state */
  resetAnimation: () => void;
}

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * 
 * This hook provides a way to trigger animations when elements come into view,
 * making it perfect for scroll-based reveal animations, parallax effects, and more.
 * 
 * @param options - Configuration options for the scroll animation
 * @returns Object containing ref, state, and control functions
 * 
 * @example
 * ```tsx
 * const { ref, isInView, hasTriggered } = useScrollAnimation({
 *   threshold: 0.5,
 *   triggerOnce: true,
 *   delay: 200
 * });
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     initial={{ opacity: 0, y: 50 }}
 *     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
 *     transition={{ duration: 0.6, delay: hasTriggered ? 0.2 : 0 }}
 *   >
 *     Content that animates when scrolled into view
 *   </motion.div>
 * );
 * ```
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}): ScrollAnimationReturn {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false,
    delay = 0,
    animationClass = 'animate-in',
    enabled = true
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /**
   * Handle intersection observer callback
   * This function is called whenever the observed element intersects with the viewport
   */
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    
    if (entry.isIntersecting) {
      setIsInView(true);
      
      // Apply animation class if provided
      if (animationClass && ref.current) {
        ref.current.classList.add(animationClass);
      }
      
      // Handle delay if specified
      if (delay > 0) {
        setTimeout(() => {
          setHasTriggered(true);
        }, delay);
      } else {
        setHasTriggered(true);
      }
      
      // Disconnect observer if triggerOnce is true
      if (triggerOnce && observerRef.current) {
        observerRef.current.disconnect();
      }
    } else {
      setIsInView(false);
      
      // Remove animation class if element is out of view
      if (animationClass && ref.current) {
        ref.current.classList.remove(animationClass);
      }
      
      // Reset trigger state if not triggerOnce
      if (!triggerOnce) {
        setHasTriggered(false);
      }
    }
  }, [animationClass, delay, triggerOnce]);

  /**
   * Manually trigger the animation
   * Useful for programmatic control or testing
   */
  const triggerAnimation = useCallback(() => {
    setIsInView(true);
    setHasTriggered(true);
    
    if (animationClass && ref.current) {
      ref.current.classList.add(animationClass);
    }
  }, [animationClass]);

  /**
   * Reset the animation state
   * Useful for re-triggering animations or resetting state
   */
  const resetAnimation = useCallback(() => {
    setIsInView(false);
    setHasTriggered(false);
    
    if (animationClass && ref.current) {
      ref.current.classList.remove(animationClass);
    }
  }, [animationClass]);

  /**
   * Set up intersection observer
   * This effect creates and manages the intersection observer
   */
  useEffect(() => {
    if (!enabled || !ref.current) return;

    // Create intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
      root: null // Use viewport as root
    });

    // Start observing the element
    observer.observe(ref.current);
    observerRef.current = observer;

    // Cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
        observerRef.current = null;
      }
    };
  }, [enabled, threshold, rootMargin, handleIntersection]);

  /**
   * Cleanup on unmount
   * Ensures observer is properly disconnected
   */
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  return {
    ref,
    isInView,
    hasTriggered,
    triggerAnimation,
    resetAnimation
  };
}

/**
 * Hook for scroll position tracking
 * Useful for scroll-based effects like parallax or progress indicators
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll position
      setScrollY(currentScrollY);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      // Calculate scroll progress (0-1)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    updateScrollPosition();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollY,
    scrollDirection,
    scrollProgress,
    isScrolled: scrollY > 0,
    isNearTop: scrollY < 100,
    isNearBottom: scrollProgress > 0.9
  };
}

/**
 * Hook for scroll-based parallax effects
 * Provides smooth parallax scrolling with performance optimization
 */
export function useParallax(speed: number = 0.5, enabled: boolean = true) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    let ticking = false;

    const updateParallax = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      setOffset(rate);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    updateParallax();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, enabled]);

  return {
    ref,
    offset,
    style: {
      transform: `translateY(${offset}px)`
    }
  };
}

/**
 * Hook for scroll-triggered class toggling
 * Automatically adds/removes CSS classes based on scroll position
 */
export function useScrollClass(
  className: string,
  triggerCondition: (scrollY: number) => boolean,
  enabled: boolean = true
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const shouldHaveClass = triggerCondition(scrollY);
      
      if (shouldHaveClass) {
        ref.current.classList.add(className);
      } else {
        ref.current.classList.remove(className);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [className, triggerCondition, enabled]);

  return ref;
}

// Export all hooks
export default {
  useScrollAnimation,
  useScrollPosition,
  useParallax,
  useScrollClass
};
