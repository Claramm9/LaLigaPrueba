import styled from 'styled-components';
import { PRIMARY_WHITE, SECONDARY_GREEN } from '../../../base/styles/skin';

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid ${SECONDARY_GREEN};
  background-color: ${SECONDARY_GREEN};
  color: ${PRIMARY_WHITE};
  outline: none;
  cursor: pointer;
  margin: 20px 0;
  padding: 8px 22px;
`;
