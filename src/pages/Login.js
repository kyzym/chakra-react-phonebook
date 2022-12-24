import { LoginForm } from 'components/LoginForm/LoginForm';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'redux/auth/authSlice';
import { useLogInUserMutation } from 'redux/contactsSlice';

export const Login = () => {
  const [loginUser] = useLogInUserMutation();
  const dispatch = useDispatch();

  const handleLogin = async e => {
    e.preventDefault();
    const form = e.target;
    const res = await loginUser({
      email: form.elements.email.value,
      password: form.elements.password.value,
    }).unwrap();

    const userName = res.user.name;
    userName && toast.success(`hello ${userName}`);

    dispatch(setCredentials(res));

    form.reset();
  };

  return <LoginForm handleLogin={handleLogin} />;
};

export default Login;
