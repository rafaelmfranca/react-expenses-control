import styled from 'styled-components';

const StyledTransactionList = styled.ul`
  margin-top: 2rem;
  list-style-type: none;
  padding-bottom: 7.5rem;

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

    div:first-of-type {
      display: flex;
      justify-content: space-between;

      div {
        margin-left: 1rem;
        gap: 0.5rem;

        button {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: filter 0.25s linear;

          &:hover {
            filter: brightness(1.2);
          }

          svg {
            color: ${({ theme }) => theme.colors.textBody};
            font-size: 1.3rem;
          }
        }
      }
    }

    div:nth-of-type(2) {
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
