import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import StyledTransactions from './styles';
import { ITransaction } from '../../utils/constants';

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('transactions');
      setTransactions(data.transactions);
    })();
  }, []);

  return (
    <StyledTransactions>
      {transactions.length > 0 && (
        <table>
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
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.date)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </StyledTransactions>
  );
};

export default Transactions;
