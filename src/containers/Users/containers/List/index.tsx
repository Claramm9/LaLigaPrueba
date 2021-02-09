import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getUserDetails, getUsersList } from '../../actions/intex';
import { resetToken } from '../../../Login/actions';
import { getUsers } from '../../selectors';
import UserBox from './components/UserBox';
import { PRIMARY_YELLOW } from '../../../../base/styles/skin';
import logoutIcon from '../../../../assets/icons/logout.svg';
import { Wrapper, ListWrapper, LoaderWrapper, List } from './styles';
import { TitleRow, IconRow, Icon, Title } from '../../styles';
import { getLoginToken } from '../../../Login/selectors';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(getLoginToken);
  const users = useSelector(getUsers);

  useEffect(() => {
    if (!token) {
      history.push('/');
    }
  }, [token]);

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  const selectUser = (userId: number) => {
    dispatch(getUserDetails(userId));
    history.push('/user/:id'.replace(':id', userId.toString()));
  };

  const logout = () => dispatch(resetToken());

  return (
    <Wrapper>
      {!users.length && (
        <LoaderWrapper>
          <Loader type='Oval' color={PRIMARY_YELLOW} height={80} width={80} />
        </LoaderWrapper>
      )}
      {!!users.length && (
        <ListWrapper>
          <TitleRow>
            <Title>Usuarios</Title>
            <IconRow>
              <Icon src={logoutIcon} onClick={() => logout()} />
            </IconRow>
          </TitleRow>
          <List>
            {users.map((user) => (
              <UserBox
                key={user.id}
                user={user}
                handleSelectUser={selectUser}
              />
            ))}
          </List>
        </ListWrapper>
      )}
    </Wrapper>
  );
};

export default UserList;
