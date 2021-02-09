import styled from 'styled-components';
import { DESKTOP } from '../../../../../base/styles/media-queries';
import { PRIMARY_BLACK } from '../../../../../base/styles/skin';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${PRIMARY_BLACK};
`;
Wrapper.displayName = 'LoginWrapper';

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  padding: 4px;
  margin: 4px;
`;
Avatar.displayName = 'Avatar';

export const LeftTitle = styled.div`
  display: flex;
  align-items: center;
`;
LeftTitle.displayName = 'LeftTitle';

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  ${DESKTOP} {
    flex-direction: row;
    margin-top: 40px;
  }
`;
Form.displayName = 'Form';
