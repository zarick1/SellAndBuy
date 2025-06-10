import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  position: sticky;
  top: 0;
  z-index: 1000;

  .nav-center {
    display: flex;
    width: 95vw;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 310px;
    height: 70px;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;

    img {
      height: 300px;
      width: auto;
      display: block;
      border-radius: 8px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .btn-container {
    display: flex;
    align-items: center;
  }

  button {
    cursor: pointer;
    color: var(--primary-500);
    background: var(--primary-200);
    border: none;
    border-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    text-transform: capitalize;
    margin-left: 1rem;
    font-weight: 600;
    font-size: 0.9rem;

    &:hover {
      color: var(--primary-200);
      background: var(--primary-700);
      box-shadow: var(--shadow-3);
    }
  }

  .btn-danger {
    color: var(--red-dark);
    background: var(--red-light);

    &:hover {
      color: var(--white);
      background: var(--red-dark);
    }
  }

  .user-greeting {
    margin-right: 1rem;
    font-weight: 600;
    color: var(--primary-700);
  }
`;
export default Wrapper;
