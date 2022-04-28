import styled from 'styled-components';

const StyledDeleteTransaction = styled.div`
  h2 {
    color: ${(props) => props.theme.colors.textTitle};
    margin-bottom: 1.5rem;
  }

  div {
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;

    button {
      width: 8rem;
      padding: 0.5rem;
      font-weight: 500;
      font-size: 1rem;

      border: none;
      border-radius: 0.5rem;

      &:first-of-type {
        background: transparent;
        transition: background 0.25s linear;
        color: ${(props) => props.theme.colors.textTitle};

        &:hover {
          background: ${(props) => props.theme.colors.shapeBorder};
        }
      }

      &:nth-of-type(2) {
        background: var(--red-400);
        color: white;
        transition: background 0.25s linear;

        &:hover {
          background: var(--red-500);
        }
      }
    }
  }
`;

export default StyledDeleteTransaction;
