import { Link } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <>
      <h1>Login Page</h1>
      <Login />
      <Link to="/register">Register</Link>
    </>
  );
};

export default LoginPage;
