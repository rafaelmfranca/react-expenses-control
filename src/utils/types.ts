export interface ITransaction {
  id?: string;
  date?: any; // fix that
  type?: string;
  title: string;
  amount: number;
  category: string;
}

export interface ITransactionsContext {
  isFetching: boolean;
  error: string;
  transactions: ITransaction[];
}
