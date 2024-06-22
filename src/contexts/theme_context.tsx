import React, { createContext, useState, useContext, ReactNode } from "react";

interface Colors {
  primary: string;
  background: string;
  textMuted: string;
  text: string;
}

interface ThemeContextType {
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
    text: "#000000",
  };

  const darkColors: Colors = {
    primary: "#4BDDB4",
    background: "#151515",
    textMuted: "#5B5B5B",
    text: "#FFFFFF",
  };

  const toggleColorScheme = (): void => {
    setIsDarkMode((prev) => !prev);
  };

  const currentColors: Colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ colors: currentColors, toggleColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
