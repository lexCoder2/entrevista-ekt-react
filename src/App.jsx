import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Home from "./components/home";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    console.log(user)
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <div>
      <div className="">
        <Routes>
          <Route path="/" element={<Login/>} />
           {!currentUser &&<Route path="/login" element={<Login/>} />}
          {currentUser && <Route path="/user" element={ <Home/> } />}
        </Routes>
      </div>

    </div>
  );
};

export default App;
