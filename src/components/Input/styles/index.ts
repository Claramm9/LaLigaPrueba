import styled from 'styled-components';
import { DESKTOP } from '../../../base/styles/media-queries';
import { PRIMARY_WHITE } from '../../../base/styles/skin';

interface StyledInputProps {
  margin?: string;
  width?: string;
}

export const Input = styled.input`
  border-radius: 10px;
  margin: 10px 0;
  outline: none;
  border: 1px solid ${PRIMARY_WHITE};
  padding: 8px;

  ${DESKTOP} {
    margin: ${({ margin }: StyledInputProps) => margin || '10px 0'};
    width: ${({ width }: StyledInputProps) => width || 'auto'};
  }
`;
