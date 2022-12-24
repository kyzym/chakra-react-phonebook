// import { LoginForm } from 'components/LoginForm/LoginForm';

import * as React from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  // VStack,
  Button,
  // Divider,
  // Center,
  FormControl,
  FormLabel,
  Stack,
  useColorModeValue,
  Box,
  Heading,
  Text,
  Flex,
  // Box,
  // useToast,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { useLogInUserMutation } from 'redux/contactsSlice';
import { setCredentials } from 'redux/auth/authSlice';
// import { useNavigate } from 'react-router';
// import SimpleCard from 'components/SimpleLogin';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const Login = () => {
  // const toast = useToast();
  // const [login, { isLoading }] = useLoginMutation();

  const [loginUser] = useLogInUserMutation();
  const dispatch = useDispatch();

  const handleLogin = async e => {
    e.preventDefault();
    const form = e.target;
    const res = await loginUser({
      email: form.elements.email.value,
      password: form.elements.password.value,
    }).unwrap();

    dispatch(setCredentials(res));
    form.reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy your Phone Book✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4} as="form" onSubmit={handleLogin}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
                  placeholder="7 characters or more, please"
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              ></Stack>
              <Button
                type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
