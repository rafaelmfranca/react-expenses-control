import React from 'react';
import StyledOverview from './styles';
import Summary from '../Summary/index';

const Overview: React.FC = () => {
  return (
    <StyledOverview>
      <Summary />
    </StyledOverview>
  );
};

export default Overview;
