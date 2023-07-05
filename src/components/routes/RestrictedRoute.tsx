import { useAuth } from '../../hooks';
import { Navigate } from 'react-router-dom';
import { RouteProps } from 'types';

export const RestrictedRoute = ({
  children,
  redirectTo = '/contacts',
}: RouteProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
