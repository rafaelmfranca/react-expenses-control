import React, { useState } from 'react';
import { getExchangeRates } from '../../services/api';
import { transactionsContextInitialState } from '../../utils/common';
import {
  ITransaction,
  ITransactionsContext,
  ITransactionsContextData
} from '../../utils/types';
import TransactionsContext from './context';
import { v4 as uuidv4 } from 'uuid';

type TransactionsProviderProps = {
  children?: React.ReactNode;
};

const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children
}) => {
  const [data, setData] = useState<ITransactionsContext>(
    transactionsContextInitialState
  );

  const createTransaction = async (transaction: ITransaction) => {
    // TODO: set loading
    const exchangeRates = await getExchangeRates();

    transaction.id = uuidv4();
    transaction.createdAt = new Date();
    transaction.amount = Number(transaction.amount);
    transaction.exchangeRates = exchangeRates;

    setData({
      ...data,
      transactions: [...data.transactions, transaction]
    });
  };

  const contextValue: ITransactionsContextData = {
    ...data,
    createTransaction
  };

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
