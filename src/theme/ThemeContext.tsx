// ThemeContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import { lightTheme, darkTheme, type ThemeType } from './theme';

type ThemeContextType = {
  theme: ThemeType;
  isDarkMode: boolean;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
  initialMode?: 'light' | 'dark';
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  initialMode = 'light',
}: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(initialMode === 'dark');

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const value = {
    theme: isDarkMode ? darkTheme : lightTheme,
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
