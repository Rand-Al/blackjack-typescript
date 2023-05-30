import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from '../assets/css/Login.module.css';
import { useGlobalContext } from '../MyGlobalContext';
import { loginUser } from '../utils/userUtils';

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [navigate, isLoggedIn]);

  const [username, setUsername] = useState('');
  const handleLogin = () => {
    loginUser(username);
    setIsLoggedIn(true);
  };
  return (
    <>
      <h2 className=" relative text-white text-4xl text-center mt-9">
        Enter your username to play the game
      </h2>
      <div className={s.login}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={s.name}
          placeholder="Enter your username"
        />
        <button className={s.submit} onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
