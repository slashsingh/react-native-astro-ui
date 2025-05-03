"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = void 0;
var _react = require("react");
var _theme = require("./theme");
var _jsxRuntime = require("react/jsx-runtime");
// ThemeContext.tsx

const ThemeContext = /*#__PURE__*/(0, _react.createContext)(undefined);
const ThemeProvider = ({
  children,
  initialMode = 'light'
}) => {
  const [isDarkMode, setIsDarkMode] = (0, _react.useState)(initialMode === 'dark');
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const value = {
    theme: isDarkMode ? _theme.darkTheme : _theme.lightTheme,
    isDarkMode,
    toggleTheme
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ThemeContext.Provider, {
    value: value,
    children: children
  });
};
exports.ThemeProvider = ThemeProvider;
const useTheme = () => {
  const context = (0, _react.useContext)(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
exports.useTheme = useTheme;
//# sourceMappingURL=ThemeContext.js.map