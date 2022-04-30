import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --sky-300: #7dd3fc;
    --sky-400: #38bdf8; 
    --sky-500: #0ea5e9;

    --green-400: #4ade80;
    --green-500: #22c55e;
    --red-400: #f87171;
    --red-500: #ef4444;

    --shadow-md: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textBody};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .ReactModal__Overlay {
    background-color: ${({ theme }) => theme.colors.modalOverlayBackground};
    backdrop-filter: blur(3px);

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    opacity: 0;
    transition: opacity 250ms ease-in-out;

    @media (max-width: 728px) {
      align-items: flex-end;
      z-index: 9999;
    }
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .ReactModal__Content {
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    
    background: ${({ theme }) => theme.colors.shape};
    border-radius: 0.5rem;
    box-shadow: var(--shadow-lg);

    @media (max-width: 728px) {
      max-width: 100%;
      border-radius: 1rem 1rem 0 0;
    }
  }

  .ReactModal__CloseBtn {
    position: absolute;
    right: 1rem;
    top: 1rem;

    border: none;
    background: transparent;

    svg {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.textBody};
      transition: filter 0.25s linear;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export default GlobalStyle;
