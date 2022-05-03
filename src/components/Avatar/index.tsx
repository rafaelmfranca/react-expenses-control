import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useAuth from '../../hooks/useAuth';
import StyledAvatar from './styles';
import 'react-loading-skeleton/dist/skeleton.css';

const Avatar: React.FC = () => {
  const { user } = useAuth();

  return (
    <StyledAvatar>
      {user ? (
        <img src={user.avatar} alt={`${user.name}'s avatar`} />
      ) : (
        <SkeletonTheme>
          <Skeleton circle height="2.1rem" width="2.1rem" />
        </SkeletonTheme>
      )}
    </StyledAvatar>
  );
};

export default Avatar;
