import { Flex } from '@chakra-ui/layout';
import { HeaderBtn } from 'components/Buttons';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Flex>
      {!isLoggedIn && <HeaderBtn role={'Home'} path={'/'} />}
      {isLoggedIn && (
        <HeaderBtn role={'Contacts'} path={'/contacts'} mlSize={3} />
      )}
    </Flex>
  );
};
