import styled from 'styled-components';

export const StyledHomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const StyledHomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  background: ${({ theme }) => theme.colors.shape};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-md);

  width: 100%;
  max-width: 320px;

  .separator {
    font-size: 0.8rem;

    width: 100%;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.shapeBorder};
    line-height: 0.1rem;

    span {
      background: ${({ theme }) => theme.colors.shape};
      padding: 0 0.5rem;
    }
  }

  button {
    width: 90%;
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 0.9rem;
    font-weight: 500;
    transition: background 250ms linear;

    padding: 0.5rem 1.2rem;
    border: 1px solid ${({ theme }) => theme.colors.shapeBorder};
    outline: none;

    background: transparent;
    color: ${({ theme }) => theme.colors.textBody};
    border-radius: 0.5rem;

    svg {
      font-size: 1.3rem;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.shapeBorder};
    }
  }

  @media (max-width: 375px) {
    background: transparent;
    box-shadow: none;

    .separator {
      span {
        background: ${({ theme }) => theme.colors.background};
      }
    }
  }
`;
