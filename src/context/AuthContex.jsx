import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

//create authContext //
export const AuthContext = createContext();

//provided the value to context//
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const [registered, setIsRegistered] = useState(false);

  const [userLogged, setUserLogged] = useState(null);
  const [loggedIn, setIsLoggedIn] = useState(false);

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

    if (data) {
      const parseData = JSON.parse(data);
      setUserData(parseData);
    }
  }, []);

  //user loging in
  function logging(username, password) {
    const user = userData.find((elem) => {
      return elem.username === username && elem.password === password;
    });

    if (user) {
      setIsLoggedIn(true);
      setUserLogged(user);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("userLogged", JSON.stringify(user));

      return true;
    } else {
      setIsLoggedIn(false);
      return false;
    }
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    const userLogged = localStorage.getItem("userLogged");

    if (isLoggedIn) {
      setIsLoggedIn(true);
      setUserLogged(JSON.parse(userLogged));
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("userLogged");
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    setUserLogged(null);
  }

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        registered,
        logging,
        loggedIn,
        userLogged,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
