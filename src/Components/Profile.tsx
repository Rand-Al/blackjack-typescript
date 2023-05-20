import React from "react";
import { User } from "../types/user.types";
import { getUsers } from "../utils/localStorageUtils";
import { isUserLoggedIn } from "../utils/userUtils";

const Profile = () => {
  const users: User[] = getUsers();
  const user = users.find((u) => u.isLoggedIn);
  const handleLogout = () => {
    const users: User[] = JSON.parse(localStorage.getItem("users") ?? "[]");
    if (!users.length) {
      return;
    }
    const user = users.find((u) => u.isLoggedIn);
    if (!user) {
      return;
    }
    user.isLoggedIn = false;
    localStorage.setItem("users", JSON.stringify(users));
  };
  return (
    <>
      <div>{user?.amount}</div>
      <div>{user?.loseGames}</div>
      <div>{user?.totalGames}</div>
      <div>{user?.username}</div>
      <div>{user?.winGames}</div>
      {isUserLoggedIn() ? <button onClick={handleLogout}>Logout</button> : null}
    </>
  );
};

export default Profile;
