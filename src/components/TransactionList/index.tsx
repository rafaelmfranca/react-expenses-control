import React from 'react';
import StyledTransactionList from './styles';
import { ITransaction } from '../../utils/types';
import { MdEdit, MdDelete } from 'react-icons/md';

type TransactionListProps = {
  transactions: ITransaction[];
  onOpenDeleteTransactionModal: (id: string) => void;
};

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onOpenDeleteTransactionModal
}) => {
  return (
    <StyledTransactionList>
      {transactions.map((transaction) => (
        <li key={transaction.id} className={transaction.type}>
          <div>
            <p>{transaction.description}</p>
            <div>
              <button type="button">
                <MdEdit />
              </button>
              <button
                type="button"
                onClick={() => onOpenDeleteTransactionModal(transaction.id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
          <p className={transaction.type}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: `${transaction.currency}`
            }).format(transaction.amount)}
          </p>
          <div>
            <span>{transaction.category}</span>
            <span>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}
            </span>
          </div>
        </li>
      ))}
    </StyledTransactionList>
  );
};

export default TransactionList;
