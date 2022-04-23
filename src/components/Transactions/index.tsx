import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import StyledTransactions from './styles';
import { ITransaction } from '../../utils/constants';
import TransactionList from '../TransactionList/index';
import useMediaQuery from '../../hooks/useMediaQuery';
import TransactionTable from '../TransactionTable';
import { GoSettings } from 'react-icons/go';

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const isSmallScreen = useMediaQuery('(max-width: 568px)');

  useEffect(() => {
    (async () => {
      const { data } = await api.get('transactions');
      setTransactions(data.transactions);
    })();
  }, []);

  return (
    <StyledTransactions>
      <section>
        <h3>Transactions</h3>
        <button>
          <GoSettings />
        </button>
      </section>
      {isSmallScreen ? (
        <TransactionList transactions={transactions} />
      ) : (
        <TransactionTable transactions={transactions} />
      )}
    </StyledTransactions>
  );
};

export default Transactions;
