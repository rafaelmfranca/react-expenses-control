import styled from 'styled-components';

const StyledSummary = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  overflow-x: auto;

  div {
    background: ${({ theme }) => theme.colors.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.textTitle};
    border: 1px solid ${({ theme }) => theme.colors.shapeBorder};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        font-size: 2rem;
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`;

export default StyledSummary;
