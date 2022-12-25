import { useAuth } from 'hooks/hooks';
import { contactsSliceAPI, useLogOutUserMutation } from 'redux/contactsSlice';
import { unsetCredentials } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import { Badge, Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
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
      <Text fontSize="lg" fontWeight="bold">
        Welcome
        <Badge ml="1" fontSize="1.2em" variant="subtle" colorScheme="green">
          {user.name}
        </Badge>
      </Text>

      <LogoutBTN handleLogOut={handleLogOut} />
    </Flex>
  );
};
