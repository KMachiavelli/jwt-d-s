import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import {
  ButtonsWrapper,
  StyledUserWelcome,
  UserWelcomeWrapper,
} from "./UserWelcomeStyles";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const UserWelcome = () => {
  const { username, logoutUser } = useUserContext();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <StyledUserWelcome>
      <UserWelcomeWrapper>
        <EmojiPeopleIcon />
        <h1>{`Welcome, ${username}!`}</h1>
      </UserWelcomeWrapper>
      <ButtonsWrapper>
        <Button variant="outlined" onClick={handleLogout}>
          LOG OUT
        </Button>
        <Button variant="contained" component={Link} to="/myinfo">
          SEE MY DETAILS
        </Button>
      </ButtonsWrapper>
    </StyledUserWelcome>
  );
};

export default UserWelcome;
