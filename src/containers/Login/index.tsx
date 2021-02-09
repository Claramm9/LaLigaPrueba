import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/Button';
import InputField from '../../components/Input';
import { loginUser } from './actions';
import { getLoginError, getLoginToken } from './selectors';
import { Wrapper, Title, Form, ErrorText } from './styles';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(getLoginToken);
  const loginError = useSelector(getLoginError);

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    if (token.length) {
      history.push('/users');
    } else {
      history.push('/');
    }
  }, [token]);

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    placeholder: string
  ) => {
    if (placeholder.toLowerCase() === 'email') setEmail(e.target.value);
    if (placeholder.toLowerCase() === 'contraseña') setPwd(e.target.value);
  };

  const onLogin = () => {
    dispatch(loginUser({ email, password: pwd }));
  };

  return (
    <Wrapper>
      <Title>Iniciar sesión</Title>
      <Form>
        <InputField
          placeholder='Email'
          value={email}
          handleChange={changeInput}
        />
        <InputField
          placeholder='Contraseña'
          value={pwd}
          type='password'
          handleChange={changeInput}
        />
      </Form>
      {loginError && <ErrorText>Usuario o contraseña no válidos</ErrorText>}
      <CustomButton label='Entrar' handleClick={onLogin} />
    </Wrapper>
  );
};

export default Login;
