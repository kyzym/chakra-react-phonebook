import { useGetContactsQuery } from '../redux/contacts/contactsSlice';

export const Loader = () => {
  const { error, isLoading } = useGetContactsQuery();

  return isLoading && !error && <b>Request in progress...</b>;
};
