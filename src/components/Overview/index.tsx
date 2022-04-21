import React from 'react';
import StyledOverview from './styles';
import Summary from '../Summary/index';
import Transactions from '../Transactions';

const Overview: React.FC = () => {
  return (
    <StyledOverview>
      <Summary />
      <Transactions />
    </StyledOverview>
  );
};

export default Overview;
