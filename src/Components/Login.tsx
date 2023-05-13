import React, { useState } from "react";
import { User } from "../types/user.types";
import { getUsers, setUsers } from "../utils/localStorageUtils";

const Login = () => {
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
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
