import React from 'react';
import { ITransaction } from '../../utils/constants';
import StyledTransactionList from './styles';

type TransactionListProps = {
  transactions: ITransaction[];
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <StyledTransactionList>
      {transactions.map((transaction) => (
        <li key={transaction.id} className={transaction.type}>
          <p>{transaction.title}</p>
          <p className={transaction.type}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(transaction.amount)}
          </p>
          <div>
            <span>{transaction.category}</span>
            <span>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.date)
              )}
            </span>
          </div>
        </li>
      ))}
    </StyledTransactionList>
  );
};

export default TransactionList;
