import { Flex } from '@chakra-ui/layout';
import { AuthRegBts } from 'components/Buttons';

export const AuthNav = () => {
  return (
    <Flex
      as="nav"
      h={16}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <AuthRegBts role={'Login'} path={'login'} mlSize={1} />
      <AuthRegBts role={'Register'} path={'register'} mlSize={1} />
    </Flex>
  );
};
