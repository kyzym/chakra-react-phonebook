import { useAuth } from 'hooks/hooks';
import { Navigate, useLocation } from 'react-router-dom';

export function PrivateRoute({ children, redirectTo = '/login' }) {
  const { isLoggedIn } = useAuth();

  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
}
