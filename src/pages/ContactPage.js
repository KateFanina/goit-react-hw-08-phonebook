import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactList } from '../components/contactList/ContactList';
import { ContactsGroup } from '../components/contactsGroup/ContactsGroup';
import {
  selectError,
  selectLoading,
  selectContacts,
} from '../redux/contacts/selectors';

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <title>Your contacts</title>
      </div>
      <ContactsGroup />
      <div>{isLoading && 'Request in progress...'}</div>
    </>
  );
}
