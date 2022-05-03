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
  isLoading: boolean;
  createTransaction: (transaction: ITransaction) => Promise<void>;
  deleteTransaction: (id: string) => void;
  updateTransaction: (transaction: ITransaction) => void;
  setTransactionToEdit: (transaction: ITransaction) => void;
  setIsEditingTransaction: (flag: boolean) => void;
}

export interface IUser {
  id: string;
  name: string;
  avatar: string;
}

export interface IAuthContext {
  user: IUser | undefined;
  signInLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}
