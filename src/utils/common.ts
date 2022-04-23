import { ITransaction, ITransactionsContext } from './types';

export const transactionFormInitialState: ITransaction = {
  title: '',
  amount: 0,
  category: ''
};

export const transactionsContextInitialState: ITransactionsContext = {
  isFetching: false,
  error: '',
  transactions: []
};
