export const spacing = {
  base: 4,
  xs: 8, // 0.5rem
  sm: 16, // 1rem
  md: 24, // 1.5rem (Breathable internal padding)
  lg: 32, // 2rem
  xl: 48, // 3rem
  containerMargin: 20,
  safeAreaBottom: 34, // Safe Area Home Indicator layout pad
};

/**
 * Script Adaptive Vertical Layout gaps
 */
export function getStackGap(isKhmer: boolean): number {
  const defaultGap = 20; // 1.25rem
  return isKhmer ? defaultGap * 1.25 : defaultGap; // Increase by 25% for Khmer ascenders/descenders
}
