import React, { ReactNode, createContext, useContext, useState } from "react";

interface Colors {
  primary: string;
  background: string;
  textMuted: string;
  text: string;
  fadedOnPrimary: string;
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

  // Define your color schemes
  const lightColors: Colors = {
    primary: "#4BDDB4",
    background: "#F6F6F6",
    textMuted: "#5B5B5B",
    lightTextOnPrimary: "#8B8B8B",
    text: "#000000",
    fadedOnPrimary: "#F2F2F2",
    tertiary: "#2A2A2A",
    contrastLowest: "#FFFFFF",
    contrastHighest: "#000000",
    contrastHigh: "#373737",
    contrastMedium: "#666666",
    contrastHighMediumTransparency: "rgba(0,0,0,0.6)",
    contrastLowLowTransparency: "rgba(255, 255, 255, 0.8)",
    contrastLowMediumTransparency: "rgba(255, 255, 255, 0.6)",
    contrastMediumMediumTransparency: "rgba(139,139,139,0.5)",
    contrastMediumLowTransparency: "rgba(139,139,139,0.8)",
  };

  const darkColors: Colors = {
    primary: "#4BDDB4",
    fadedOnPrimary: "#191919",
    lightTextOnPrimary: "#8B8B8B",
    background: "#151515",
    textMuted: "#5B5B5B",
    text: "#FFFFFF",
    tertiary: "#D5D5D5",
    contrastLowest: "#000000",
    contrastHighest: "#FFFFFF",
    contrastHigh: "#FFFFFF",
    contrastMedium: "#9E9E9E",
    contrastHighMediumTransparency: "rgba(255, 255, 255, 0.6)",
    contrastLowLowTransparency: "rgba(13,13,13,0.8)",
    contrastLowMediumTransparency: "rgba(13,13,13,0.6)",
    contrastMediumMediumTransparency: "rgba(139,139,139,0.5)",
    contrastMediumLowTransparency: "rgba(139,139,139,0.8)",
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
