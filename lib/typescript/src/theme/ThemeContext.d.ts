import { type ReactNode } from 'react';
import { type ThemeType } from './theme';
type ThemeContextType = {
    theme: ThemeType;
    isDarkMode: boolean;
    toggleTheme: () => void;
};
type ThemeProviderProps = {
    children: ReactNode;
    initialMode?: 'light' | 'dark';
};
export declare const ThemeProvider: ({ children, initialMode, }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
//# sourceMappingURL=ThemeContext.d.ts.map