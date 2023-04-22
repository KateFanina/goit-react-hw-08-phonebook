import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from '../contactForm';
import { ContactList } from '../contactList/ContactList';
import Filter from '../filter';
import Modal from '../modal/Modal';
import {
  WrapperTitle,
  TitleMain,
  TitleList,
  CloseButton,
  ContactWrapper,
} from './ContactsGroup.styled';
import {
  addContact,
  editContact,
  fetchContacts,
} from '../../redux/contacts/operations';
import {
  selectError,
  selectLoading,
  selectContacts,
} from '../../redux/contacts/selectors';

export const ContactsGroup = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(selectContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const validateExistContact = ({ contacts, values }) => {
    const messages = [];
    if (contacts.some(contact => contact.number === values.number)) {
      const user = contacts.find(
        contact => contact.number === values.number
      ).name;
      messages.push(`${values.number} is already belongs to ${user}!`);
    }
    if (contacts.some(contact => contact.name === values.name)) {
      const phone = contacts.find(
        contact => contact.name === values.name
      ).number;
      messages.push(
        `${values.name} is already containce in phonebook with phone ${phone}!`
      );
    }
    if (messages.length && !showModal) {
      alert(messages.join('\n'));
    }
    return !!messages.length;
  };

  const handleSubmit = (values, actions) => {
    if (
      validateExistContact({
        contacts,
        values,
      }) &&
      !showModal
    ) {
      return;
    }
    if (id) {
      dispatch(
        editContact({
          id,
          name: values.name,
          number: values.number,
        })
      );
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name: values.name,
          number: values.number,
        })
      );
    }
    setId('');
    setShowModal(false);
    actions.resetForm({
      name: '',
      number: '',
    });
  };

  const onContactEdit = id => {
    const currentContact = contacts.find(contact => contact.id === id);
    setShowModal(!showModal);
    setId(currentContact.id);
    setName(currentContact.name);
    setNumber(currentContact.number);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactWrapper>
      {showModal && (
        <Modal onClose={toggleModal}>
          <CloseButton onClick={toggleModal}>
            <CloseIcon />
          </CloseButton>
          <ContactForm
            contact={{
              name,
              number,
            }}
            handleSubmit={(values, actions) => handleSubmit(values, actions)}
          />
        </Modal>
      )}
      <>
        {!showModal && (
          <>
            <WrapperTitle>
              <TitleMain>Phonebook</TitleMain>
            </WrapperTitle>
            <ContactForm
              handleSubmit={(values, actions) => handleSubmit(values, actions)}
            />
          </>
        )}
        {isLoading && !error && <b>Request in progress...</b>}
        <WrapperTitle>
          <TitleList>Contacts</TitleList>
        </WrapperTitle>
        <Filter />
        <ContactList onContactEdit={id => onContactEdit(id)} />
      </>
    </ContactWrapper>
  );
};

export default ContactsGroup;
