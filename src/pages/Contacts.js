import { Flex, Heading } from '@chakra-ui/layout';
import { ContactsList, Filter, Form } from 'components';
import { Loader } from 'components/Loader/Loader';
import { FcContacts, FcList } from 'react-icons/fc';

export default function Contacts() {
  return (
    <Flex direction="column" align="center" mt={10} px={10}>
      <Heading as={'h1'} display="flex" alignItems="flex-end">
        Phonebook <FcContacts />
      </Heading>

      <Form />
      <Heading as={'h2'} display="flex" alignItems="flex-end">
        Contacts <FcList />
      </Heading>

      <Filter />
      <Loader />
      <ContactsList />
    </Flex>
  );
}
