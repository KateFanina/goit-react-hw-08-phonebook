import { LoginForm } from '../components/loginForm/LoginForm';
import { RegisterWrapper } from './Register.styled';
export default function Login() {
  return (
    <RegisterWrapper>
      <title>Log in</title>
      <LoginForm />
    </RegisterWrapper>
  );
}
