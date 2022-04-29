import React from 'react';
import Logo from '../Logo/index';
import { StyledHeader, StyledHeaderContent } from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Logo />
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Header;
