import { ContactsNotification } from 'components';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { Box } from '../utils/Box.styled';
import { ContactsListItem } from './ContactListItem/ContactsListItem';
import { Contact } from './ContactListItem/ContactsListItem.styled';

export const ContactsList = () => {
  const filter = useSelector(selectFilter);

  const { data: contacts = [], isLoading } = useGetContactsQuery();

  const normalizedFilter = filter.toLowerCase().trim();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Box as="ul" width="430px">
      {visibleContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactsListItem contact={contact} />
        </Contact>
      ))}

      {!isLoading && (
        <ContactsNotification
          visibleContacts={visibleContacts.length}
          savedContactsNumber={contacts.length}
        />
      )}
    </Box>
  );
};
