import React from 'react';
import { Input } from './styles';

interface Props {
  placeholder: string;
  type?: string;
  defaultValue?: string | undefined;
  value?: string | undefined;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    placeholder: string
  ) => void;
}

const InputField: React.FC<Props> = ({
  placeholder,
  type = 'text',
  defaultValue = undefined,
  value = undefined,
  handleChange,
}: Props) => (
  <Input
    onChange={(e) => handleChange(e, placeholder)}
    type={type}
    value={value}
    placeholder={placeholder}
    defaultValue={defaultValue}
  />
);

export default InputField;
