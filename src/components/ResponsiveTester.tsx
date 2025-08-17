import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Tablet,
  X,
  RotateCcw,
  Maximize2,
  Minimize2,
} from "lucide-react";

/**
 * Predefined device breakpoints
 */
const DEVICE_BREAKPOINTS = {
  mobile: { width: 375, height: 667, name: "Mobile", icon: Smartphone },
  mobileLarge: {
    width: 414,
    height: 896,
    name: "Mobile Large",
    icon: Smartphone,
  },
  tablet: { width: 768, height: 1024, name: "Tablet", icon: Tablet },
  tabletLarge: {
    width: 1024,
    height: 1366,
    name: "Tablet Large",
    icon: Tablet,
  },
  desktop: { width: 1280, height: 720, name: "Desktop", icon: Monitor },
  desktopLarge: {
    width: 1920,
    height: 1080,
    name: "Desktop Large",
    icon: Monitor,
  },
  custom: { width: 1200, height: 800, name: "Custom", icon: Monitor },
} as const;

type DeviceType = keyof typeof DEVICE_BREAKPOINTS;

/**
 * Props for the ResponsiveTester component
 */
interface ResponsiveTesterProps {
  /** Whether the tester is visible */
  isVisible: boolean;
  /** Callback when visibility changes */
  onVisibilityChange: (visible: boolean) => void;
  /** Whether to show in development mode only */
  devOnly?: boolean;
}

/**
 * ResponsiveTester Component
 *
 * This component provides a testing interface for responsive design,
 * allowing developers to test the website at different screen sizes.
 *
 * @example
 * ```tsx
 * const [showTester, setShowTester] = useState(false);
 *
 * <ResponsiveTester
 *   isVisible={showTester}
 *   onVisibilityChange={setShowTester}
 *   devOnly={true}
 * />
 * ```
 */
const ResponsiveTester: React.FC<ResponsiveTesterProps> = ({
  isVisible,
  onVisibilityChange,
  devOnly = true,
}) => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>("desktop");
  const [customWidth, setCustomWidth] = useState(1200);
  const [customHeight, setCustomHeight] = useState(800);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "landscape"
  );

  // Hide in production if devOnly is true
  useEffect(() => {
    if (devOnly && import.meta.env.PROD) {
      onVisibilityChange(false);
    }
  }, [devOnly, onVisibilityChange]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        onVisibilityChange(false);
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isVisible, onVisibilityChange]);

  // Get current dimensions
  const getCurrentDimensions = () => {
    if (selectedDevice === "custom") {
      return { width: customWidth, height: customHeight };
    }
    const device = DEVICE_BREAKPOINTS[selectedDevice];
    return {
      width:
        orientation === "portrait"
          ? Math.min(device.width, device.height)
          : Math.max(device.width, device.height),
      height:
        orientation === "portrait"
          ? Math.max(device.width, device.height)
          : Math.min(device.width, device.height),
    };
  };

  // Toggle orientation
  const toggleOrientation = () => {
    setOrientation((prev) => (prev === "portrait" ? "landscape" : "portrait"));
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Reset to default
  const resetToDefault = () => {
    setSelectedDevice("desktop");
    setCustomWidth(1200);
    setCustomHeight(800);
    setOrientation("landscape");
  };

  if (!isVisible) return null;

  const currentDimensions = getCurrentDimensions();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={() => onVisibilityChange(false)}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Responsive Design Tester
            </h3>
            <button
              onClick={() => onVisibilityChange(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Controls */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Device Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Device Preset
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(DEVICE_BREAKPOINTS).map(([key, device]) => {
                    const Icon = device.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedDevice(key as DeviceType)}
                        className={`flex items-center justify-center p-2 rounded-md border transition-colors ${
                          selectedDevice === key
                            ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                            : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                        }`}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        <span className="text-xs">{device.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Dimensions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Custom Dimensions
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(Number(e.target.value))}
                    placeholder="Width"
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm dark:bg-gray-700 dark:text-white"
                    min="200"
                    max="3000"
                  />
                  <input
                    type="number"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(Number(e.target.value))}
                    placeholder="Height"
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm dark:bg-gray-700 dark:text-white"
                    min="200"
                    max="3000"
                  />
                </div>
              </div>

              {/* Orientation & Controls */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Controls
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={toggleOrientation}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    title="Toggle orientation"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    title="Toggle fullscreen"
                  >
                    {isFullscreen ? (
                      <Minimize2 className="w-4 h-4" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={resetToDefault}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    title="Reset to default"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Frame */}
          <div className="p-4">
            <div className="flex items-center justify-center">
              <div
                className="border-4 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
                style={{
                  width: currentDimensions.width,
                  height: currentDimensions.height,
                  maxWidth: "100%",
                  maxHeight: "60vh",
                }}
              >
                <iframe
                  src={window.location.href}
                  title="Responsive Preview"
                  className="w-full h-full border-0"
                  style={{
                    transform: `scale(${Math.min(
                      (currentDimensions.width - 8) / currentDimensions.width,
                      (currentDimensions.height - 8) / currentDimensions.height
                    )})`,
                    transformOrigin: "top left",
                  }}
                />
              </div>
            </div>

            {/* Dimensions Display */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Current: {currentDimensions.width} × {currentDimensions.height}
                px
                {orientation === "portrait" && " (Portrait)"}
                {orientation === "landscape" && " (Landscape)"}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResponsiveTester;
