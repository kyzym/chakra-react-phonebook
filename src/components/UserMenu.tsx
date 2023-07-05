import { Badge, Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { toast } from 'react-hot-toast';
import { useAppDispatch } from '../redux/store';
import { useAuth } from '../hooks';
import { unsetCredentials } from '../redux/auth/authSlice';
import {
  contactsSliceAPI,
  useLogOutUserMutation,
} from '../redux/contacts/contactsSlice';
import { LogoutBTN } from './Buttons';

export const UserMenu = () => {
  const dispatch = useAppDispatch();

  const { user } = useAuth();

  const [logOutUser] = useLogOutUserMutation();

  const handleLogOut = async () => {
    await logOutUser();

    dispatch(unsetCredentials());

    dispatch(contactsSliceAPI.util.resetApiState());

    toast.success(`Good bye ${user.name} 👏`, {
      position: 'top-center',
    });
  };

  return (
    <Flex align="center" gap={'12px'}>
      <Text ml={2} fontWeight="bold">
        Welcome
        <Badge ml="1" fontSize="1em" variant="subtle" colorScheme="green">
          {user.name}
        </Badge>
      </Text>

      <LogoutBTN handleLogOut={handleLogOut} />
    </Flex>
  );
};
