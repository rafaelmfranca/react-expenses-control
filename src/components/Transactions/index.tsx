import React, { memo, useContext } from 'react';
import { StyledTransactions, StyledEmptyTransactions } from './styles';
import TransactionList from '../TransactionList/index';
import useMediaQuery from '../../hooks/useMediaQuery';
import TransactionTable from '../TransactionTable';
import { GoSettings } from 'react-icons/go';
import TransactionsContext from '../../contexts/transactions/context';
import noDataImg from '../../assets/noData.svg';
import { ITransaction } from '../../utils/types';

type TransactionsType = {
  onOpenDeleteTransactionModal: (id: string) => void;
  onOpenEditTransactionModal: (transaction: ITransaction) => void;
};

const Transactions: React.FC<TransactionsType> = memo(
  ({ onOpenDeleteTransactionModal, onOpenEditTransactionModal }) => {
    const { transactions } = useContext(TransactionsContext);
    const isSmallScreen = useMediaQuery('(max-width: 568px)');

    return (
      <StyledTransactions>
        <section>
          <h3>Transactions</h3>
          <button>
            <GoSettings />
          </button>
        </section>
        {transactions.length > 0 ? (
          <>
            {isSmallScreen ? (
              <TransactionList
                transactions={transactions}
                onOpenDeleteTransactionModal={onOpenDeleteTransactionModal}
                onOpenEditTransactionModal={onOpenEditTransactionModal}
              />
            ) : (
              <TransactionTable
                transactions={transactions}
                onOpenDeleteTransactionModal={onOpenDeleteTransactionModal}
                onOpenEditTransactionModal={onOpenEditTransactionModal}
              />
            )}
          </>
        ) : (
          <StyledEmptyTransactions>
            <img src={noDataImg} alt="No data" />
            <h3>Oops!</h3>
            <p>Nothing to see here!</p>
          </StyledEmptyTransactions>
        )}
      </StyledTransactions>
    );
  }
);

export default Transactions;
