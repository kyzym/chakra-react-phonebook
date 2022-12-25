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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const LoginForm = ({ handleLogin }) => {
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
              <FormLabel fontSize={'xl'}>Email address</FormLabel>
              <Input
                size="lg"
                type="email"
                name="email"
                placeholder="enter your cool email"
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
            <Stack spacing={5}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              ></Stack>
              <Button
                fontSize={'xl'}
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
