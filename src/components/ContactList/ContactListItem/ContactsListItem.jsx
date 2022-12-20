import { BsPhone } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { DelButton, Name, Number } from './ContactsListItem.styled';

import { toast } from 'react-hot-toast';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactsListItem = ({ contact: { name, phone, id } }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(id).then(toast.success(`OK, we've removed -  ${name} `));
  };
  const checkIsDeleted = isLoading || isSuccess;

  return (
    <>
      <BsPhone size={20} />
      <Name>{name}</Name>
      <Number>{phone}</Number>
      <DelButton onClick={handleDelete} disabled={checkIsDeleted}>
        <MdClose size={24} />
      </DelButton>
    </>
  );
};
