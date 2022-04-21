import styled from 'styled-components';

export const StyledHeader = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;

    svg {
      font-size: 1.2rem;
      color: var(--sky-500);
    }
  }
`;
