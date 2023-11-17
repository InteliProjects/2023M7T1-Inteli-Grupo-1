// ThemeProvider.js
import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface ThemeProviderProps {
    children: ReactNode;
    themeMode: string; // Substitua 'string' pelo tipo correto se aplicável
  }

const lightTheme = {
    green: '#00A868',
    gray: '#909090',
    white: '#fff',
    primaryFont: "Inter, 'sans-serif'",
    backgroundPrimary: '#fff',
    backgroundSecondary: '#F4F4F4',
    accentColor: '#FF7F50',
    textColor: '#333'
};
  
const darkTheme = {
    green: '#00A868',
    gray: '#909090',
    white: '#fff',
    primaryFont: "Inter, 'sans-serif'",
    backgroundPrimary: '#333',
    backgroundSecondary: '#444',
    accentColor: '#00C387',
    textColor: '#fff'
};
  

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, themeMode }) => {

    const theme = themeMode === 'dark' ? darkTheme : lightTheme;
  
    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;

};

export default ThemeProvider;