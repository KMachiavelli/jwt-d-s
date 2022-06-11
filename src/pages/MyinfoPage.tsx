import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import TokenError from "../components/tokenError/TokenError";
import UserPanel from "../components/userPanel/UserPanel";
import { useUserContext } from "../context/UserContext";

const MyinfoPage = () => {
  const { username, requestUserData, setUsername } = useUserContext();
  const logged = localStorage.getItem("logged");

  useEffect(() => {
    if (logged == "true") requestUserData();
    else {
      setUsername("");
    }
  }, []);
  return (
    <>
      {logged == "true" ? (
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
