import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../redux/contacts/contactsSlice';

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from '@chakra-ui/react';

import { toast } from 'react-hot-toast';

export const ContactsForm = () => {
  const { data: contacts } = useGetContactsQuery();

  const [addContact, { isLoading }] = useAddContactMutation();

  const handleAddContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contacts) return;

    const form = e.target as HTMLFormElement;

    const nameValue = (form.elements.namedItem('name') as HTMLInputElement)
      .value;
    const numberValue = (form.elements.namedItem('number') as HTMLInputElement)
      .value;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === nameValue.toLowerCase()
      )
    ) {
      form.reset();

      return toast.error(`Can't add already existing contact 😭`, {
        position: 'top-center',
      });
    }

    try {
      await addContact({ name: nameValue, number: numberValue });

      toast.success(`Superrr!!! Contact ${nameValue} added 🥳`, {
        position: 'top-center',
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
        });
      }
    }

    form.reset();
  };

  return (
    <Box as="form" onSubmit={handleAddContact}>
      <Stack spacing={2} mb={4}>
        <InputGroup>
          <InputLeftAddon children="Name:" w="5.2rem" fontSize="1em" />
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Only letters, apostrophe, dash and spaces."
            required
            placeholder="Enter name"
            w="17rem"
            fontSize="1em"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Number:" w="5.2rem" fontSize="1em" />
          <Input
            type="tel"
            name="number"
            pattern="\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            w="17rem"
            fontSize="1em"
          />
        </InputGroup>
        <Button type="submit" disabled={isLoading} fontSize={'l'}>
          Add contact
        </Button>
      </Stack>
    </Box>
  );
};
