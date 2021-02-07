import styled from 'styled-components';
import { PRIMARY_WHITE, SECONDARY_ORANGE } from '../../../base/styles/skin';

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid ${SECONDARY_ORANGE};
  background-color: ${SECONDARY_ORANGE};
  color: ${PRIMARY_WHITE};
  outline: none;
  cursor: pointer;
  margin: 20px 0;
  padding: 8px 22px;
`;
