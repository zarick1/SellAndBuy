import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/RegisterAndLogin';
import FormRow from '../components/FormRow';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="krsto" />
        <FormRow type="password" name="password" defaultValue="nesto" />
        <FormRow type="text" name="phone" defaultValue="nesto" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
