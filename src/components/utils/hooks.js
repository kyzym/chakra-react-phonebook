const { useEffect } = require('react');
const { fetchContacts } = require('redux/operations');

export const useFetchContacts = dispatch => {
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
};
