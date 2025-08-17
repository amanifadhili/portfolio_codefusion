/**
 * Browser Support & Feature Detection Utilities
 * 
 * This module provides utilities for detecting browser capabilities,
 * feature support, and providing fallbacks for cross-browser compatibility.
 */

export interface BrowserInfo {
  name: string;
  version: string;
  isModern: boolean;
  supportsIntersectionObserver: boolean;
  supportsSmoothScroll: boolean;
  supportsCSSVariables: boolean;
  supportsWebP: boolean;
  supportsWebGL: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

/**
 * Detect browser information and capabilities
 */
export function detectBrowser(): BrowserInfo {
  const userAgent = navigator.userAgent;
  let name = 'Unknown';
  let version = '0.0.0';

  // Detect browser name and version
  if (userAgent.includes('Chrome')) {
    name = 'Chrome';
    const match = userAgent.match(/Chrome\/(\d+\.\d+\.\d+)/);
    if (match) version = match[1];
  } else if (userAgent.includes('Firefox')) {
    name = 'Firefox';
    const match = userAgent.match(/Firefox\/(\d+\.\d+)/);
    if (match) version = match[1];
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    name = 'Safari';
    const match = userAgent.match(/Version\/(\d+\.\d+)/);
    if (match) version = match[1];
  } else if (userAgent.includes('Edge')) {
    name = 'Edge';
    const match = userAgent.match(/Edge\/(\d+\.\d+)/);
    if (match) version = match[1];
  }

  // Detect device type
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  // Feature detection
  const supportsIntersectionObserver = 'IntersectionObserver' in window;
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;
  const supportsCSSVariables = CSS.supports('--custom-property', 'value');
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  })();
  const supportsWebGL = (() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && canvas.getContext('webgl'));
    } catch (e) {
      return false;
    }
  })();

  // Determine if browser is modern (supports key features)
  const isModern = supportsIntersectionObserver && supportsSmoothScroll && supportsCSSVariables;

  return {
    name,
    version,
    isModern,
    supportsIntersectionObserver,
    supportsSmoothScroll,
    supportsCSSVariables,
    supportsWebP,
    supportsWebGL,
    isMobile,
    isTablet,
    isDesktop
  };
}

/**
 * Get browser-specific CSS classes for conditional styling
 */
export function getBrowserClasses(): string[] {
  const browser = detectBrowser();
  const classes: string[] = [];

  // Browser-specific classes
  classes.push(`browser-${browser.name.toLowerCase()}`);
  classes.push(`browser-version-${browser.version.split('.')[0]}`);

  // Feature support classes
  if (browser.supportsIntersectionObserver) classes.push('supports-intersection-observer');
  if (browser.supportsSmoothScroll) classes.push('supports-smooth-scroll');
  if (browser.supportsCSSVariables) classes.push('supports-css-variables');
  if (browser.supportsWebP) classes.push('supports-webp');
  if (browser.supportsWebGL) classes.push('supports-webgl');

  // Device type classes
  if (browser.isMobile) classes.push('device-mobile');
  if (browser.isTablet) classes.push('device-tablet');
  if (browser.isDesktop) classes.push('device-desktop');

  // Modern browser class
  if (browser.isModern) classes.push('browser-modern');
  else classes.push('browser-legacy');

  return classes;
}

/**
 * Apply browser-specific classes to document body
 */
export function applyBrowserClasses(): void {
  const classes = getBrowserClasses();
  document.body.classList.add(...classes);
}

/**
 * Check if a specific feature is supported
 */
export function isFeatureSupported(feature: keyof Omit<BrowserInfo, 'name' | 'version' | 'isModern' | 'isMobile' | 'isTablet' | 'isDesktop'>): boolean {
  const browser = detectBrowser();
  return browser[feature];
}

/**
 * Get fallback for unsupported features
 */
export function getFeatureFallback<T>(feature: keyof Omit<BrowserInfo, 'name' | 'version' | 'isModern' | 'isMobile' | 'isTablet' | 'isDesktop'>, fallback: T): T {
  return isFeatureSupported(feature) ? ({} as T) : fallback;
}

/**
 * Performance monitoring utilities
 */
export const performanceUtils = {
  /**
   * Measure execution time of a function
   */
  measureTime<T>(fn: () => T, label: string): T {
    if ('performance' in window) {
      const start = performance.now();
      const result = fn();
      const end = performance.now();
      console.log(`${label} took ${(end - start).toFixed(2)}ms`);
      return result;
    }
    return fn();
  },

  /**
   * Check if page is running in background
   */
  isPageVisible(): boolean {
    return !document.hidden;
  },

  /**
   * Get memory usage (if supported)
   */
  getMemoryUsage(): { used: number; total: number } | null {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        used: Math.round(memory.usedJSHeapSize / 1048576), // MB
        total: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
      };
    }
    return null;
  }
};

/**
 * Accessibility utilities
 */
export const accessibilityUtils = {
  /**
   * Check if user prefers reduced motion
   */
  prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  /**
   * Check if user prefers high contrast
   */
  prefersHighContrast(): boolean {
    return window.matchMedia('(prefers-contrast: high)').matches;
  },

  /**
   * Check if user prefers dark color scheme
   */
  prefersDarkColorScheme(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
};

export default {
  detectBrowser,
  getBrowserClasses,
  applyBrowserClasses,
  isFeatureSupported,
  getFeatureFallback,
  performanceUtils,
  accessibilityUtils
};
