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
      minH={'70vh'}
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
              <FormLabel fontSize={'xl'}>Nickname</FormLabel>
              <Input
                size="lg"
                type="text"
                name="username"
                placeholder="Sara Repetovna"
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel fontSize={'xl'}>Email address</FormLabel>
              <Input
                size="lg"
                type="email"
                name="email"
                placeholder="email@mail.com"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel fontSize={'xl'}>Password</FormLabel>
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
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                fontSize={'xl'}
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
              <Text align={'center'} fontSize={'xl'}>
                Already a user?
                <Link
                  as={NavLink}
                  to="/login"
                  color={'blue.400'}
                  fontSize={'2xl'}
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
