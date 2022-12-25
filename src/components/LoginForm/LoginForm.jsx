import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormLabel,
  Stack,
  useColorModeValue,
  Box,
  Heading,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const LoginForm = ({ handleLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'30vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={3} mx={'auto'} maxW={'lg'} py={6} px={3}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'}>Sign in to your account </Heading>
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
          <Stack spacing={2} as="form" onSubmit={handleLogin}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                size="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  size="lg"
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
            <Stack spacing={2}>
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
            <Stack pt={1}>
              <Text align={'center'}>
                Need an account? Register now!
                <Link
                  as={NavLink}
                  to="/register"
                  color={'blue.400'}
                  fontSize={'lg'}
                  ml="1"
                >
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
