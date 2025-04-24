import React from "react";
import { createContext, useState, useEffect } from "react";

//create authContext //
export const AuthContext = createContext();

//provided the value to context//
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const [registered, setIsRegistered] = useState(false);

  const [loggedIn, setIsLoggedIn] = useState(false);

  console.log(userData[0]?.username);
  console.log(userData[0]?.password);
  //for registring a user//
  useEffect(() => {
    if (userData && userData.length >= 0) {
      console.log("running effect");
      localStorage.setItem("data", JSON.stringify(userData));
      setIsRegistered(true);
    }
  }, [userData]);

  function logging(username, password) {
    if (
      userData &&
      userData[0]?.username === username &&
      userData[0]?.password === password
    ) {
      setIsLoggedIn(true);
      return true;
    } else {
      setIsLoggedIn(false);
      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, registered, logging, loggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
