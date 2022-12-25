import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { ContactsBTN, HomeBTN } from 'components/NavBtns/NavBtns';
import { Flex } from '@chakra-ui/layout';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Flex
      as="nav"
      h={16}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <HomeBTN />

      {isLoggedIn && <ContactsBTN />}
    </Flex>
  );
};
