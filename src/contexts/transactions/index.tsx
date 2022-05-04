import React, { ReactNode, useEffect, useState } from 'react';
import { getExchangeRates } from '../../services/exchangeRatesApi';
import { transactionsContextInitialState } from '../../utils/common';
import {
  ITransaction,
  ITransactionsContext,
  ITransactionsContextData
} from '../../utils/types';
import TransactionsContext from './context';
import { db } from '../../services/firebase';
import useAuth from '../../hooks/useAuth';

type TransactionsProviderProps = {
  children?: ReactNode;
};

const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children
}) => {
  const [data, setData] = useState<ITransactionsContext>(
    transactionsContextInitialState
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const userRef = db.ref(`transactions/${user.id}`);
      userRef.once('value', (user) => {
        const transactions = user.val();

        if (transactions) {
          setData({
            ...transactionsContextInitialState,
            transactions: Object.entries(transactions as ITransaction[]).map(
              ([key, transaction]) => {
                transaction.id = key;
                return transaction;
              }
            )
          });
        }
        setIsLoading(false);
      });
    }
  }, [user]);

  const createTransaction = async (transaction: ITransaction) => {
    const exchangeRates = await getExchangeRates();

    transaction.createdAt = Date();
    transaction.exchangeRates = exchangeRates;

    const userTransactionRef = db.ref(`transactions/${user?.id}`);
    const newTransaction = await userTransactionRef.push(transaction);

    setData({
      ...data,
      transactions: [
        ...data.transactions,
        { ...transaction, id: newTransaction.key }
      ]
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

  const deleteTransaction = async (id: string) => {
    const userTransactionRef = db.ref(`transactions/${user?.id}`);
    await userTransactionRef.child(id).remove();

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
    setIsEditingTransaction,
    isLoading
  };

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
