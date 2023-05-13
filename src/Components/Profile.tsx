import React from "react";
import { User } from "../types/user.types";
import { getUsers } from "../utils/localStorageUtils";

const Profile = () => {
  const users: User[] = getUsers();
  const user = users.find((u) => u.isLoggedIn);
  return (
    <>
      <div>{user?.amount}</div>
      <div>{user?.loseGames}</div>
      <div>{user?.totalGames}</div>
      <div>{user?.username}</div>
      <div>{user?.winGames}</div>
    </>
  );
};

export default Profile;
