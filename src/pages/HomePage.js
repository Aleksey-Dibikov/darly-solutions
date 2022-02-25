import { Navigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../redux/slices/userSlice';
import s from './Header.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div className={s.header}>
      <h1>Welcome</h1>
      <button className={s.nav_button} onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
