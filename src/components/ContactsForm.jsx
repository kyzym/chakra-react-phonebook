import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsSlice';

import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useToast,
} from '@chakra-ui/react';

export const Form = () => {
  const { data: contacts } = useGetContactsQuery();
  const toast = useToast();

  const [addContact, { isLoading }] = useAddContactMutation();

  const handleAddContact = e => {
    e.preventDefault();

    const form = e.target;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === nameValue.toLowerCase()
      )
    ) {
      form.reset();
      return toast({
        position: 'top-center',
        title: `Can't add already existing contact 😭`,
        status: 'info',
        isClosable: true,
      });
    }

    addContact({ name: nameValue, number: numberValue });

    toast({
      position: 'top',
      title: 'Superrr!!! Contact added 🥳',
      status: 'success',
      isClosable: true,
    });

    form.reset();
  };

  return (
    <>
      <Stack as="form" spacing={2} onSubmit={handleAddContact} mb={4}>
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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
    </>
  );
};
