import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
import css from './AppBar.module.css';
import { useIsLoggedIn } from 'hooks/hooks';

export const AppBar = () => {
  const { isLoggedIn } = useIsLoggedIn();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
