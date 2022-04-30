import React from 'react';
import { RiGoogleFill } from 'react-icons/ri';
import Logo from '../../components/Logo';
import { StyledHomeContainer, StyledHomeContent } from './styles';

const Home: React.FC = () => {
  return (
    <StyledHomeContainer>
      <StyledHomeContent>
        <Logo />
        <div className="separator">
          <span>v.0.0.0</span>
        </div>
        <button type="button">
          <RiGoogleFill />
          Sign in with Google
        </button>
      </StyledHomeContent>
    </StyledHomeContainer>
  );
};

export default Home;
