import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';

const RegisterPage = () => {
  return (
    <>
      <h1>Register Page</h1>
      <SignUp />
      <Link to="/">Home Page</Link>
    </>
  );
};

export default RegisterPage;
