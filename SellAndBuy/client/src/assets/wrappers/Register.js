import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--primary-700);
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: var(--primary-700);
    }

    input {
      padding: 0.5rem;
      margin-bottom: 1.25rem;
      border: 1px solid var(--grey-300);
      border-radius: var(--border-radius);
      font-size: 1rem;
      transition: border-color 0.3s;

      &:focus {
        outline: none;
        border-color: var(--primary-500);
      }
    }

    button {
      padding: 0.75rem;
      background: var(--primary-500);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      font-weight: 700;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background: var(--primary-700);
      }
    }
  }
`;

export default Wrapper;
