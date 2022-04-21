import styled from 'styled-components';

const StyledTransactions = styled.div`
  margin-top: 4rem;

  table {
    margin: 0 auto;
    width: 95%;
    border-spacing: 0 0.5rem;
    border-collapse: separate;

    th {
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody tr {
      border-radius: 0.5rem;
      box-shadow: var(--shadow-md);
    }

    td {
      padding: 1rem 2rem;
      background: ${({ theme }) => theme.colors.shape};

      &:first-of-type {
        border-radius: 0.5rem 0 0 0.5rem;
        color: ${({ theme }) => theme.colors.textTitle};
      }

      &:last-of-type {
        border-radius: 0 0.5rem 0.5rem 0;
      }

      &.income {
        color: var(--green-400);
      }

      &.expense {
        color: var(--red-400);
      }
    }
  }
`;

export default StyledTransactions;
