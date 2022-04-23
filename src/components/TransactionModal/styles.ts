import styled from 'styled-components';

export const StyledTransactionForm = styled.form`
  h2 {
    color: ${(props) => props.theme.colors.textTitle};
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    border-radius: 0.5rem;
    padding: 1rem;

    font-weight: 500;
    font-size: 1rem;

    background: ${(props) => props.theme.colors.shape};
    color: ${(props) => props.theme.colors.textBody};

    border: none;
    outline: 1px solid ${(props) => props.theme.colors.shapeBorder};
    transition: outline 0.15s ease-in-out;

    ::placeholder {
      color: ${(props) => props.theme.colors.textBody};
    }

    &:focus {
      outline: 1.5px solid ${(props) => props.theme.colors.textBody};
    }

    & + input {
      margin-top: 1rem;
    }
  }

  div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
      font-weight: 500;
      font-size: 0.9rem;
      padding-right: 0.5rem;
    }

    select {
      width: 80%;
      border-radius: 0.5rem;

      padding: 1rem;
      font-weight: 600;
      font-size: 1rem;

      background: ${(props) => props.theme.colors.shape};
      color: ${(props) => props.theme.colors.textBody};

      border: none;
      outline: 1px solid ${(props) => props.theme.colors.shapeBorder};
      transition: outline 0.15s ease-in-out;

      &:focus {
        outline: 1.5px solid ${(props) => props.theme.colors.textBody};
      }
    }
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1.5rem;

  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;

  background: ${(props) => `var(--${props.color}-400)`};
  color: white;

  border: none;
  transition: filter 0.25s linear;

  &:hover {
    filter: contrast(1.1);
  }
`;
