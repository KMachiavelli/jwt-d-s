import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import TokenError from "../components/tokenError/TokenError";
import UserPanel from "../components/userPanel/UserPanel";
import { useUserContext } from "../context/UserContext";

const MyinfoPage = () => {
  const { username, requestUserData, setUsername } = useUserContext();
  const [{ token }] = useCookies(["token"]);

  useEffect(() => {
    if (token) requestUserData();
    else {
      setUsername("");
    }
    console.log(token);
  }, []);
  return (
    <>
      {username ? <UserPanel /> : token ? <CircularProgress /> : <TokenError />}
    </>
  );
};

export default MyinfoPage;
