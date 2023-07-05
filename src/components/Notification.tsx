import { Box, Text } from '@chakra-ui/layout';

type ContactsNotificationProps = {
  visibleContacts: number;
  savedContactsNumber: number;
};

export const ContactsNotification = ({
  visibleContacts,
  savedContactsNumber,
}: ContactsNotificationProps) => {
  return (
    <Box textAlign="center">
      {savedContactsNumber !== visibleContacts ? (
        <Text>
          Found contacts: <b>{visibleContacts}</b>
        </Text>
      ) : (
        <Text>
          Total number of contacts: <b>{savedContactsNumber}</b>
        </Text>
      )}
    </Box>
  );
};
