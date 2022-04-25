import styled from 'styled-components';

export const StyledTransactions = styled.div`
  margin-top: 3rem;

  section {
    width: 95%;
    margin: 0 auto;
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.shapeBorder};

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.colors.textBody};
      transition: filter 0.25s linear;

      display: flex;
      align-items: center;

      &:hover {
        filter: brightness(1.2);
      }

      svg {
        font-size: 1.2rem;
        stroke-width: 0.5;
      }
    }
  }
`;

export const StyledEmptyTransactions = styled.div`
  margin: 4rem auto;
  text-align: center;

  img {
    width: 10rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
  }
`;
