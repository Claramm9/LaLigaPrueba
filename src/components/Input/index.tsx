import React from 'react';
import { Input } from './styles';

interface Props {
  placeholder: string;
  type?: string;
  margin?: string;
  width?: string;
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
  margin,
  width,
  defaultValue = undefined,
  value = undefined,
  handleChange,
}: Props) => (
  <Input
    onChange={(e) => handleChange(e, placeholder)}
    type={type}
    margin={margin}
    value={value}
    width={width}
    placeholder={placeholder}
    defaultValue={defaultValue}
  />
);

export default InputField;
