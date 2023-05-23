import React from "react";
import { User } from "../types/user.types";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../MyGlobalContext";
const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
  const navigate = useNavigate();
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
    navigate("/");
    setIsLoggedIn(false);
  };
  return (
    <header className="min-h-header bg-header-black">
      <div className="container mx-auto flex items-center">
        <h2 className="text-white text-5xl py-4 grow">
          <span>Black</span>
          <span className="bg-white text-black">Jack</span>
        </h2>
        {isLoggedIn ? (
          <button
            className="btn__logout p-1 bg-white rounded hover:scale-105 transition-all"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
