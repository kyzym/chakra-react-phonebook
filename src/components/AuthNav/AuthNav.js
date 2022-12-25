import {
  LoginBTN,
  RegisterBTN,
  SwitchColorModeBTN,
} from 'components/NavBtns/NavBtns';
import { Flex } from '@chakra-ui/layout';

export const AuthNav = () => {
  return (
    <Flex alignItems={'center'}>
      <RegisterBTN />
      <LoginBTN />
    </Flex>
  );
};
