import React from "react";
import { User } from "../types/user.types";
import { getUsers } from "../utils/localStorageUtils";
import s from "../css/Profile.module.css";

const Profile = () => {
  const users: User[] = getUsers();
  const user = users.find((u) => u.isLoggedIn);

  return (
    <div className={s.profile}>
      <div>{user?.amount}</div>
      <div>{user?.loseGames}</div>
      <div>{user?.totalGames}</div>
      <div>{user?.username}</div>
      <div>{user?.winGames}</div>
    </div>
  );
};

export default Profile;
