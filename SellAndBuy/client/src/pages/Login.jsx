import FormRow from '../components/FormRow';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/RegisterAndLogin';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="text" name="username" defaultValue="krsto" />
        <FormRow type="password" name="password" defaultValue="nesto" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
