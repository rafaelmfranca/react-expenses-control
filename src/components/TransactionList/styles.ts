import styled from 'styled-components';

const StyledTransactionList = styled.ul`
  margin-top: 2rem;
  list-style-type: none;

  li {
    width: 95%;
    margin: 0 auto;
    padding: 1rem 2rem;

    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 0.5rem;
    box-shadow: var(--shadow-md);

    p:first-of-type {
      color: ${({ theme }) => theme.colors.textTitle};
    }

    p:last-of-type {
      font-size: 1.2rem;

      &.income {
        color: var(--green-400);
      }

      &.expense {
        color: var(--red-400);
      }
    }

    div {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
    }

    & + li {
      margin-top: 0.5rem;
    }

    &.income {
      border-left: 3px solid var(--green-400);
    }

    &.expense {
      border-left: 3px solid var(--red-400);
    }
  }
`;

export default StyledTransactionList;
