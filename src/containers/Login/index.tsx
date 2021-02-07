import React, { useState } from 'react';
import CustomButton from '../../components/Button';
import InputField from '../../components/Input';
import { Wrapper, Title, Form } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    placeholder: string
  ) => {
    if (placeholder.toLowerCase() === 'email') setEmail(e.target.value);
    if (placeholder.toLowerCase() === 'contraseña') setPwd(e.target.value);
  };

  const onLogin = () => {
    // dispatch action to login
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      <Form>
        <InputField
          placeholder='Email'
          value={email}
          handleChange={changeInput}
        />
        <InputField
          placeholder='Contraseña'
          value={pwd}
          handleChange={changeInput}
        />
      </Form>
      <CustomButton label='Login' handleClick={onLogin} />
    </Wrapper>
  );
};

export default Login;
