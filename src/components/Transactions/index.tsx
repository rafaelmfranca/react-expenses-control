import React, { useContext, useState } from 'react';
import StyledTransactions from './styles';
import { ITransaction } from '../../utils/types';
import TransactionList from '../TransactionList/index';
import useMediaQuery from '../../hooks/useMediaQuery';
import TransactionTable from '../TransactionTable';
import { GoSettings } from 'react-icons/go';
import TransactionsContext from '../../contexts/transactions/context';

const Transactions: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);
  const isSmallScreen = useMediaQuery('(max-width: 568px)');

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
