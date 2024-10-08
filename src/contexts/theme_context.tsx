import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface Colors {
  primary: string;
  primaryMuted: string;
  background: string;
  textMuted: string;
  text: string;
  primaryFaded: string;
  fadedOnPrimary: string;
  mutedButtonBackground: string;
  mutedButtonStroke: string;
  strongButtonBackground: string;
  lightTextOnPrimary: string;
  tertiary: string;
  contrastLowest: string;
  contrastHighest: string;
  contrastHigh: string;
  contrastMedium: string;
  contrastHighMediumTransparency: string;
  contrastLowLowTransparency: string;
  contrastLowMediumTransparency: string;
  contrastMediumMediumTransparency: string;
  contrastMediumLowTransparency: string;
  contrastLow: string;
  fadedText: string;
}

interface ThemeContextType {
  textStyles: any;
  colors: Colors;
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const lightColors: Colors = {
    primary: "#4BDDB4",
    primaryMuted: "#81E7CB",
    primaryFaded: "#DBF8F0",
    background: "#F6F6F6",
    textMuted: "#5B5B5B",
    lightTextOnPrimary: "#8B8B8B",
    text: "#000000",
    fadedOnPrimary: "#F2F2F2",
    fadedText: "#818181",
    tertiary: "#2A2A2A",
    mutedButtonBackground: "rgba(217, 217, 217, 0.4)",
    mutedButtonStroke: "#8B8B8B",
    strongButtonBackground: "#2A2A2A",
    contrastLowest: "#FFFFFF",
    contrastHighest: "#000000",
    contrastHigh: "#373737",
    contrastMedium: "#666666",
    contrastHighMediumTransparency: "rgba(0,0,0,0.6)",
    contrastLowLowTransparency: "rgba(255, 255, 255, 0.8)",
    contrastLowMediumTransparency: "rgba(255, 255, 255, 0.6)",
    contrastMediumMediumTransparency: "rgba(139,139,139,0.5)",
    contrastMediumLowTransparency: "rgba(139,139,139,0.8)",
    contrastLow: "#D9D9D9",
  };

  const darkColors: Colors = {
    primary: "#4BDDB4",
    primaryMuted: "#81E7CC",
    primaryFaded: "#0B392C",
    fadedOnPrimary: "#191919",
    fadedText: "#818181",
    lightTextOnPrimary: "#8B8B8B",
    background: "#151515",
    textMuted: "#5B5B5B",
    text: "#FFFFFF",
    tertiary: "#D5D5D5",
    mutedButtonBackground: "rgba(51, 51, 51, 0.4)",
    mutedButtonStroke: "#8B8B8B",
    strongButtonBackground: "#D5D5D5",
    contrastLowest: "#000000",
    contrastHighest: "#FFFFFF",
    contrastHigh: "#FFFFFF",
    contrastMedium: "#9E9E9E",
    contrastHighMediumTransparency: "rgba(255, 255, 255, 0.6)",
    contrastLowLowTransparency: "rgba(13,13,13,0.8)",
    contrastLowMediumTransparency: "rgba(13,13,13,0.6)",
    contrastMediumMediumTransparency: "rgba(139,139,139,0.5)",
    contrastMediumLowTransparency: "rgba(139,139,139,0.8)",
    contrastLow: "#333333",
  };

  const toggleColorScheme = (): void => {
    setIsDarkMode((prev) => !prev);
  };

  const currentColors: Colors = isDarkMode ? darkColors : lightColors;

  const textStyles = {
    bodyMedium: {
      fontFamily: "SFProRounded-Medium",
      fontSize: 14,
    },
    titleLarge: {
      fontFamily: "SFProRounded-Medium",
      fontSize: 20,
    },
    titleExtraLarge: {
      fontFamily: "SFProRounded-Medium",
      fontSize: 24,
    },
    labelLargeProminent: {
      fontFamily: "SFProRounded-Bold",
      fontSize: 16,
    },
    headerSmall: {
      fontFamily: "SFProRounded-Semibold",
      fontSize: 16,
    },
    displaySmall: {
      fontFamily: "SFProRounded-Regular",
      fontSize: 36,
    },
    appName: {
      fontFamily: "Nunito-Bold",
      fontSize: 28,
    },
    labelSmall: {
      fontFamily: "SFProRounded-Medium",
      fontSize: 12,
    },
  };

  return (
    <ThemeContext.Provider
      value={{
        textStyles: textStyles,
        colors: currentColors,
        toggleColorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
