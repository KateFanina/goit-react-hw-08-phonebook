import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Form, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        // email: form.elements.email.LoginForm.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input placeholder="Email" type="password" name="password" />
      </Label>
      <button type="submit">Log in</button>
    </Form>
    //  <Form onSubmit={handleSubmit} autoComplete="off">
    //   <Label>Password</Label>
    //   <button type="submit">Log in</button>
    // </Form>
  );
};
