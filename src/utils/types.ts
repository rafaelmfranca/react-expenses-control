export interface ITransaction {
  id?: any; // fix that
  createdAt?: any; // fix that
  type?: string;
  exchangeRates?: any; // fix that
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
  deleteTransaction: (id: string) => void;
}
