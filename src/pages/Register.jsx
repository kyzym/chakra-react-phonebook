import { useRegisterUserMutation } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'redux/auth/authSlice';

import { RegisterForm } from '../components/RegisterForm';

export default function SignupCard() {
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const handleSignUp = async e => {
    e.preventDefault();

    const form = e.target;
    const res = await registerUser({
      name: form.elements.username.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    }).unwrap();

    dispatch(setCredentials(res));
    form.reset();
  };

  return <RegisterForm handleSignUp={handleSignUp} />;
}
