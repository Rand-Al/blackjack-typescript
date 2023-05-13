import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { User } from "./types/user.types";
import { isUserLoggedIn } from "./utils/userUtils";

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
    <div className="App">
      {isUserLoggedIn() ? null : <Login />}
      <Profile />
      {isUserLoggedIn() ? <button onClick={handleLogout}>Logout</button> : null}
    </div>
  );
}

export default App;
