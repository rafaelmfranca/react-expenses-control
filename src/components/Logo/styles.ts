import styled from 'styled-components';

const StyledLogo = styled.div`
  h2 {
    margin-top: 0.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.textTitle};

    span {
      color: var(--sky-500);
    }

    svg {
      font-size: 1.8rem;
      margin-right: 0.8rem;
      color: var(--sky-500);
    }
  }
`;

export default StyledLogo;
