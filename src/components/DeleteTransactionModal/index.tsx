import React from 'react';
import Modal from 'react-modal';
import useTransactions from '../../hooks/useTransactions';
import StyledDeleteTransaction from './styles';

// bind modal for acessibility purposes
Modal.setAppElement('#root');

type DeleteTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  transactionId: string;
};

const DeleteTransactionModal: React.FC<DeleteTransactionModalProps> = ({
  isOpen,
  onRequestClose,
  transactionId
}) => {
  const { deleteTransaction } = useTransactions();

  const handleDeleteTransaction = () => {
    deleteTransaction(transactionId);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <StyledDeleteTransaction>
        <h2>Delete transaction</h2>
        <p>Are you sure you want to delete this transaction?</p>
        <div>
          <button type="button" onClick={onRequestClose}>
            Cancel
          </button>
          <button type="button" onClick={handleDeleteTransaction}>
            Delete
          </button>
        </div>
      </StyledDeleteTransaction>
    </Modal>
  );
};

export default DeleteTransactionModal;
