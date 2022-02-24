import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Auth.module.css';

const Form = ({ titleSing, handleClick, titleLogin, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={s.register}>
      <p className={s.text_align}>Please enter email and password</p>
      <label htmlFor="" className={s.label}>
        <p className={s.sign}>Email:</p>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          className={s.input}
        />
      </label>
      <label htmlFor="" className={s.label}>
        <p className={s.sign}>Password:</p>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          className={s.input}
        />
      </label>
      <div className={s.wrap}>
        <button
          onClick={() => handleClick(email, password)}
          className={s.button}
        >
          {titleSing}
        </button>
        <button
          onClick={() => handleLogin(email, password)}
          className={s.button}
        >
          {titleLogin}
        </button>
      </div>
    </div>
  );
};

export default Form;
