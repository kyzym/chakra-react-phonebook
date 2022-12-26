import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';

import { useAuth } from 'hooks/hooks';

import { SwitchColorModeBTN } from 'components/Buttons';
import { Box, Container, Flex } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Container maxW={'6xl'} py={4}>
        <Flex
          name="InsideAppBarBox"
          h={6}
          justify={{ base: 'space-evenly', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Navigation />
          <Flex alignItems={'center'}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <SwitchColorModeBTN />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
