import { Link, redirect, Form, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import FormRow from '../components/FormRow';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/RegisterAndLogin';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post('/api/v1/users/login', data);
    toast.success('Login successful');
    return redirect('/');
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.err?.message || 'Login failed');
    return null;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="text" name="username" required={true} />
        <FormRow type="password" name="password" required={true} />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
