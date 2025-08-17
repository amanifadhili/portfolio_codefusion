import { useEffect, useState, useCallback, useRef } from 'react';

/**
 * Performance metrics interface
 */
export interface PerformanceMetrics {
  /** First Contentful Paint (FCP) */
  fcp: number | null;
  /** Largest Contentful Paint (LCP) */
  lcp: number | null;
  /** First Input Delay (FID) */
  fid: number | null;
  /** Cumulative Layout Shift (CLS) */
  cls: number | null;
  /** Time to First Byte (TTFB) */
  ttfb: number | null;
  /** DOM Content Loaded */
  domContentLoaded: number | null;
  /** Window Load */
  windowLoad: number | null;
  /** Memory usage (if supported) */
  memory: { used: number; total: number } | null;
  /** Current FPS */
  fps: number | null;
  /** Page visibility status */
  isVisible: boolean;
  /** Network information (if supported) */
  network: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  } | null;
}

/**
 * Performance monitoring options
 */
export interface PerformanceOptions {
  /** Whether to monitor Core Web Vitals */
  monitorWebVitals?: boolean;
  /** Whether to monitor memory usage */
  monitorMemory?: boolean;
  /** Whether to monitor FPS */
  monitorFPS?: boolean;
  /** Whether to monitor network */
  monitorNetwork?: boolean;
  /** Update interval for continuous monitoring (ms) */
  updateInterval?: number;
  /** Callback when metrics change */
  onMetricsChange?: (metrics: PerformanceMetrics) => void;
}

/**
 * Performance monitoring hook
 * 
 * This hook provides comprehensive performance monitoring including:
 * - Core Web Vitals (FCP, LCP, FID, CLS)
 * - Memory usage
 * - FPS monitoring
 * - Network information
 * - Page visibility
 * 
 * @param options - Configuration options for performance monitoring
 * @returns Object containing performance metrics and control functions
 * 
 * @example
 * ```tsx
 * const { metrics, startMonitoring, stopMonitoring } = usePerformance({
 *   monitorWebVitals: true,
 *   monitorMemory: true,
 *   onMetricsChange: (metrics) => console.log('Performance:', metrics)
 * });
 * 
 * useEffect(() => {
 *   startMonitoring();
 *   return () => stopMonitoring();
 * }, [startMonitoring, stopMonitoring]);
 * ```
 */
export function usePerformance(options: PerformanceOptions = {}): {
  metrics: PerformanceMetrics;
  startMonitoring: () => void;
  stopMonitoring: () => void;
  resetMetrics: () => void;
} {
  const {
    monitorWebVitals = true,
    monitorMemory = true,
    monitorFPS: shouldMonitorFPS = false,
    monitorNetwork: shouldMonitorNetwork = false,
    updateInterval = 1000,
    onMetricsChange
  } = options;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domContentLoaded: null,
    windowLoad: null,
    memory: null,
    fps: null,
    isVisible: true,
    network: null
  });

  const intervalRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const observersRef = useRef<PerformanceObserver[]>([]);

  /**
   * Measure Core Web Vitals
   */
  const measureWebVitals = useCallback(() => {
    if (!monitorWebVitals || !('PerformanceObserver' in window)) return;

    // FCP (First Contentful Paint)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      observersRef.current.push(fcpObserver);
    } catch (error) {
      console.warn('FCP monitoring not supported:', error);
    }

    // LCP (Largest Contentful Paint)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      observersRef.current.push(lcpObserver);
    } catch (error) {
      console.warn('LCP monitoring not supported:', error);
    }

    // FID (First Input Delay)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      observersRef.current.push(fidObserver);
    } catch (error) {
      console.warn('FID monitoring not supported:', error);
    }

    // CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      observersRef.current.push(clsObserver);
    } catch (error) {
      console.warn('CLS monitoring not supported:', error);
    }
  }, [monitorWebVitals]);

  /**
   * Measure TTFB and other navigation timing
   */
  const measureNavigationTiming = useCallback(() => {
    if (!monitorWebVitals) return;

    // Use Navigation Timing API if available
    if ('navigation' in performance) {
      // const navigation = (performance as any).navigation;
      const timing = (performance as any).timing;
      
      if (timing) {
        setMetrics(prev => ({
          ...prev,
          ttfb: timing.responseStart - timing.requestStart,
          domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
          windowLoad: timing.loadEventEnd - timing.navigationStart
        }));
      }
    } else {
      // Fallback to Performance API
              const navigationEntry = (performance as any).getEntriesByType('navigation')[0] as any;
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
                      domContentLoaded: (navigationEntry as any).domContentLoadedEventEnd - (navigationEntry as any).navigationStart,
            windowLoad: (navigationEntry as any).loadEventEnd - (navigationEntry as any).navigationStart
        }));
      }
    }
  }, [monitorWebVitals]);

  /**
   * Monitor memory usage
   */
  const monitorMemoryUsage = useCallback(() => {
    if (!monitorMemory || !('memory' in performance)) return;

    const updateMemory = () => {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memory: {
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
        }
      }));
    };

    updateMemory();
    return updateMemory;
  }, [monitorMemory]);

  /**
   * Monitor FPS
   */
  const monitorFPS = useCallback(() => {
    if (!shouldMonitorFPS) return;

    const updateFPS = () => {
      const now = performance.now();
      frameCountRef.current++;
      
      if (now - lastTimeRef.current >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current));
        setMetrics(prev => ({ ...prev, fps }));
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }
      
      requestAnimationFrame(updateFPS);
    };

    requestAnimationFrame(updateFPS);
  }, [shouldMonitorFPS]);

  /**
   * Monitor network information
   */
  const monitorNetwork = useCallback(() => {
    if (!shouldMonitorNetwork || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    if (connection) {
      setMetrics(prev => ({
        ...prev,
        network: {
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0
        }
      }));

      // Listen for network changes
      connection.addEventListener('change', () => {
        setMetrics(prev => ({
          ...prev,
          network: {
            effectiveType: connection.effectiveType || 'unknown',
            downlink: connection.downlink || 0,
            rtt: connection.rtt || 0
          }
        }));
      });
    }
  }, [shouldMonitorNetwork]);

  /**
   * Monitor page visibility
   */
  const monitorPageVisibility = useCallback(() => {
    const handleVisibilityChange = () => {
      setMetrics(prev => ({ ...prev, isVisible: !document.hidden }));
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  /**
   * Start performance monitoring
   */
  const startMonitoring = useCallback(() => {
    // Measure initial metrics
    measureWebVitals();
    measureNavigationTiming();
    
    const memoryUpdater = monitorMemoryUsage();
    monitorFPS();
    monitorNetwork();
    const visibilityCleanup = monitorPageVisibility();

    // Set up continuous monitoring
    if (updateInterval > 0) {
      intervalRef.current = window.setInterval(() => {
        if (memoryUpdater) memoryUpdater();
      }, updateInterval);
    }

    return () => {
      if (visibilityCleanup) visibilityCleanup();
    };
  }, [
    measureWebVitals,
    measureNavigationTiming,
    monitorMemoryUsage,
    monitorFPS,
    monitorNetwork,
    monitorPageVisibility,
    updateInterval
  ]);

  /**
   * Stop performance monitoring
   */
  const stopMonitoring = useCallback(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Disconnect all observers
    observersRef.current.forEach(observer => observer.disconnect());
    observersRef.current = [];
  }, []);

  /**
   * Reset all metrics
   */
  const resetMetrics = useCallback(() => {
    setMetrics({
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
      domContentLoaded: null,
      windowLoad: null,
      memory: null,
      fps: null,
      isVisible: true,
      network: null
    });
  }, []);

  // Notify when metrics change
  useEffect(() => {
    if (onMetricsChange) {
      onMetricsChange(metrics);
    }
  }, [metrics, onMetricsChange]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopMonitoring();
    };
  }, [stopMonitoring]);

  return {
    metrics,
    startMonitoring,
    stopMonitoring,
    resetMetrics
  };
}

export default usePerformance;
