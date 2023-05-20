import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { User } from "./types/user.types";
import { isUserLoggedIn } from "./utils/userUtils";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
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
    <div className="app">
      <Header />
      <div className="main">
        {isUserLoggedIn() ? null : <Login />}
        <Profile />
        {isUserLoggedIn() ? (
          <button className="btn__logout" onClick={handleLogout}>Logout</button>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
