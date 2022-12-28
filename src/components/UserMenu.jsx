import { useAuth } from 'hooks/hooks';
import {
  contactsSliceAPI,
  useLogOutUserMutation,
} from 'redux/contacts/contactsSlice';
import { unsetCredentials } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import { Badge, Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { LogoutBTN } from 'components/Buttons';
import { toast } from 'react-hot-toast';

export const UserMenu = () => {
  const dispatch = useDispatch();
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
    <Flex name="userMenu" align="center" gap={'12px'}>
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
