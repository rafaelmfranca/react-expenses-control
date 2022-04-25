import React, { useState } from 'react';
import StyledOverview from './styles';
import Summary from '../Summary/index';
import Transactions from '../Transactions';
import FabButton from '../FabButton';
import TransactionModal from '../TransactionModal';
import DeleteTransactionModal from '../DeleteTransactionModal';

const Overview: React.FC = () => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] =
    useState(false);
  const [transactionType, setTransactionType] = useState('expense');
  const [transactionToDelete, setTransactionToDelete] = useState('');

  const handleOpenTransactionModal = (type: string) => {
    setTransactionType(type);
    setIsTransactionModalOpen(true);
  };

  const handleCloseTransactionModal = () => {
    setIsTransactionModalOpen(false);
  };

  const handleOpenDeleteTransactionModal = (id: string) => {
    setTransactionToDelete(id);
    setIsDeleteTransactionModalOpen(true);
  };

  const handleCloseDeleteTransactionModal = () => {
    setIsDeleteTransactionModalOpen(false);
  };

  return (
    <StyledOverview>
      <Summary />
      <Transactions
        onOpenDeleteTransactionModal={handleOpenDeleteTransactionModal}
      />
      <FabButton onOpenTransactionModal={handleOpenTransactionModal} />
      <TransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
        transactionType={transactionType}
      />
      <DeleteTransactionModal
        isOpen={isDeleteTransactionModalOpen}
        onRequestClose={handleCloseDeleteTransactionModal}
        transactionId={transactionToDelete}
      />
    </StyledOverview>
  );
};

export default Overview;
