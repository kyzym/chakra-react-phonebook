import { useToast } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn } from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectCurrentUser);

  return useMemo(() => ({ isLoggedIn, user }), [isLoggedIn, user]);
};

export const usePreparedToast = () => {
  const toast = useToast;

  const existingContactToast = toast({
    position: 'top-center',
    title: `Can't add already existing contact 😭`,
    status: 'error',
    isClosable: true,
  });

  const contactAddedToast = toast({
    position: 'top',
    title: 'Superrr!!! Contact added 🥳',
    status: 'success',
    isClosable: true,
  });

  return { existingContactToast, contactAddedToast };
};
