import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getUserDetails, getUsersList } from '../../actions/intex';
import { getUsers } from '../../selectors';
import { PRIMARY_YELLOW } from '../../../../base/styles/skin';
import { Wrapper, ListWrapper, Title, LoaderWrapper, List } from './styles';
import UserBox from './components/UserBox';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector(getUsers);

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  const selectUser = (userId: number) => {
    dispatch(getUserDetails(userId));
    history.push('/user/:id'.replace(':id', userId.toString()));
  };

  return (
    <Wrapper>
      {!users.length && (
        <LoaderWrapper>
          <Loader type='Oval' color={PRIMARY_YELLOW} height={80} width={80} />
        </LoaderWrapper>
      )}
      {!!users.length && (
        <ListWrapper>
          <Title>Usuarios</Title>
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
