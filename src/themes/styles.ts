import { StyleSheet } from "react-native";
import { colors } from "./colors";

// Fluid liquid timing configuration
export const animationConfig = {
  duration: 300,
  bezier: [0.4, 0, 0.2, 1],
};

export const globalStyles = StyleSheet.create({
  // Level 2 Elevation Depth Structure
  glassCardLevel2: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.dark.glassBorder,
    backgroundColor: colors.dark.glassFill,
    // Ambient Light Glow Shadow
    shadowColor: colors.dark.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 40,
    elevation: 5,
  },
  // Level 3 System Modals
  glassModalLevel3: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    backgroundColor: colors.dark.glassFill,
    elevation: 10,
  },
});
