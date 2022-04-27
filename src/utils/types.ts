export interface ITransaction {
  id?: any; // fix that
  createdAt?: any; // fix that
  type?: string;
  exchangeRates?: any; // fix that
  description: string;
  amount: string;
  category: string;
  currency: string;
}

export interface ITransactionsContext {
  isFetching: boolean;
  isEditing: boolean;
  transactionToEdit?: ITransaction;
  transactions: ITransaction[];
}

export interface ITransactionsContextData extends ITransactionsContext {
  createTransaction: (transaction: ITransaction) => void;
  deleteTransaction: (id: string) => void;
  updateTransaction: (transaction: ITransaction) => void;
  setTransactionToEdit: (transaction: ITransaction) => void;
  setIsEditingTransaction: (flag: boolean) => void;
}
