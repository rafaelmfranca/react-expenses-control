import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

const App: React.FC = () => {
  const { currTheme } = useTheme();

  return (
    <ThemeProvider theme={currTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <h1>Hello, world!</h1>
    </ThemeProvider>
  );
};

export default App;
