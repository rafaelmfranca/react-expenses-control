import React from 'react';
import StyledOverview from './styles';
import Summary from '../Summary/index';
import Transactions from '../Transactions';
import FabButton from '../FabButton';

const Overview: React.FC = () => {
  return (
    <StyledOverview>
      <Summary />
      <Transactions />
      <FabButton />
    </StyledOverview>
  );
};

export default Overview;
