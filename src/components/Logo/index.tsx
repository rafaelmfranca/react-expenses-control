import React from 'react';
import StyledLogo from './styles';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <h2>
        <RiMoneyEuroCircleLine />
        xpenses<span>.control</span>
      </h2>
    </StyledLogo>
  );
};

export default Logo;
