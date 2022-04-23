import { ITransaction, ITransactionsContext } from './types';

export const transactionFormInitialState: ITransaction = {
  description: '',
  amount: 0,
  currency: 'USD',
  category: 'Other'
};

export const transactionsContextInitialState: ITransactionsContext = {
  isFetching: false,
  transactions: []
};

export const currencies = [
  'USD',
  'CAD',
  'EUR',
  'GBP',
  'ARS',
  'BTC',
  'LTC',
  'JPY',
  'CHF',
  'AUD',
  'CNY',
  'ILS',
  'ETH',
  'XRP',
  'DOGE'
];

export const incomeCategories = [
  'Salary',
  'Investment',
  'Gift',
  'Bonus',
  'Sale',
  'Other'
];

export const expenseCategories = [
  'Food',
  'Transport',
  'Shopping',
  'Entertainment',
  'Health',
  'Rent',
  'Insurance',
  'Taxes',
  'Other'
];
