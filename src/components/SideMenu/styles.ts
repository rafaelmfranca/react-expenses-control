import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSideMenu = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 10000;

  box-shadow: var(--shadow-lg);

  section {
    width: 100%;
    margin: 2rem 1rem;
    line-height: 3rem;

    button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;
      padding: 0.5rem 1rem;

      border: none;
      background: transparent;
      color: ${({ theme }) => theme.colors.textBody};
      transition: background 250ms linear;
      border-radius: 0.5rem;

      font-size: 1rem;
      font-weight: 500;

      width: 90%;
      height: 2.5rem;
      text-transform: capitalize;

      svg {
        font-size: 1.3rem;
      }

      &:hover {
        background: ${({ theme }) => theme.colors.shapeBorder};
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;

      width: 90%;
      margin-top: 0.5rem;
      height: 2.5rem;
      padding: 0 1rem;

      color: ${({ theme }) => theme.colors.textBody};
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
      text-transform: capitalize;

      transition: background 250ms linear;
      border-radius: 0.5rem;

      svg {
        font-size: 1.3rem;
      }

      &:hover {
        background: ${({ theme }) => theme.colors.shapeBorder};
      }
    }
  }
`;

export const StyledInnerNav = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.shape};
  border-radius: 0 0.5rem 0.5rem 0;

  ul {
    width: 90%;
    top: 6rem;
    margin: 0 auto;
    position: relative;
  }

  li {
    list-style: none;
    cursor: pointer;
    line-height: 3rem;
    padding: 0 1rem;

    background: transparent;
    transition: background 250ms linear;
    border-radius: 0.5rem;

    &:hover {
      background: ${({ theme }) => theme.colors.shapeBorder};
    }

    & + li {
      margin-top: 0.5rem;
    }
  }

  li a {
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textBody};

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    svg {
      font-size: 1.3rem;
    }
  }
`;

export const StyledMenuButton = styled(motion.button)`
  background-color: var(--sky-500);
  border: none;
  outline: none;
  position: fixed;

  top: 1.2rem;
  left: 1.2rem;

  z-index: 10001;
  padding: 0.3rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.shape};
  }
`;

export const StyledOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.modalOverlayBackground};
  backdrop-filter: blur(3px);

  z-index: ${(props) => (props.animate === 'open' ? '9999' : '-1')};
`;
