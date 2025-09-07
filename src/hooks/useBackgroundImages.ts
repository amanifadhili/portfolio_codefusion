import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing background image rotation and preloading
 * 
 * @param images - Array of image sources
 * @param rotationInterval - Interval in milliseconds for auto-rotation (default: 5000ms)
 * @param preloadImages - Whether to preload all images (default: true)
 * @returns Object containing current image state and control functions
 */
export function useBackgroundImages(
  images: string[],
  rotationInterval: number = 5000,
  preloadImages: boolean = true
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Preload images for smooth transitions
  useEffect(() => {
    if (!preloadImages) {
      setIsLoading(false);
      return;
    }

    const preloadImage = (src: string, index: number): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, index]));
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    const preloadAllImages = async () => {
      try {
        const promises = images.map((src, index) => preloadImage(src, index));
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.warn('Some images failed to load:', error);
        setIsLoading(false);
      }
    };

    preloadAllImages();
  }, [images, preloadImages]);

  // Auto-rotation effect
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [images.length, rotationInterval]);

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  }, [images.length]);

  // Check if specific image is loaded
  const isImageLoaded = useCallback((index: number) => {
    return loadedImages.has(index);
  }, [loadedImages]);

  return {
    currentIndex,
    currentImage: images[currentIndex],
    isLoading,
    totalImages: images.length,
    goToNext,
    goToPrevious,
    goToIndex,
    isImageLoaded,
    loadedImagesCount: loadedImages.size,
    allImagesLoaded: loadedImages.size === images.length
  };
}

export default useBackgroundImages;
