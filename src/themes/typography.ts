import { TextStyle } from "react-native";

export const typography = {
  fonts: {
    heading: "Outfit",
    bodyDark: "Inter",
    bodyLight: "Outfit",
    khmerRegular: "KantumruyPro-400Regular",
    khmerMedium: "KantumruyPro-500Medium",
  },

  styles: {
    displayLg: {
      fontFamily: "Outfit",
      fontSize: 48,
      fontWeight: "700",
      lineHeight: 52,
      letterSpacing: -0.96,
    },
    headlineLg: {
      fontFamily: "Outfit",
      fontSize: 32,
      fontWeight: "600",
      lineHeight: 38,
      letterSpacing: -0.32,
    },
    headlineLgMobile: {
      fontFamily: "Outfit",
      fontSize: 28,
      fontWeight: "600",
      lineHeight: 34,
    },
    titleMd: {
      fontFamily: "Outfit",
      fontSize: 20,
      fontWeight: "500",
      lineHeight: 28,
    },

    darkBodyLg: {
      fontFamily: "Inter",
      fontSize: 16,
      fontWeight: "400",
      lineHeight: 25,
    },
    darkBodySmKhmer: {
      fontFamily: "Inter",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 27,
      letterSpacing: 0.15,
    },
    darkLabelCaps: {
      fontFamily: "Inter",
      fontSize: 12,
      fontWeight: "600",
      lineHeight: 12,
      letterSpacing: 0.6,
    },
    // Luminous Minimalist Light Mode Specific Tokens
    lightBodyLg: {
      fontFamily: "Outfit",
      fontSize: 18,
      fontWeight: "400",
      lineHeight: 29,
    },
    lightBodyMd: {
      fontFamily: "Outfit",
      fontSize: 16,
      fontWeight: "400",
      lineHeight: 25,
    },
    lightLabelMd: {
      fontFamily: "Outfit",
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 17,
      letterSpacing: 0.14,
    },
    lightLabelSm: {
      fontFamily: "Outfit",
      fontSize: 12,
      fontWeight: "600",
      lineHeight: 14,
    },
  },
};

/**
 * Enhanced Utility to handle Khmer script rules across variable fonts
 */
export function getLocalizedTextStyle(
  baseStyle: TextStyle,
  isKhmer: boolean,
): TextStyle {
  if (!isKhmer) return baseStyle;

  const overrides: TextStyle = {};

  // Khmer strict requirement: minimum of 1.6x - 1.8x line height spacing to avoid stacked collisions
  if (baseStyle.lineHeight) {
    overrides.lineHeight = Math.max(
      Number(baseStyle.lineHeight),
      (baseStyle.fontSize || 16) * 1.8,
    );
  }

  // Visually balance script density by upscaling 1px
  if (baseStyle.fontSize) {
    overrides.fontSize = baseStyle.fontSize + 1;
  }

  // Enforce directive to clear cloggy heavy weight headings for Khmer scripts
  if (
    baseStyle.fontWeight === "700" ||
    baseStyle.fontWeight === "bold" ||
    baseStyle.fontWeight === "600" ||
    baseStyle.fontWeight === "500"
  ) {
    overrides.fontFamily = typography.fonts.khmerMedium;
    overrides.fontWeight = "500";
  } else {
    overrides.fontFamily = typography.fonts.khmerRegular;
    overrides.fontWeight = "400";
  }

  return { ...baseStyle, ...overrides };
}
