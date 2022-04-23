import React from 'react';
import { ITransaction } from '../../utils/types';
import StyledTransactionTable from './styles';

type TransactionTableProps = {
  transactions: ITransaction[];
};

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions
}) => {
  return (
    <StyledTransactionTable>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className={transaction.type}>{transaction.title}</td>
            <td className={transaction.type}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}
            </td>
            <td>{transaction.category}</td>
            <td>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTransactionTable>
  );
};

export default TransactionTable;
