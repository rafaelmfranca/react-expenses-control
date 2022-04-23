import React, { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { StyledTransactionForm, StyledButton } from './styles';
import { RiCloseFill } from 'react-icons/ri';
import { transactionFormInitialState } from '../../utils/common';
import TransactionsContext from '../../contexts/transactions/context';

// bind modal for acessibility purposes
Modal.setAppElement('#root');

type TransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  transactionType: string;
};

const TransactionModal: React.FC<TransactionModalProps> = ({
  isOpen,
  onRequestClose,
  transactionType
}) => {
  const { createTransaction } = useContext(TransactionsContext);
  const [transactionForm, setTransactionForm] = useState(
    transactionFormInitialState
  );

  const handleCreateTransaction = (e: FormEvent) => {
    e.preventDefault();

    transactionForm.type = transactionType;
    createTransaction(transactionForm);

    setTransactionForm(transactionFormInitialState);
    onRequestClose();
  };

  const handleTransactionFormChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setTransactionForm({ ...transactionForm, [name]: value });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close-btn"
      >
        <RiCloseFill />
      </button>
      <StyledTransactionForm onSubmit={handleCreateTransaction}>
        <h2>Register transaction</h2>
        <input
          type="text"
          placeholder="Title"
          value={transactionForm.title}
          name="title"
          onChange={handleTransactionFormChange}
        />
        <input
          type="number"
          placeholder="Amount"
          value={transactionForm.amount}
          name="amount"
          onChange={handleTransactionFormChange}
        />
        <input
          type="text"
          placeholder="Category"
          value={transactionForm.category}
          name="category"
          onChange={handleTransactionFormChange}
        />
        <StyledButton
          type="submit"
          color={transactionType === 'expense' ? 'red' : 'green'}
        >{`Add ${transactionType}`}</StyledButton>
      </StyledTransactionForm>
    </Modal>
  );
};

export default TransactionModal;
