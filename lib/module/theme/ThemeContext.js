"use strict";

// ThemeContext.tsx
import { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from './theme';
import { jsx as _jsx } from "react/jsx-runtime";
const ThemeContext = /*#__PURE__*/createContext(undefined);
export const ThemeProvider = ({
  children,
  initialMode = 'light'
}) => {
  const [isDarkMode, setIsDarkMode] = useState(initialMode === 'dark');
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const value = {
    theme: isDarkMode ? darkTheme : lightTheme,
    isDarkMode,
    toggleTheme
  };
  return /*#__PURE__*/_jsx(ThemeContext.Provider, {
    value: value,
    children: children
  });
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
//# sourceMappingURL=ThemeContext.js.map