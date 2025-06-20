import axios from 'axios';
import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/RegisterAndLogin';
import FormRow from '../components/FormRow';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    await axios.post('/api/v1/users/signup', data);
    //console.log(data);
    toast.success('Registration successful');
    return redirect('/');
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.err.message || 'Registration failed');

    return err;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="username" required={true} />
        <FormRow type="password" name="password" required={true} />
        <FormRow type="password" name="passwordConfirm" required={true} />
        <FormRow type="text" name="phone" required={true} />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'registration...' : 'register'}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
