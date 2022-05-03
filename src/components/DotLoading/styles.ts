import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledDotContainer = styled(motion.div)`
  margin: 0 auto;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.25rem;
  gap: 0.25rem;
`;

export const StyledDot = styled(motion.span)`
  display: block;
  width: 0.3rem;
  height: 0.3rem;
  background: ${({ theme }) => theme.colors.textBody};
  border-radius: 50%;
`;
