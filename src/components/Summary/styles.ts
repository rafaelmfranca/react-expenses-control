import styled from 'styled-components';

const StyledSummary = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  div {
    background: ${({ theme }) => theme.colors.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.textTitle};
    border: 1px solid ${({ theme }) => theme.colors.shapeBorder};
    min-width: 212px;

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
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;

export default StyledSummary;
