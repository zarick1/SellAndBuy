import React from 'react';
import {
  Link,
  useNavigate,
  useLoaderData,
  useRevalidator,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import axios from 'axios';

export const loader = async () => {
  try {
    const { data } = await axios.get('/api/v1/users/current-user', {
      withCredentials: true,
    });
    return data;
  } catch (err) {
    //console.error(err);
    return { data: { user: null } };
  }
};

const Navbar = () => {
  const data = useLoaderData();
  const { user } = data.data;
  //console.log(data);
  const navigate = useNavigate();
  const revalidator = useRevalidator();

  const logoutUser = async () => {
    await axios.get('/api/v1/users/logout', { withCredentials: true });
    toast.success('Logging out');
    revalidator.revalidate();
    navigate('/');
  };
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
              <button className="btn-danger" onClick={logoutUser}>
                Log Out
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
