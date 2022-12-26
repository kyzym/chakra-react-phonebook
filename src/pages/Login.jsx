import { useToast } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'redux/auth/authSlice';
import { useLogInUserMutation } from 'redux/contacts/contactsSlice';

export default function Login() {
  const [loginUser] = useLogInUserMutation();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLogin = async e => {
    e.preventDefault();
    const form = e.target;
    const res = await loginUser({
      email: form.elements.email.value,
      password: form.elements.password.value,
    }).unwrap();

    const userName = res.user.name;
    userName &&
      toast({
        position: 'top',
        title: `Hello ${userName} 🥳`,
        status: 'success',
        isClosable: true,
      });

    dispatch(setCredentials(res));

    form.reset();
  };

  return <LoginForm handleLogin={handleLogin} />;
}
