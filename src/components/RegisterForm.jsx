import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const RegisterForm = ({ handleSignUp }) => {
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
          <Heading fontSize={'2xl'} textAlign={'center'}>
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
          <Stack spacing={2} as="form" onSubmit={handleSignUp}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Nickname</FormLabel>
              <Input
                size="md"
                type="text"
                name="username"
                placeholder="Sara Repetovna"
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                size="md"
                type="email"
                name="email"
                placeholder="email@mail.com"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  size="md"
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
            <Stack pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="md"
                fontSize={'md'}
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
              <Text align={'center'} fontSize={'md'}>
                Already a user?
                <Link
                  as={NavLink}
                  to="/login"
                  color={'blue.400'}
                  fontSize={'lg'}
                  ml="1"
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
