import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';
import s from './Header.module.css';

const RegisterPage = () => {
  return (
    <div className={s.header}>
      <h1>Register Page</h1>
      <SignUp />
      <Link to="/">
        <button className={s.nav_button}>Log in</button>
      </Link>
    </div>
  );
};

export default RegisterPage;
