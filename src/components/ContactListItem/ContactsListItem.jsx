import { BsTrash } from 'react-icons/bs';
import { Text } from '@chakra-ui/layout';
import { Button, useToast } from '@chakra-ui/react';

import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactsListItem = ({ contact: { name, number, id } }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();
  const toast = useToast();

  const handleDelete = () => {
    deleteContact(id).unwrap();
    toast({
      position: 'top',
      title: `OK, we've removed -  ${name} `,
      status: 'success',
      isClosable: true,
    });
  };

  const checkIsDeleted = isLoading || isSuccess;

  return (
    <>
      <Text
        ml={'5%'}
        mr={'auto'}
        fontSize={{ md: 'l', lg: 'l' }}
        fontWeight={'500'}
      >
        {name}
      </Text>
      <Text
        ml={'auto'}
        mr={'5%'}
        fontWeight={'500'}
        fontSize={{ md: 'l', lg: 'l' }}
      >
        {number}
      </Text>
      <Button onClick={handleDelete} disabled={checkIsDeleted} color="#f44336">
        <BsTrash size={20} />
      </Button>
    </>
  );
};
