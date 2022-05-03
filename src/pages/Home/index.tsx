import React from 'react';
import { RiGoogleFill } from 'react-icons/ri';
import DotLoading from '../../components/DotLoading';
import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';
import { StyledHomeContainer, StyledHomeContent } from './styles';

const Home: React.FC = () => {
  const { user, signInWithGoogle, signInLoading } = useAuth();

  const handleSignInWithGoogle = async () => {
    !user && (await signInWithGoogle());
  };

  return (
    <StyledHomeContainer>
      <StyledHomeContent>
        <Logo />
        <div className="separator">
          <span>v.0.0.0</span>
        </div>
        <button
          type="button"
          onClick={handleSignInWithGoogle}
          disabled={signInLoading}
        >
          {signInLoading ? (
            <DotLoading />
          ) : (
            <>
              <RiGoogleFill />
              Sign in with Google
            </>
          )}
        </button>
      </StyledHomeContent>
    </StyledHomeContainer>
  );
};

export default Home;
