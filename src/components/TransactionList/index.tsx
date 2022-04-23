import React from 'react';
import StyledTransactionList from './styles';
import { ITransaction } from '../../utils/types';

type TransactionListProps = {
  transactions: ITransaction[];
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <StyledTransactionList>
      {transactions.map((transaction) => (
        <li key={transaction.id} className={transaction.type}>
          <p>{transaction.description}</p>
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
