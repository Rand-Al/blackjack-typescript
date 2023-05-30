import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import { isUserLoggedIn } from './utils/userUtils';
import { useState } from 'react';
import { MyGlobalContext } from './MyGlobalContext';
import Rules from './Components/Rules';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

function App() {
  const [isAside, setIsAside] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isUserLoggedIn());

  return (
    <MyGlobalContext.Provider
      value={{ isAside, setIsAside, isLoggedIn, setIsLoggedIn }}
    >
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Profile />} />
            <Route path="rules" element={<Rules />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;
