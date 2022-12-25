import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';

export const HomeBTN = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Button
      as={NavLink}
      to="/"
      display={'inline-flex'}
      fontSize={'l'}
      fontWeight={600}
      color={color}
      bg={bgColor}
      _activeLink={{ bg: 'blue.500', color: 'white' }}
      _hover={{
        bg: 'blue.500',
        color: 'white',
      }}
    >
      Home
    </Button>
  );
};

export const ContactsBTN = () => {
  return (
    <Button
      as={NavLink}
      to="/contacts"
      display={'inline-flex'}
      fontSize={'l'}
      fontWeight={600}
      color={'black'}
      bg={'blue.100'}
      _hover={{
        bg: 'blue.500',
        color: 'white',
      }}
      ml={3}
      _activeLink={{ bg: 'blue.500', color: 'white' }}
    >
      Contacts
    </Button>
  );
};

export const RegisterBTN = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Button
      as={NavLink}
      to="/register"
      display={'inline-flex'}
      fontSize={'l'}
      fontWeight={600}
      color={color}
      bg={bgColor}
      _hover={{
        bg: 'blue.500',
        color: 'white',
      }}
    >
      Register
    </Button>
  );
};

export const LoginBTN = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Button
      as={NavLink}
      to="/login"
      fontSize={'l'}
      fontWeight={600}
      color={color}
      bg={bgColor}
      ml={1}
      _hover={{
        bg: 'blue.500',
        color: 'white',
      }}
    >
      Login
    </Button>
  );
};

export const LogoutBTN = ({ handleLogOut }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Button
      onClick={handleLogOut}
      display={'inline-flex'}
      fontSize={'l'}
      fontWeight={600}
      color={color}
      bg={bgColor}
      _hover={{
        bg: 'blue.500',
        color: 'white',
      }}
    >
      Logout
    </Button>
  );
};

export const SwitchColorModeBTN = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack direction={'row'} spacing={4} ml={1}>
      <Button
        onClick={toggleColorMode}
        _hover={{
          bg: 'blue.500',
          color: 'white',
        }}
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Stack>
  );
};

export const HeroSignButtons = () => {
  return (
    <Stack spacing={6} direction={'row'}>
      <Button
        as={Link}
        to="/login"
        color="white"
        px={12}
        fontSize={{ base: 'l', md: 'xl' }}
        bg={'blue.400'}
        _hover={{ bg: 'blue.500' }}
      >
        Login
      </Button>
      <Button
        as={Link}
        to="/register"
        fontSize={{ base: 'l', md: 'xl' }}
        color="white"
        px={12}
        bg={'blue.400'}
        _hover={{ bg: 'blue.500' }}
      >
        Register
      </Button>
    </Stack>
  );
};
