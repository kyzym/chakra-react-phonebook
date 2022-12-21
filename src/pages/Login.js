// import { LoginForm } from 'components/LoginForm/LoginForm';

import * as React from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
  Divider,
  Center,
  Box,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogInUserMutation } from 'redux/contactsSlice';
import { setCredentials } from 'redux/auth/authSlice';

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        name="password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export const Login = () => {
  // const toast = useToast();
  // const [login, { isLoading }] = useLoginMutation();

  const [loginUser] = useLogInUserMutation();
  const dispatch = useDispatch();

  // const [formState, setFormState] = React.useState({
  //   username: '',
  //   password: '',
  // });

  const handleLogin = async e => {
    e.preventDefault();
    const form = e.target;
    const res = await loginUser({
      email: form.elements.email.value,
      password: form.elements.password.value,
    }).unwrap();
    console.log('loginUser', res);
    dispatch(setCredentials(res));
  };

  return (
    <Center h="500px">
      <VStack as="form" spacing="4" onSubmit={handleLogin}>
        {/* <Box>Hint: enter anything, or leave it blank and hit login</Box> */}
        <InputGroup>
          <Input name="email" type="email" placeholder="Email" />
        </InputGroup>

        <InputGroup>
          <PasswordInput name="password" />
        </InputGroup>
        <Button
          type="submit"
          // isFullWidth
          // onClick={async () => {
          //   try {
          //     const user = await login(formState).unwrap();
          //     dispatch(setCredentials(user));
          //     navigate('/');
          //   } catch (err) {
          //     toast({
          //       status: 'error',
          //       title: 'Error',
          //       description: 'Oh no, there was an error!',
          //       isClosable: true,
          //     });
          //   }
          // }}
          colorScheme="green"
          // isLoading={isLoading}
        >
          Login
        </Button>
        <Divider />
        {/* <ProtectedComponent /> */}
      </VStack>
    </Center>
  );
};

export default Login;
