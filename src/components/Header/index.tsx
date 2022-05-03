import React from 'react';
import Avatar from '../Avatar';
import { StyledHeader, StyledHeaderContent } from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Avatar />
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Header;
