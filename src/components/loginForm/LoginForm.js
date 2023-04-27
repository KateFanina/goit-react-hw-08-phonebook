import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import { Form, Label, LoginInput, LoginButton } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <LoginInput type="email" name="email" />
      </Label>
      <Label>
        Password
        <LoginInput type="password" name="password" />
      </Label>
      <LoginButton type="submit">Log in</LoginButton>
    </Form>
  );
};
