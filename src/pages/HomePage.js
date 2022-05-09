import { Navigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../redux/slices/userSlice';
import Snake from '../snake/Snake';
import s from './Header.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  // let isActive = false;

  // function stopGame() {
  //   isActive = false;
  //   console.log('stop');
  // }

  return isAuth ? (
    <>
      <div className={s.header}>
        <h1>Welcome</h1>
        <button className={s.nav_button} onClick={() => dispatch(removeUser())}>
          Log out from {email}
        </button>
      </div>
      {<Snake color1="#008000" color2="#ff0000" backgroundColor="#ebebeb" />}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
