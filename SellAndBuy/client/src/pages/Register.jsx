import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/RegisterAndLogin';
import FormRow from '../components/FormRow';
import axios from 'axios';
import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        <FormRow type="text" name="username" defaultValue="krsto" />
        <FormRow type="password" name="password" defaultValue="nesto" />
        <FormRow type="password" name="passwordConfirm" defaultValue="nesto" />
        <FormRow type="text" name="phone" defaultValue="nesto" />
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
