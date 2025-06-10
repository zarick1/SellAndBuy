import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';

const Navbar = () => {
  const [user, setUser] = React.useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/" className="logo">
          <img src="/SellAndBuy.png" alt="SellAndBuy logo" />
        </Link>
        <div className="btn-container">
          {user ? (
            <>
              <span className="user-greeting">Hello, {user.username}</span>
              <button onClick={() => navigate('/add-ad')}>Add Ad</button>
              <button className="btn-danger" onClick={handleSignOut}>
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
