import styled from 'styled-components';

const StyledTransactionTable = styled.table`
  margin: auto;
  width: 95%;
  border-spacing: 0 0.5rem;
  border-collapse: separate;
  padding-bottom: 7rem;

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
    padding: 1.5rem 2rem;
    background: ${({ theme }) => theme.colors.shape};

    &:first-of-type {
      border-radius: 0.5rem 0 0 0.5rem;
      color: ${({ theme }) => theme.colors.textTitle};

      &.income {
        border-left: 3px solid var(--green-400);
      }

      &.expense {
        border-left: 3px solid var(--red-400);
      }
    }

    &:last-of-type {
      border-radius: 0 0.5rem 0.5rem 0;
      padding: 0.5rem;
    }

    &:nth-of-type(2) {
      &.income {
        color: var(--green-400);
      }

      &.expense {
        color: var(--red-400);
      }
    }

    div {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 0.5rem;

      button {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          color: ${({ theme }) => theme.colors.textBody};
          font-size: 1.2rem;
          transition: color 0.25s linear;

          &:hover {
            color: ${({ theme }) => theme.colors.textTitle};
          }
        }
      }
    }
  }
`;

export default StyledTransactionTable;
