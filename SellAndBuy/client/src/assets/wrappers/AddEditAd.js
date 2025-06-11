import styled from 'styled-components';

const Wrapper = styled.section`
  background: var(--white);
  border-radius: var(--borderRadius);
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--primary-500);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-row {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  textarea,
  select {
    padding: 0.75rem;
    border: 1px solid var(--grey-300);
    border-radius: var(--borderRadius);
    font-size: 1rem;
  }

  .btn-block {
    margin-top: 1rem;
  }
`;

export default Wrapper;
