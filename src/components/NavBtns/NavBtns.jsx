import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Stack, useColorMode } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const HomeBTN = () => {
  return (
    <Button
      as={NavLink}
      to="/home"
      display={'inline-flex'}
      fontSize={'xl'}
      fontWeight={600}
      color={'black'}
      bg={'gray.200'}
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
      color={'white'}
      bg={'blue.500'}
      _hover={{
        bg: 'blue.500',
      }}
      ml={1}
    >
      Contacts
    </Button>
  );
};

export const RegisterBTN = () => {
  return (
    <Button
      as={NavLink}
      to="/register"
      display={'inline-flex'}
      fontSize={'xl'}
      fontWeight={600}
      color={'black'}
      bg={'gray.200'}
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
  return (
    <Button
      as={NavLink}
      to="/login"
      fontSize={'xl'}
      fontWeight={600}
      color={'black'}
      bg={'gray.200'}
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
  return (
    <Button
      display={{ base: 'none', md: 'inline-flex' }}
      fontSize={'sm'}
      fontWeight={600}
      color={'white'}
      bg={'gray.500'}
      onClick={handleLogOut}
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
