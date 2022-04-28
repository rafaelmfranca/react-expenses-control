import React from 'react';
import StyledTransactionList from './styles';
import { ITransaction } from '../../utils/types';
import { MdEdit, MdDelete } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

type TransactionListProps = {
  transactions: ITransaction[];
  onOpenDeleteTransactionModal: (id: string) => void;
  onOpenEditTransactionModal: (transaction: ITransaction) => void;
};

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onOpenDeleteTransactionModal,
  onOpenEditTransactionModal
}) => {
  return (
    <StyledTransactionList>
      <AnimatePresence>
        {transactions.map((transaction) => (
          <motion.li
            key={transaction.id}
            className={transaction.type}
            initial={{ opacity: 0, scale: 0, x: '-100vw' }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: '100vw' }}
            transition={{ duration: 0.5 }}
            layout
          >
            <div>
              <p>{transaction.description}</p>
              <div>
                <button
                  type="button"
                  onClick={() => onOpenEditTransactionModal(transaction)}
                >
                  <MdEdit title={`Edit ${transaction.type}`} />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenDeleteTransactionModal(transaction.id)}
                >
                  <MdDelete title={`Delete ${transaction.type}`} />
                </button>
              </div>
            </div>
            <p className={transaction.type}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: `${transaction.currency}`
              }).format(Number(transaction.amount))}
            </p>
            <div>
              <span>{transaction.category}</span>
              <span>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </span>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </StyledTransactionList>
  );
};

export default TransactionList;
