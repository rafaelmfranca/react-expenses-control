import React from 'react';
import StyledLogo from './styles';
import { RiHandCoinFill } from 'react-icons/ri';

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <h2>
        <RiHandCoinFill />
        expenses.<span>control</span>
      </h2>
    </StyledLogo>
  );
};

export default Logo;
