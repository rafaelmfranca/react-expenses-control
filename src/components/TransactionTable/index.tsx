import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { ITransaction } from '../../utils/types';
import StyledTransactionTable from './styles';

type TransactionTableProps = {
  transactions: ITransaction[];
  onOpenDeleteTransactionModal: (id: string) => void;
};

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  onOpenDeleteTransactionModal
}) => {
  return (
    <StyledTransactionTable>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className={transaction.type}>{transaction.description}</td>
            <td className={transaction.type}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: `${transaction.currency}`
              }).format(transaction.amount)}
            </td>
            <td>{transaction.category}</td>
            <td>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}
            </td>
            <td>
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
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTransactionTable>
  );
};

export default TransactionTable;
