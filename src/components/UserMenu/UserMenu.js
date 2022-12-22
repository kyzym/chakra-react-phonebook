// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/hooks';
import css from './UserMenu.module.css';
import {
  contactsSliceAPI,
  /*contactsSliceAPI,*/ useLogOutUserMutation,
} from 'redux/contactsSlice';
import { unsetCredentials } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [logOutUser] = useLogOutUserMutation();

  const handleLogOut = async () => {
    await logOutUser();
    dispatch(unsetCredentials());
    dispatch(contactsSliceAPI.util.resetApiState());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
