import { useAuth } from 'hooks/hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
