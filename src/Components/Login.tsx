import React, { useState } from "react";
import { User } from "../types/user.types";
import { getUsers, setUsers } from "../utils/localStorageUtils";
import { useNavigate } from "react-router-dom";
import s from "../assets/css/Login.module.css";
import { useGlobalContext } from "../MyGlobalContext";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { setIsLoggedIn } = useGlobalContext();
  const handleLogin = () => {
    const users = getUsers();
    if (users.length && users.some((u) => u.username === username)) {
      const existingUser = users.find((u) => u.username === username) as User;
      existingUser.isLoggedIn = true;
    } else {
      const user: User = {
        username,
        amount: 10000,
        totalGames: 0,
        winGames: 0,
        loseGames: 0,
        isLoggedIn: true,
      };
      users.push(user);
    }
    setUsers(users);
    setIsLoggedIn(true);
    navigate("/profile");
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
