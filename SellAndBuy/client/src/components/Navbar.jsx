import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/ads/new">New Ad</Link>
    </nav>
  );
};

export default Navbar;
