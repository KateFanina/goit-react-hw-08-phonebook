import { RegisterForm } from '../components/registerForm/RegisterForm';
import { RegisterWrapper } from './Register.styled';
export default function Register() {
  return (
    <RegisterWrapper>
      <title>Registration</title>
      <RegisterForm />
    </RegisterWrapper>
  );
}
