import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';

const Navbar = () => {
  const navigate = useNavigate();

  const user = false;
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <div className="btn-container">
          {user ? (
            <>
              <span className="user-greeting">Hello, {user.username}</span>
              <button onClick={() => navigate('/add-ad')}>Add Ad</button>
              <button className="btn-danger" onClick="">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/login')}>Login</button>
              <button onClick={() => navigate('/register')}>Sign Up</button>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
