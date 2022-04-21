import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';
import Header from './components/Header';
import Overview from './components/Overview/index';

const App: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Overview />
    </ThemeProvider>
  );
};

export default App;
