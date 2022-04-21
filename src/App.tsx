import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';
import Header from './components/Header';

const App: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} theme={theme} />
    </ThemeProvider>
  );
};

export default App;
