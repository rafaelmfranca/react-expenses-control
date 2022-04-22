import React, { useState } from 'react';
import StyledOverview from './styles';
import Summary from '../Summary/index';
import Transactions from '../Transactions';
import FabButton from '../FabButton';
import TransactionModal from '../TransactionModal';

const Overview: React.FC = () => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState('expense');

  const handleOpenTransactionModal = (type: string) => {
    setTransactionType(type);
    setIsTransactionModalOpen(true);
  };

  const handleCloseTransactionModal = () => {
    setIsTransactionModalOpen(false);
  };

  return (
    <StyledOverview>
      <Summary />
      <Transactions />
      <FabButton onOpenTransactionModal={handleOpenTransactionModal} />
      <TransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
        transactionType={transactionType}
      />
    </StyledOverview>
  );
};

export default Overview;
