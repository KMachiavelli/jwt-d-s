import { Button } from "@mui/material";
import React from "react";
import { StyledTokenError } from "./TokenErrorStyles";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import { Link } from "react-router-dom";

const TokenError = () => {
  return (
    <StyledTokenError>
      <FmdBadIcon />
      <h2>Unauthorized or session expired</h2>
      <Button variant="text" component={Link} to="/">
        BACK TO LOG IN
      </Button>
    </StyledTokenError>
  );
};

export default TokenError;
