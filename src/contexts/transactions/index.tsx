import React, { useState } from 'react';
import { transactionsContextInitialState } from '../../utils/common';
import { ITransactionsContext } from '../../utils/types';
import TransactionsContext from './context';

type TransactionsProviderProps = {
  children?: React.ReactNode;
};

const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children
}) => {
  const [data, setData] = useState<ITransactionsContext>(
    transactionsContextInitialState
  );

  const contextValue = {
    ...data
  };

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
