import { Flex, Heading } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import { ContactsList, Filter, ContactsForm } from '../components';
import { Loader } from '../components/Loader';
import { FcContacts, FcList } from 'react-icons/fc';

export default function Contacts() {
  const bgColor = useColorModeValue('gray.50', 'gray.700');

  return (
    <Flex
      direction="column"
      align="center"
      pt={10}
      px={10}
      bg={bgColor}
      h="100%"
    >
      <Heading
        as={'h1'}
        fontSize={'2xl'}
        display="flex"
        alignItems="flex-end"
        mb={2}
      >
        Phonebook <FcContacts />
      </Heading>

      <ContactsForm />
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
