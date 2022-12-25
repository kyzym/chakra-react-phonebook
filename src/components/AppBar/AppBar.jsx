import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

import css from './AppBar.module.css';
import { useAuth } from 'hooks/hooks';
import Nav from 'components/header2';

import { SwitchColorModeBTN } from 'components/NavBtns/NavBtns';
import { Box, Flex } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Box as="header" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Navigation />
          <Flex alignItems={'center'}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <SwitchColorModeBTN />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
