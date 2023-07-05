import { useAuth } from '../../hooks';
import { Navigate } from 'react-router-dom';
import { RouteProps } from 'types';

export const PrivateRoute = ({ children, redirectTo = '/' }: RouteProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
