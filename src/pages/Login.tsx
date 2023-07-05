import { LoginForm } from '../components/LoginForm';
import { toast } from 'react-hot-toast';
import { setCredentials } from '../redux/auth/authSlice';
import { useLogInUserMutation } from '../redux/contacts/contactsSlice';
import { useAppDispatch } from '../redux/store';
import { AuthRegisterResponse } from 'types/types';

export default function Login() {
  const [loginUser] = useLogInUserMutation();
  const dispatch = useAppDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const emailValue = (form.elements.namedItem('email') as HTMLInputElement)
      .value;

    const passwordValue = (
      form.elements.namedItem('password') as HTMLInputElement
    ).value;

    try {
      const response: AuthRegisterResponse = await loginUser({
        email: emailValue,

        password: passwordValue,
      }).unwrap();

      const userName = response.user.name;

      userName &&
        toast.success(`Hello ${userName} 🥳`, { position: 'top-center' });

      dispatch(setCredentials(response));

      form.reset();
    } catch (error) {
      toast.error('Login failed, check you email and password');
    }
  };

  return <LoginForm handleLogin={handleLogin} />;
}
