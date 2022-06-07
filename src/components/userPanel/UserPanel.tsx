import React, { useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import InfoIcon from "@mui/icons-material/Info";
import {
  ButtonsSection,
  InfoText,
  PanelBar,
  PanelData,
  StyledUserPanel,
  UserPanelWrapper,
} from "./UserPanelStyles";
import { Button, CircularProgress } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const UserPanel = () => {
  const navigate = useNavigate();
  const { username, email, joined, logoutUser } = useUserContext();
  const [, , removeCookies] = useCookies(["token"]);

  const infoTexts = [
    {
      text: "Username: ",
      value: username,
    },
    {
      text: "Email: ",
      value: email,
    },
    {
      text: "Joined on: ",
      value: joined,
    },
  ];

  return (
    <>
      {email ? (
        <UserPanelWrapper>
          <StyledUserPanel>
            <InfoIcon />
            <PanelBar>
              <h2>User Info</h2>
            </PanelBar>
            <PanelData>
              {infoTexts.map(({ text, value }, i) => (
                <InfoText key={i}>
                  <span>{text}</span>
                  <span>{value as string}</span>
                </InfoText>
              ))}
            </PanelData>
          </StyledUserPanel>
          <ButtonsSection>
            <Button
              variant="outlined"
              onClick={() => {
                logoutUser(navigate);
              }}
            >
              LOG OUT
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                removeCookies("token", { path: "/" });
              }}
            >
              FORGET TOKEN
            </Button>
          </ButtonsSection>
        </UserPanelWrapper>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default UserPanel;
