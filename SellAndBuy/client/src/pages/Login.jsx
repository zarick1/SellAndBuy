import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Login';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // Simulate login
    localStorage.setItem('user', JSON.stringify({ username }));
    navigate('/');
  };

  return (
    <Wrapper>
      <div className="form-container">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
