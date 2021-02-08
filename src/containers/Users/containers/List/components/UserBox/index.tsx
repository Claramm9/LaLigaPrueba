import React from 'react';
import { User } from '../../../../types';
import arrowIcon from '../../../../../../assets/icons/arrow.png';
import { Box, Icon, Info } from './styles';

interface Props {
  user: User;
  handleSelectUser: (user: number) => void;
}

const UserBox: React.FC<Props> = ({ user, handleSelectUser }: Props) => (
  <Box onClick={() => handleSelectUser(user.id)}>
    <Info>{`${user.firstName} ${user.lastName}`}</Info>
    <Icon src={arrowIcon} />
  </Box>
);

export default UserBox;
