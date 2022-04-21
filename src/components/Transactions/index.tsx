import React, { useEffect } from 'react';
import api from '../../services/api';
import StyledTransactions from './styles';

const Transactions: React.FC = () => {
  useEffect(() => {
    (async () => {
      const { data } = await api.get('transactions');
      console.log(data);
    })();
  }, []);

  return (
    <StyledTransactions>
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
          <tr>
            <td>Lorem ipsum dolor sit amet</td>
            <td className="income">R$ 1000,00</td>
            <td>Lorem ipsum</td>
            <td>21/04/2022</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet</td>
            <td className="expense">- R$ 500,00</td>
            <td>Lorem ipsum</td>
            <td>21/04/2022</td>
          </tr>
        </tbody>
      </table>
    </StyledTransactions>
  );
};

export default Transactions;
