import styled from 'styled-components';
import { PRIMARY_BLUE, PRIMARY_WHITE } from '../../../base/styles/skin';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${PRIMARY_BLUE};
`;
Wrapper.displayName = 'LoginWrapper';

export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: ${PRIMARY_WHITE};
  margin: 20px;
`;
Title.displayName = 'Title';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ;
`;
Form.displayName = 'Form';