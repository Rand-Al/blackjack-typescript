import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { User } from "./types/user.types";
import { isUserLoggedIn } from "./utils/userUtils";

function App() {
  return (
    <div className="App">
      {isUserLoggedIn() ? null : <Login />}
      <Profile />
    </div>
  );
}

export default App;
