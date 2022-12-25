import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const HomeBTN = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Button
      as={NavLink}
      to="/"
      display={'inline-flex'}
      fontSize={'xl'}
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
      fontSize={'xl'}
      fontWeight={600}
      color={'black'}
      bg={'blue.100'}
      _hover={{
        bg: 'blue.500',
        color: 'white',
      }}
      ml={1}
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
      fontSize={'xl'}
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
      fontSize={'xl'}
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
      display={{ base: 'none', md: 'inline-flex' }}
      fontSize={'xl'}
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
    <Stack direction={'row'} spacing={7} ml={1}>
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
