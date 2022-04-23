export interface ITransaction {
  id?: string;
  date?: any; // fix that
  type?: string;
  title: string;
  amount: number;
  category: string;
}

export const transactionFormInitialState: ITransaction = {
  title: '',
  amount: 0,
  category: ''
};
