import React, { ReactNode, useState } from 'react';
import { getExchangeRates } from '../../services/exchangeRatesApi';
import { transactionsContextInitialState } from '../../utils/common';
import {
  ITransaction,
  ITransactionsContext,
  ITransactionsContextData
} from '../../utils/types';
import TransactionsContext from './context';
import { v4 as uuidv4 } from 'uuid';

type TransactionsProviderProps = {
  children?: ReactNode;
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
    transaction.exchangeRates = exchangeRates;

    setData({
      ...data,
      transactions: [...data.transactions, transaction]
    });
  };

  const updateTransaction = (transaction: ITransaction) => {
    setData({
      ...data,
      transactions: data.transactions.map((item) =>
        item.id === transaction.id ? transaction : item
      )
    });
  };

  const deleteTransaction = (id: string) => {
    setData({
      ...data,
      transactions: data.transactions.filter(
        (transaction) => transaction.id !== id
      )
    });
  };

  const setIsEditingTransaction = (flag: boolean) => {
    setData((prevData) => ({
      ...prevData,
      isEditing: flag
    }));
  };

  const setTransactionToEdit = (transaction: ITransaction) => {
    setData({
      ...data,
      isEditing: true,
      transactionToEdit: transaction
    });
  };

  const contextValue: ITransactionsContextData = {
    ...data,
    createTransaction,
    deleteTransaction,
    updateTransaction,
    setTransactionToEdit,
    setIsEditingTransaction
  };

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
