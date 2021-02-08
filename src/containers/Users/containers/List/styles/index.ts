import styled from 'styled-components';
import { PRIMARY_BLACK, PRIMARY_WHITE } from '../../../../../base/styles/skin';

export const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${PRIMARY_BLACK};
`;
Wrapper.displayName = 'UsersWrapper';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
ListWrapper.displayName = 'ListWrapper';

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: ${PRIMARY_WHITE};
`;
Title.displayName = 'Title';

export const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
LoaderWrapper.displayName = 'LoaderWrapper';

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;
List.displayName = 'UsersList';
