// ============================================================================
// SCROLL ANIMATION HOOKS
// ============================================================================

export {
  useScrollAnimation,
  useScrollPosition,
  useParallax,
  useScrollClass,
  type ScrollAnimationOptions,
  type ScrollAnimationReturn
} from './useScrollAnimation';

// ============================================================================
// THEME HOOKS
// ============================================================================

export {
  useCustomTheme,
  useThemeStyles,
  useThemeTransition,
  useThemePersistence,
  type CustomThemeHookReturn
} from './useTheme';

// ============================================================================
// DEFAULT EXPORTS
// ============================================================================

export { default as ScrollAnimationHooks } from './useScrollAnimation';
export { default as ThemeHooks } from './useTheme';

// ============================================================================
// HOOK CATEGORIES
// ============================================================================

/**
 * All scroll and animation related hooks
 */
export const scrollHooks = {
  useScrollAnimation: () => import('./useScrollAnimation').then(m => m.useScrollAnimation),
  useScrollPosition: () => import('./useScrollAnimation').then(m => m.useScrollPosition),
  useParallax: () => import('./useScrollAnimation').then(m => m.useParallax),
  useScrollClass: () => import('./useScrollAnimation').then(m => m.useScrollClass)
};

/**
 * All theme related hooks
 */
export const themeHooks = {
  useCustomTheme: () => import('./useTheme').then(m => m.useCustomTheme),
  useThemeStyles: () => import('./useTheme').then(m => m.useThemeStyles),
  useThemeTransition: () => import('./useTheme').then(m => m.useThemeTransition),
  useThemePersistence: () => import('./useTheme').then(m => m.useThemePersistence)
};

/**
 * All available hooks
 */
export const allHooks = {
  ...scrollHooks,
  ...themeHooks
};

// ============================================================================
// HOOK USAGE EXAMPLES
// ============================================================================

/**
 * Example usage of scroll animation hooks:
 * 
 * ```tsx
 * import { useScrollAnimation, useScrollPosition } from '@/hooks';
 * 
 * function MyComponent() {
 *   const { ref, isInView, hasTriggered } = useScrollAnimation({
 *     threshold: 0.5,
 *     triggerOnce: true
 *   });
 *   
 *   const { scrollY, scrollDirection } = useScrollPosition();
 *   
 *   return (
 *     <motion.div
 *       ref={ref}
 *       initial={{ opacity: 0, y: 50 }}
 *       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
 *       transition={{ duration: 0.6 }}
 *     >
 *       Scroll position: {scrollY}px, Direction: {scrollDirection}
 *     </motion.div>
 *   );
 * }
 * ```
 */

/**
 * Example usage of theme hooks:
 * 
 * ```tsx
 * import { useCustomTheme, useThemeStyles } from '@/hooks';
 * 
 * function ThemeToggle() {
 *   const { theme, isDark, toggleTheme } = useCustomTheme();
 *   const { getThemeClass, getThemeColor } = useThemeStyles();
 *   
 *   return (
 *     <button
 *       onClick={toggleTheme}
 *       className={getThemeClass('bg-white text-black', 'bg-black text-white')}
 *       style={{ backgroundColor: getThemeColor('#ffffff', '#000000') }}
 *     >
 *       {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
 *     </button>
 *   );
 * }
 * ```
 */
