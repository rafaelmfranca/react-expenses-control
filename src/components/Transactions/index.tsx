import React, { memo } from 'react';
import { StyledTransactions, StyledEmptyTransactions } from './styles';
import TransactionList from '../TransactionList/index';
import useMediaQuery from '../../hooks/useMediaQuery';
import TransactionTable from '../TransactionTable';
import { GoSettings } from 'react-icons/go';
import noDataImg from '../../assets/noData.svg';
import { ITransaction } from '../../utils/types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useTransactions from '../../hooks/useTransactions';

type TransactionsType = {
  onOpenDeleteTransactionModal: (id: string) => void;
  onOpenEditTransactionModal: (transaction: ITransaction) => void;
};

const Transactions: React.FC<TransactionsType> = memo(
  ({ onOpenDeleteTransactionModal, onOpenEditTransactionModal }) => {
    const { transactions, isLoading } = useTransactions();
    const isSmallScreen = useMediaQuery('(max-width: 568px)');

    return (
      <StyledTransactions>
        <section>
          <h3>Transactions</h3>
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
            {isLoading ? (
              <SkeletonTheme
                width="95%"
                height={isSmallScreen ? '7rem' : '4.5rem'}
              >
                <Skeleton
                  count={isSmallScreen ? 4 : 5}
                  style={{ marginBottom: '0.5rem' }}
                />
              </SkeletonTheme>
            ) : (
              <>
                <img src={noDataImg} alt="No data" />
                <h3>Oops!</h3>
                <p>Nothing to see here!</p>
              </>
            )}
          </StyledEmptyTransactions>
        )}
      </StyledTransactions>
    );
  }
);

export default Transactions;
