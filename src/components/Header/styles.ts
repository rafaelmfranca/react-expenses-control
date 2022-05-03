import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.shape};
`;

export const StyledHeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 7rem;
`;
