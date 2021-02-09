import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import InputField from '../../../../components/Input';
import {
  deleteUserRequest,
  getUserDetails,
  updateUserRequest,
} from '../../actions/intex';
import { getSelectedUser } from '../../selectors';
import { resetToken } from '../../../Login/actions';
import { getLoginToken } from '../../../Login/selectors';
import logoutIcon from '../../../../assets/icons/logout.svg';
import deleteIcon from '../../../../assets/icons/delete.svg';
import saveIcon from '../../../../assets/icons/save.svg';
import arrowBackIcon from '../../../../assets/icons/arrow-back.svg';
import { Wrapper, Form, LeftTitle, Avatar } from './styles';
import { TitleRow, IconRow, Title, Icon } from '../../styles';
import { LoaderWrapper } from '../List/styles';
import { PRIMARY_YELLOW } from '../../../../base/styles/skin';

const UserDetails: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(getLoginToken);
  const user = useSelector(getSelectedUser);

  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  useEffect(() => {
    if (!token) {
      history.push('/');
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);

  const changeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    placeholder: string
  ) => {
    if (placeholder.toLowerCase() === 'email') setEmail(e.target.value);
    if (placeholder.toLowerCase() === 'nombre') setFirstName(e.target.value);
    if (placeholder.toLowerCase() === 'apellidos') setLastName(e.target.value);
  };

  const deleteUser = (userId: number) => {
    dispatch(deleteUserRequest(userId));
    history.push('/users');
  };

  return (
    <Wrapper>
      {!user && (
        <LoaderWrapper>
          <Loader type='Oval' color={PRIMARY_YELLOW} height={80} width={80} />
        </LoaderWrapper>
      )}
      {user && (
        <>
          <TitleRow>
            <LeftTitle>
              <Icon
                src={arrowBackIcon}
                onClick={() => history.push('/users')}
              />
              <Title>Detalles</Title>
            </LeftTitle>
            <IconRow>
              <Icon
                src={saveIcon}
                onClick={() =>
                  dispatch(
                    updateUserRequest(email, firstName, lastName, user.id)
                  )
                }
              />
              <Icon src={deleteIcon} onClick={() => deleteUser(user.id)} />
              <Icon src={logoutIcon} onClick={() => dispatch(resetToken())} />
            </IconRow>
          </TitleRow>
          <Avatar src={user.avatar} />
          <Form>
            <InputField
              placeholder='Email'
              value={email}
              margin='10px 50px 0 0'
              width='100%'
              handleChange={changeInput}
            />
            <InputField
              placeholder='Nombre'
              value={firstName}
              margin='10px 50px 0 0'
              width='100%'
              handleChange={changeInput}
            />
            <InputField
              placeholder='Apellidos'
              value={lastName}
              margin='10px 50px 0 0'
              width='100%'
              handleChange={changeInput}
            />
          </Form>
        </>
      )}
    </Wrapper>
  );
};

export default UserDetails;
