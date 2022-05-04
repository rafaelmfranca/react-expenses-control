import React, { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { StyledTransactionForm, StyledButton } from './styles';
import { RiCloseFill } from 'react-icons/ri';
import {
  currencies,
  transactionFormInitialState,
  incomeCategories,
  expenseCategories
} from '../../utils/common';
import useTransactions from '../../hooks/useTransactions';

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
    useTransactions();
  const [transactionForm, setTransactionForm] = useState({
    ...transactionFormInitialState
  });

  useEffect(() => {
    if (transactionToEdit && isEditing) {
      setTransactionForm({ ...transactionToEdit });
    } else {
      setTransactionForm({ ...transactionFormInitialState });
    }
  }, [isEditing]);

  const handleCreateTransaction = async (e: FormEvent) => {
    e.preventDefault();

    transactionForm.type = transactionType;

    await createTransaction(transactionForm);

    setTransactionForm({ ...transactionFormInitialState });
    onRequestClose();
  };

  const handleUpdateTransaction = async (e: FormEvent) => {
    e.preventDefault();

    await updateTransaction(transactionForm);

    setTransactionForm({ ...transactionFormInitialState });
    onRequestClose();
  };

  const handleTransactionFormChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setTransactionForm({ ...transactionForm, [name]: value });
  };

  const getCategories = () => {
    let categories = [];

    if (isEditing) {
      categories =
        transactionForm.type === 'income'
          ? incomeCategories
          : expenseCategories;
    } else {
      categories =
        transactionType === 'income' ? incomeCategories : expenseCategories;
    }

    return categories;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="ReactModal__Overlay"
      className="ReactModal__Content"
      closeTimeoutMS={100}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="ReactModal__CloseBtn"
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
          minLength={1}
          required={true}
          autoFocus
        />
        <input
          type="number"
          placeholder="Amount"
          value={transactionForm.amount}
          name="amount"
          onChange={handleTransactionFormChange}
          min="1"
        />
        <div>
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            value={transactionForm.category}
            onChange={handleTransactionFormChange}
          >
            {getCategories().map((category) => (
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
