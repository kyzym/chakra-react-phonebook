import { useAuth } from 'hooks/hooks';
import { Navigate, useLocation } from 'react-router-dom';

export function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();

  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
