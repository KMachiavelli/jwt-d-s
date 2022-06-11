import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import TokenError from "../components/tokenError/TokenError";
import UserPanel from "../components/userPanel/UserPanel";
import { useUserContext } from "../context/UserContext";

const MyinfoPage = () => {
  const { username, requestUserData, setUsername } = useUserContext();
  const [stateLogged, setStateLogged] = useState(
    localStorage.getItem("logged")
  );

  useEffect(() => {
    if (stateLogged == "true") requestUserData();
    else {
      setUsername("");
    }
  }, []);

  useEffect(() => {
    setStateLogged(localStorage.getItem("logged"));
  }, [localStorage.getItem("logged")]);

  return (
    <>
      {stateLogged == "true" ? (
        username ? (
          <UserPanel />
        ) : (
          <CircularProgress />
        )
      ) : (
        <TokenError />
      )}
    </>
  );
};

export default MyinfoPage;
