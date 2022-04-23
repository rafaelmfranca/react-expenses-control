export interface ITransaction {
  id?: string;
  createdAt?: any; // fix that
  type?: string;
  exchangeRates?: object;
  title: string;
  amount: number;
  category: string;
}

export interface ITransactionsContext {
  isFetching: boolean;
  transactions: ITransaction[];
}

export interface ITransactionsContextData extends ITransactionsContext {
  createTransaction: (transaction: ITransaction) => void;
}
