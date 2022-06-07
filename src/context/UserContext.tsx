import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import { NavigateFunction } from "react-router-dom";
import { apiOpt } from "../assets/fetchOptions";
import { endpoints } from "../assets/urls";

export interface User {
  username: string;
  email: string;
  joined: Date;
  setUsername: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setJoined: Dispatch<SetStateAction<Date>>;
  loginUser: (...params: any) => Promise<boolean>;
  loginByToken: () => void;
  logoutUser: (navigate?: NavigateFunction) => void;
  requestUserData: () => void;
}

const UserContext = createContext({} as User);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState<Date>(new Date());
  const [cookies, setCookies, removeCookies] = useCookies(["token"]);

  const loginUser = async (
    usernameForm: string,
    passwordForm?: string
  ): Promise<boolean> => {
    console.debug("logging in");

    const userData = await fetch(
      process.env.REACT_APP_BACKEND_URL + endpoints.login,
      {
        ...apiOpt.loginOptions(
          passwordForm
            ? { username: usernameForm, password: passwordForm }
            : { username: usernameForm }
        ),
        credentials: "same-origin",
      }
    );
    const { username: usernameApi, token } = await userData.json();

    if (userData.ok) {
      setUsername(usernameApi);
      setCookies("token", token, { path: "/" });
      return Promise.resolve(true);
    } else {
      setUsername("");
      setEmail("");
      setJoined(new Date(0));
      removeCookies("token", { path: "/" });
      return Promise.reject(false);
    }
  };

  const loginByToken = async () => {
    console.debug("logging in");

    const userData = await fetch(
      process.env.REACT_APP_BACKEND_URL + endpoints.auth,
      apiOpt.authByTokenOptions(cookies.token)
    );
    const { username: usernameApi, status } = await userData.json();
    if (status) {
      logoutUser();
      window.location.reload();
    } else setUsername(usernameApi);
  };

  const logoutUser = (navigate?: NavigateFunction) => {
    console.debug("logging out");
    setUsername("");
    setEmail("");
    setJoined(new Date(0));
    removeCookies("token", { path: "/" });
    if (navigate) navigate("/");
  };

  const requestUserData = async () => {
    console.debug("requesting data");
    const userData = await fetch(
      process.env.REACT_APP_BACKEND_URL + endpoints.myinfo,
      apiOpt.requestDataOptions(cookies.token)
    );
    let user;
    if (userData.ok) {
      user = await userData.json();
      setUsername(user.username);
      setEmail(user.email);
      setJoined(user.joined);
    } else {
      setCookies("token", null, { path: "/" });
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        loginByToken,
        logoutUser,
        requestUserData,
        username,
        setUsername,
        email,
        setEmail,
        joined,
        setJoined,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
