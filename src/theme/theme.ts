// theme.ts
export const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#007bff',
  secondary: '#6c757d',
  buttonText: '#FFFFFF',
  border: '#ced4da',
};

export const darkTheme = {
  background: '#000000',
  text: '#FFFFFF',
  primary: '#1e90ff',
  secondary: '#444',
  buttonText: '#FFFFFF',
  border: '#444',
};

export type ThemeType = typeof lightTheme;
