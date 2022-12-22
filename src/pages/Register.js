import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  Text,
  Link,
  Flex,
  useColorModeValue,
  Heading,
  Box,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import { useState } from 'react';

import { useRegisterUserMutation } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'redux/auth/authSlice';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up to your account
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy our cool APP ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4} as="form" onSubmit={handleSignUp}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" name="username" />
            </FormControl>

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
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={1}>
              <Text align={'center'}>
                NEED FIX!!!Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
