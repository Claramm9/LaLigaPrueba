import styled from 'styled-components';
import { PRIMARY_WHITE } from '../../../../../../../base/styles/skin';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  align-items: center;
  border: 1px solid ${PRIMARY_WHITE};
  background-color: ${PRIMARY_WHITE};
  border-radius: 12px;
  margin: 6px 0;
  cursor: pointer;
  -webkit-box-shadow: 10px 17px 22px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 17px 22px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 17px 22px -20px rgba(0, 0, 0, 0.75);
`;
Box.displayName = 'UsersBox';

export const Info = styled.div`
  display: flex;
`;
Info.displayName = 'BoxInfo';

export const Icon = styled.img`
  width: 12px;
  height: 12px;
  object-fit: contain;
  padding: 5px;

  &:hover {
    border-radius: 8px;
    background-color: rgba(200, 198, 198, 0.5);
  }
`;
Icon.displayName = 'Icon';
