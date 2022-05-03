import { useContext } from 'react';
import TransactionsContext from '../contexts/transactions/context';

const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};

export default useTransactions;
