import { Flex } from '@chakra-ui/layout';
import { LoginBTN, RegisterBTN } from 'components/NavBtns/NavBtns';

export const AuthNav = () => {
  return (
    <Flex alignItems={'center'}>
      <RegisterBTN />
      <LoginBTN />
    </Flex>
  );
};
