import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { isUserLoggedIn } from "./utils/userUtils";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aside from "./Components/Aside";
import { useState } from "react";
import { MyGlobalContext } from "./MyGlobalContext";
import Rules from "./Components/Rules";

function App() {
  const [isAside, setIsAside] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isUserLoggedIn());
  return (
    <MyGlobalContext.Provider
      value={{ isAside, setIsAside, isLoggedIn, setIsLoggedIn }}
    >
      <div className="app">
        <Header />
        <div className="main">
          <Aside isAside={isAside} setIsAside={setIsAside} />
          {/* ?? props typeScript */}
          {isLoggedIn ? <Profile /> : <Login />}
          <Rules />
        </div>
        <Footer />
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;
