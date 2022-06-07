import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useParams } from "react-router-dom";
import LoginForm from "../components/loginForm/LoginForm";
import UserPanel from "../components/userPanel/UserPanel";
import UserWelcome from "../components/userWelcome/UserWelcome";
import { useUserContext } from "../context/UserContext";

const HomePage = () => {
  const { username, loginByToken } = useUserContext();
  const [{ token }] = useCookies(["token"]);
  const location = useLocation();

  useEffect(() => {
    if (token) loginByToken();
    console.log("Token " + token);
  }, []);

  return (
    <>
      {username ? (
        <UserWelcome />
      ) : token ? (
        <CircularProgress />
      ) : (
        <LoginForm
          justRegistered={
            new URLSearchParams(location.search).get("justRegistered") == "true"
          }
        />
      )}
    </>
  );
};

export default HomePage;
