import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: var(--background-color);
  padding-top: 5rem;

  .form-container {
    background: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    width: 100%;
    max-width: 400px;
  }

  h3 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--primary-700);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.75rem;
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
    font-size: 1rem;
  }

  button {
    padding: 0.75rem;
    background: var(--primary-500);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: var(--primary-700);
    }
  }
`;

export default Wrapper;
