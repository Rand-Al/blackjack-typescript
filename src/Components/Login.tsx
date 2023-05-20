import React, { useState } from "react";
import { User } from "../types/user.types";
import { getUsers, setUsers } from "../utils/localStorageUtils";
import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  redirect,
  useNavigate,
} from "react-router-dom";

const Login = () => {
  const shouldRedirect = true;

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
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
    navigate("/profile");
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Login;
