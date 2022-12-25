import { Flex, Heading } from '@chakra-ui/layout';
import { ContactsList, Filter, Form } from 'components';
import { Loader } from 'components/Loader/Loader';
import { FcContacts, FcList } from 'react-icons/fc';

export default function Contacts() {
  return (
    <Flex direction="column" align="center" mt={10} px={10}>
      <Heading
        as={'h1'}
        fontSize={'2xl'}
        display="flex"
        alignItems="flex-end"
        mb={2}
      >
        Phonebook <FcContacts />
      </Heading>

      <Form />
      <Heading
        as={'h2'}
        fontSize={'xl'}
        display="flex"
        alignItems="flex-end"
        mb={2}
      >
        Contacts <FcList />
      </Heading>

      <Filter />
      <Loader />
      <ContactsList />
    </Flex>
  );
}
