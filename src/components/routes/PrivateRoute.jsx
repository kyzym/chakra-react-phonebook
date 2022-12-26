import { useAuth } from 'hooks/hooks';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children, redirectTo = '/' }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
