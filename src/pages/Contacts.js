import { ContactsList, Filter, Form, SubTitle, Title } from 'components';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/utils/Box.styled';
import { FcContacts, FcList } from 'react-icons/fc';
// import { Form } from 'components/ContactsForm/ContactsForm';

export default function Contacts() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={10}
      px={10}
    >
      <Title>
        Phonebook
        <FcContacts />
      </Title>
      <Form />
      <SubTitle>
        Contacts
        <FcList />
      </SubTitle>
      <Filter />
      <Loader />
      <ContactsList />
    </Box>
  );
}
