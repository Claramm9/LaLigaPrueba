import React from 'react';
import { Input } from './styles';

interface Props {
  placeholder: string;
  type?: string;
  defaultValue?: string | undefined;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Login: React.FC<Props> = ({
  placeholder,
  type = 'text',
  defaultValue = undefined,
  handleChange,
}: Props) => (
  <Input
    onChange={handleChange}
    type={type}
    placeholder={placeholder}
    defaultValue={defaultValue}
  />
);

export default Login;
