import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import LoginForm from "../components/loginForm/LoginForm";
import UserPanel from "../components/userPanel/UserPanel";
import UserWelcome from "../components/userWelcome/UserWelcome";
import { useUserContext } from "../context/UserContext";

const HomePage = () => {
  const { username, loginByToken } = useUserContext();
  const location = useLocation();

  const param = new URLSearchParams(location.search).get("justRegistered");

  useEffect(() => {
    // if (localStorage.getItem("logged") && param != "true") loginByToken();
  }, []);

  return (
    <>
      {username ? (
        <UserWelcome />
      ) : (
        <LoginForm justRegistered={param == "true"} />
      )}
    </>
  );
};

export default HomePage;
