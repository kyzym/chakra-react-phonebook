import { useAuth } from 'hooks/hooks';
import css from './UserMenu.module.css';
import { contactsSliceAPI, useLogOutUserMutation } from 'redux/contactsSlice';
import { unsetCredentials } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import { Flex } from '@chakra-ui/layout';
import { Button, Text } from '@chakra-ui/react';
import { LogoutBTN } from 'components/NavBtns/NavBtns';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [logOutUser] = useLogOutUserMutation();

  const handleLogOut = async () => {
    await logOutUser();
    dispatch(unsetCredentials());
    dispatch(contactsSliceAPI.util.resetApiState());
  };

  return (
    <Flex align="center" gap={'12px'}>
      <Text fontSize="lg" as="b">
        Welcome, {user.name}
      </Text>
      <LogoutBTN handleLogOut={handleLogOut} />
    </Flex>
  );
};
