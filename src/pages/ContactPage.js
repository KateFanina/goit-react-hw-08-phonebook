import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactList } from '../components/contactList/ContactList';
import ContactsGroup from '../components/contactsGroup';
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
      {/* <Helmet> */}
      <div>
        <title>Your contacts</title>
      </div>
      {/* </Helmet> */}
      {/* <ContactEitor /> */}
      <ContactsGroup />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
