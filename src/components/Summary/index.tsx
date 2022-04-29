import React, { useContext } from 'react';
import {
  RiArrowDownCircleFill,
  RiArrowUpCircleFill,
  RiSwapFill
} from 'react-icons/ri';
import TransactionsContext from '../../contexts/transactions/context';
import StyledSummary from './styles';
import AnimatedNumber from 'animated-number-react';

const Summary: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      const { type, amount, currency, exchangeRates } = transaction;

      let convertedAmount = Number(amount);
      if (currency !== 'BRL') {
        convertedAmount = convertedAmount * Number(exchangeRates[currency].ask);
      }

      if (type === 'income') {
        acc.incomes += convertedAmount;
        acc.total += convertedAmount;
      } else {
        acc.expenses += convertedAmount;
        acc.total -= convertedAmount;
      }

      return acc;
    },
    {
      incomes: 0,
      expenses: 0,
      total: 0
    }
  );

  const formatValue = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);

  return (
    <StyledSummary>
      <div>
        <header>
          <p>Incomes</p>
          <RiArrowUpCircleFill style={{ color: 'var(--green-400)' }} />
        </header>
        <strong>
          <AnimatedNumber
            value={summary.incomes}
            formatValue={formatValue}
            duration={500}
          />
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <RiArrowDownCircleFill style={{ color: 'var(--red-400)' }} />
        </header>
        <strong>
          <AnimatedNumber
            value={summary.expenses}
            formatValue={formatValue}
            duration={500}
          />
        </strong>
      </div>
      <div>
        <header>
          <p>Balance</p>
          <RiSwapFill style={{ color: 'var(--sky-400)' }} />
        </header>
        <strong>
          <AnimatedNumber
            value={summary.total}
            formatValue={formatValue}
            duration={500}
          />
        </strong>
      </div>
    </StyledSummary>
  );
};

export default Summary;
