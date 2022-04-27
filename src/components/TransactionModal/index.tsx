import React, { FormEvent, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { StyledTransactionForm, StyledButton } from './styles';
import { RiCloseFill } from 'react-icons/ri';
import {
  currencies,
  transactionFormInitialState,
  incomeCategories,
  expenseCategories
} from '../../utils/common';
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
  const { createTransaction, isEditing, transactionToEdit, updateTransaction } =
    useContext(TransactionsContext);
  const [transactionForm, setTransactionForm] = useState({
    ...transactionFormInitialState
  });

  useEffect(() => {
    if (transactionToEdit && isEditing) {
      setTransactionForm({ ...transactionToEdit });
    }
  }, [isEditing]);

  const handleCreateTransaction = (e: FormEvent) => {
    e.preventDefault();

    transactionForm.type = transactionType;

    createTransaction(transactionForm);

    setTransactionForm({ ...transactionFormInitialState });
    onRequestClose();
  };

  const handleUpdateTransaction = (e: FormEvent) => {
    e.preventDefault();

    updateTransaction(transactionForm);

    setTransactionForm({ ...transactionFormInitialState });
    onRequestClose();
  };

  const handleTransactionFormChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setTransactionForm({ ...transactionForm, [name]: value });
  };

  const categories =
    transactionType === 'income' ? incomeCategories : expenseCategories;

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
      <StyledTransactionForm
        onSubmit={isEditing ? handleUpdateTransaction : handleCreateTransaction}
      >
        <h2>Register transaction</h2>
        <input
          type="text"
          placeholder="Description"
          value={transactionForm.description}
          name="description"
          onChange={handleTransactionFormChange}
        />
        <input
          type="number"
          placeholder="Amount"
          value={transactionForm.amount}
          name="amount"
          onChange={handleTransactionFormChange}
        />
        <div>
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            value={transactionForm.category}
            onChange={handleTransactionFormChange}
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="currency">Currency:</label>
          <select
            name="currency"
            id="currency"
            value={transactionForm.currency}
            onChange={handleTransactionFormChange}
          >
            {currencies.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <StyledButton
          type="submit"
          color={
            isEditing
              ? transactionForm.type === 'expense'
                ? 'red'
                : 'green'
              : transactionType === 'expense'
              ? 'red'
              : 'green'
          }
        >
          {`${
            isEditing
              ? `Edit ${transactionForm.type}`
              : `Add ${transactionType}`
          }`}
        </StyledButton>
      </StyledTransactionForm>
    </Modal>
  );
};

export default TransactionModal;
