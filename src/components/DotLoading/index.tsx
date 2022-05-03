import React from 'react';
import { StyledDotContainer, StyledDot } from './styles';

const DotLoading: React.FC = () => {
  const dotContainerVariannts = {
    start: {
      transition: {
        staggerChildren: 0.1
      }
    },
    end: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const dotVariants = {
    start: {
      y: '0%'
    },
    end: {
      y: '100%'
    }
  };

  const dotTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: 'easeInOut'
  };

  return (
    <StyledDotContainer
      variants={dotContainerVariannts}
      initial="start"
      animate="end"
    >
      <StyledDot variants={dotVariants} transition={dotTransition} />
      <StyledDot variants={dotVariants} transition={dotTransition} />
      <StyledDot variants={dotVariants} transition={dotTransition} />
    </StyledDotContainer>
  );
};

export default DotLoading;
