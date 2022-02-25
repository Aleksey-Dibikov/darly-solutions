import { Link } from 'react-router-dom';
import Login from '../components/Login';
import s from './Header.module.css';

const LoginPage = () => {
  return (
    <div className={s.header}>
      <h1>Login Page</h1>
      <Login />
      <Link to="/register">
        <button className={s.nav_button}>Register</button>
      </Link>
    </div>
  );
};

export default LoginPage;
