import { BsTrash } from 'react-icons/bs';
import { Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';

import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { toast } from 'react-hot-toast';

export const ContactsListItem = ({ contact: { name, number, id } }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(id).unwrap();
    toast.success(`OK, we've removed -  ${name} `, { position: 'top-center' });
  };

  const checkIsDeleted = isLoading || isSuccess;

  return (
    <>
      <Text
        ml={'5%'}
        mr={'auto'}
        fontSize={{ md: 'lg', lg: 'lg' }}
        fontWeight={'500'}
      >
        {name}
      </Text>
      <Text
        ml={'auto'}
        mr={'5%'}
        fontWeight={'500'}
        fontSize={{ md: 'lg', lg: 'lg' }}
      >
        {number}
      </Text>
      <Button onClick={handleDelete} disabled={checkIsDeleted} color="#f44336">
        <BsTrash size={20} />
      </Button>
    </>
  );
};
