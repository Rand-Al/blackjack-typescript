import React from "react";
import { User } from "../types/user.types";
import { getUsers } from "../utils/localStorageUtils";
import s from "../assets/css/Profile.module.css";

const Profile = () => {
  const users: User[] = getUsers();
  const user = users.find((u) => u.isLoggedIn);

  return (
    <div className={s.profile}>
      <div className={`grow ${s.left} flex flex-col pt-9 gap-5`}>
        <h3 className={`text-white text-4xl`}>
          To play the game push the button
        </h3>
        <button className={`${s.start} self-start`}>Play</button>
      </div>
      <div className={s.table}>
        <div className="flex bg-white p-1  border rounded">
          <p className="grow">Your name:</p>
          <div>{user?.username}</div>
        </div>
        <div className="flex bg-white p-1 border rounded">
          <p className="grow">Cash amount:</p>
          <div>{user?.amount}</div>
        </div>
        <div className="flex bg-white p-1 border rounded">
          <p className="grow">Lost games:</p>
          <div>{user?.loseGames}</div>
        </div>
        <div className="flex bg-white p-1 border rounded">
          <p className="grow">Total games:</p>
          <div>{user?.totalGames}</div>
        </div>

        <div className="flex bg-white p-1 border rounded">
          <p className="grow">Won games:</p>
          <div>{user?.winGames}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
