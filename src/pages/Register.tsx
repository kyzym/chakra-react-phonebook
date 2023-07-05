import { setCredentials } from '../redux/auth/authSlice';
import { useRegisterUserMutation } from '../redux/contacts/contactsSlice';

import { toast } from 'react-hot-toast';
import { useAppDispatch } from '../redux/store';
import { AuthRegisterResponse } from 'types/types';
import { RegisterForm } from '../components/RegisterForm';

export default function SignupCard() {
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useAppDispatch();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const nameValue = (form.elements.namedItem('username') as HTMLInputElement)
      .value;

    const emailValue = (form.elements.namedItem('email') as HTMLInputElement)
      .value;

    const passwordValue = (
      form.elements.namedItem('password') as HTMLInputElement
    ).value;

    try {
      const response: AuthRegisterResponse = await registerUser({
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      }).unwrap();

      dispatch(setCredentials(response));

      form.reset();
    } catch (error) {
      toast.error('Registration failed');
    }
  };

  return <RegisterForm handleSignUp={handleSignUp} />;
}
