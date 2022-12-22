import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn } from 'redux/auth/authSelectors';

export const useIsLoggedIn = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return useMemo(() => ({ isLoggedIn }), [isLoggedIn]);
};

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};
