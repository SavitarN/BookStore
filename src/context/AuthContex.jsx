import React from "react";
import { createContext, useState, useEffect } from "react";

//create authContext //
export const AuthContext = createContext();

//provided the value to context//
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const [registered, setIsRegistered] = useState(false);

  const [loggedIn, setIsLoggedIn] = useState(false);

  console.log(userData[0]?.username);
  console.log(userData[0]?.password);

  //for registring a user//
  useEffect(() => {
    if (userData.length > 0) {
      localStorage.setItem("data", JSON.stringify(userData));
      setIsRegistered(true);
    }
  }, [userData]);

  //geting the data whenever the user refresh the page //
  useEffect(() => {
    const data = localStorage.getItem("data");
    console.log(data);
    if (data) {
      const parseData = JSON.parse(data);
      setUserData(parseData);
    }
  }, []);

  //user loging in
  function logging(username, password) {}

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, registered, logging, loggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
