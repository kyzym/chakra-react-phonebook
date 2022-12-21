import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Center,
  VStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useRegisterUserMutation } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'redux/auth/authSlice';

function PasswordInput({ name, onChange }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        name={name}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

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
    console.log(res);
    dispatch(setCredentials(res));
  };

  return (
    <Center h="500px">
      <VStack as="form" spacing="4" onSubmit={handleSignUp}>
        {/* <Box>Hint: enter anything, or leave it blank and hit login</Box> */}
        <InputGroup>
          <Input name="username" type="text" placeholder="User Name" />
        </InputGroup>
        <InputGroup>
          <Input name="email" type="email" placeholder="Email" />
        </InputGroup>

        <InputGroup>
          <PasswordInput name="password" />
        </InputGroup>
        <Button
          // isFullWidth
          type="submit"
          colorScheme="green"
          // isLoading={isLoading}
        >
          Sign Up
        </Button>
        <Divider />
        {/* <ProtectedComponent /> */}
      </VStack>
    </Center>
  );
}
