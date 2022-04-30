import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';
import Header from './components/Header';
import Overview from './pages/Overview/index';
import TransactionsProvider from './contexts/transactions';
import SideMenu from './components/SideMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/overview"
            element={
              <TransactionsProvider>
                <SideMenu toggleTheme={toggleTheme} theme={theme} />
                <Header />
                <Overview />
              </TransactionsProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
