import React from 'react';
import { Button } from './styles';

interface Props {
  label: string;
  handleClick: () => void;
}

const Login: React.FC<Props> = ({ label, handleClick }: Props) => (
  <Button onClick={handleClick}>{label}</Button>
);

export default Login;
