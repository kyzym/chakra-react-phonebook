import { useIsLoggedIn } from 'hooks/hooks';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export function PrivateOutlet() {
  const { isLoggedIn } = useIsLoggedIn();

  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
