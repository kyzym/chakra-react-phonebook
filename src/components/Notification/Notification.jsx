import { Box } from 'components/utils/Box.styled';

export const ContactsNotification = ({
  visibleContacts,
  savedContactsNumber,
}) => {
  return (
    <Box textAlign="center">
      {savedContactsNumber !== visibleContacts ? (
        <span>
          Found contacts: <b>{visibleContacts}</b>
        </span>
      ) : (
        <span>
          Total number of contacts: <b>{savedContactsNumber}</b>
        </span>
      )}
    </Box>
  );
};
