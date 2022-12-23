import { useIsLoggedIn } from 'hooks/hooks';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export function PrivateRoute({ children }) {
  const { isLoggedIn } = useIsLoggedIn();

  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
