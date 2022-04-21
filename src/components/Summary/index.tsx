import React from 'react';
import {
  RiArrowDownCircleFill,
  RiArrowUpCircleFill,
  RiSwapFill
} from 'react-icons/ri';
import StyledSummary from './styles';

const Summary: React.FC = () => {
  return (
    <StyledSummary>
      <div>
        <header>
          <p>Incomes</p>
          <RiArrowUpCircleFill style={{ color: 'var(--green-400)' }} />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <RiArrowDownCircleFill style={{ color: 'var(--red-400)' }} />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div>
        <header>
          <p>Balance</p>
          <RiSwapFill style={{ color: 'var(--sky-400)' }} />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </StyledSummary>
  );
};

export default Summary;
