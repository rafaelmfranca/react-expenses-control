import React from 'react';
import Logo from '../Logo/index';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { StyledHeader, StyledHeaderContent } from './styles';

type HeaderProps = {
  theme: string;
  toggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Logo />
        <button type="button" onClick={toggleTheme}>
          {theme === 'light' ? <RiMoonClearFill /> : <RiSunFill />}
        </button>
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Header;
