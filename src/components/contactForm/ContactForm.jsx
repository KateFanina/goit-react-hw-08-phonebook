import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  CompleteForm,
  Label,
  Input,
  WtapperForButton,
  Button,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: yup
    .string()
    .min(13, 'Too Short!')
    .max(14, 'Too Long!')
    .required('Required'),
});

const ContactForm = props => {
  const { handleSubmit, contact } = props;
  return (
    <Formik
      initialValues={{
        name: contact?.name || '',
        number: contact?.number || '',
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <CompleteForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{0,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <WtapperForButton>
          <Button type="submit">
            {contact?.name ? 'Save contact' : 'Add contact'}
          </Button>
        </WtapperForButton>
      </CompleteForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  contact: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
