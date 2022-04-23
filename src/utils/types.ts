export interface ITransaction {
  id?: string;
  createdAt?: any; // fix that
  type?: string;
  exchangeRates?: object;
  description: string;
  amount: number;
  category: string;
  currency: string;
}

export interface ITransactionsContext {
  isFetching: boolean;
  transactions: ITransaction[];
}

export interface ITransactionsContextData extends ITransactionsContext {
  createTransaction: (transaction: ITransaction) => void;
}
