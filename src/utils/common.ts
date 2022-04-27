import { ITransaction, ITransactionsContext } from './types';

export const transactionFormInitialState: ITransaction = {
  description: '',
  amount: '0',
  currency: 'BRL',
  category: 'Other'
};

export const transactionsContextInitialState: ITransactionsContext = {
  isFetching: false,
  isEditing: false,
  transactions: []
};

export const currencies = [
  'BRL',
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
  'XRP'
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
