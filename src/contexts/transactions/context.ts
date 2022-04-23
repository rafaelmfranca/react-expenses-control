import { createContext } from 'react';
import { ITransactionsContextData } from '../../utils/types';

const TransactionsContext = createContext({} as ITransactionsContextData);

export default TransactionsContext;
