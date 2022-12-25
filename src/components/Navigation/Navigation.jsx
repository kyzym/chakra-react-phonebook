import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { ContactsBTN, HomeBTN } from 'components/Buttons';
import { Flex } from '@chakra-ui/layout';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Flex>
      <HomeBTN />
      {isLoggedIn && <ContactsBTN />}
    </Flex>
  );
};
