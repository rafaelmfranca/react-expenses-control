import React, { useContext, useState } from 'react';
import StyledOverview from './styles';
import Summary from '../../components/Summary/index';
import Transactions from '../../components/Transactions';
import FabButton from '../../components/FabButton';
import TransactionModal from '../../components/TransactionModal';
import DeleteTransactionModal from '../../components/DeleteTransactionModal';
import TransactionsContext from '../../contexts/transactions/context';
import { ITransaction } from '../../utils/types';

const Overview: React.FC = () => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] =
    useState(false);
  const [transactionType, setTransactionType] = useState('expense');
  const [transactionToDelete, setTransactionToDelete] = useState('');
  const { isEditing, setTransactionToEdit, setIsEditingTransaction } =
    useContext(TransactionsContext);

  const handleOpenTransactionModal = (type: string) => {
    setTransactionType(type);
    setIsTransactionModalOpen(true);
  };

  const handleCloseTransactionModal = () => {
    isEditing && setIsEditingTransaction(false);
    setIsTransactionModalOpen(false);
  };

  const handleOpenDeleteTransactionModal = (id: string) => {
    setTransactionToDelete(id);
    setIsDeleteTransactionModalOpen(true);
  };

  const handleCloseDeleteTransactionModal = () => {
    setIsDeleteTransactionModalOpen(false);
  };

  const handleOpenEditTransactionModal = (transaction: ITransaction) => {
    setTransactionToEdit(transaction);
    setIsTransactionModalOpen(true);
  };

  return (
    <StyledOverview>
      <Summary />
      <Transactions
        onOpenDeleteTransactionModal={handleOpenDeleteTransactionModal}
        onOpenEditTransactionModal={handleOpenEditTransactionModal}
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
