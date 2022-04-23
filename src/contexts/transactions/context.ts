import { createContext } from 'react';
import { transactionsContextInitialState } from '../../utils/common';

const TransactionsContext = createContext(transactionsContextInitialState);

export default TransactionsContext;
