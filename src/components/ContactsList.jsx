import { ContactsNotification } from 'components';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/filter/selectors';

import { ContactsListItem } from './ContactsListItem';

import { List, ListIcon, ListItem } from '@chakra-ui/layout';
import { BsPhone } from 'react-icons/bs';

export const ContactsList = () => {
  const filter = useSelector(selectFilter);

  const { data: contacts = [], isLoading } = useGetContactsQuery();

  const normalizedFilter = filter.toLowerCase().trim();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <List spacing={2} w={{ base: '384px', lg: '450px' }}>
        {visibleContacts.map(contact => (
          <ListItem
            key={contact.id}
            w="100%"
            display="flex"
            alignItems="center"
          >
            <ListIcon
              as={BsPhone}
              boxSize={{ base: 5, md: 6, lg: 7 }}
              color="blue.500"
            />
            <ContactsListItem contact={contact} />
          </ListItem>
        ))}
      </List>

      {!isLoading && (
        <ContactsNotification
          visibleContacts={visibleContacts.length}
          savedContactsNumber={contacts.length}
        />
      )}
    </>
  );
};
