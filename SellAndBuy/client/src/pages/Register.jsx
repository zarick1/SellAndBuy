import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Register';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'phone' && !/^\d*$/.test(value)) {
      return; // samo cifre dozvoljene
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log('Register data:', formData);
    navigate('/login');
  };

  return (
    <Wrapper>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </Wrapper>
  );
};

export default Register;
