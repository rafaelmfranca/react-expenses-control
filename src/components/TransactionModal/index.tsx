import React from 'react';
import Modal from 'react-modal';
import { StyledTransactionForm, StyledButton } from './styles';
import { RiCloseFill } from 'react-icons/ri';

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
      <StyledTransactionForm>
        <h2>Register transaction</h2>
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Value" />
        <input type="text" placeholder="Category" />
        <StyledButton
          type="submit"
          color={transactionType === 'expense' ? 'red' : 'green'}
        >{`Add ${transactionType}`}</StyledButton>
      </StyledTransactionForm>
    </Modal>
  );
};

export default TransactionModal;
