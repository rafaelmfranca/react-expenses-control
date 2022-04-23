import React, { useContext } from 'react';
import {
  RiArrowDownCircleFill,
  RiArrowUpCircleFill,
  RiSwapFill
} from 'react-icons/ri';
import TransactionsContext from '../../contexts/transactions/context';
import StyledSummary from './styles';

const Summary: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.incomes += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.expenses += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      incomes: 0,
      expenses: 0,
      total: 0
    }
  );

  return (
    <StyledSummary>
      <div>
        <header>
          <p>Incomes</p>
          <RiArrowUpCircleFill style={{ color: 'var(--green-400)' }} />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.incomes)}
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <RiArrowDownCircleFill style={{ color: 'var(--red-400)' }} />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.expenses)}
        </strong>
      </div>
      <div>
        <header>
          <p>Balance</p>
          <RiSwapFill style={{ color: 'var(--sky-400)' }} />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </StyledSummary>
  );
};

export default Summary;
