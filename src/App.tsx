import React from "react";
import logo from "./logo.svg";
import "./AppStyles.ts";
import { InnerContent, StyledApp } from "./AppStyles";
import LoginForm from "./components/loginForm/LoginForm";
import { AppBar } from "@mui/material";
import AppRoutes from "./routing/AppRoutes";
import { UserProvider, useUserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";
import { initializeInterceptor } from "./helpers/interceptor";

function App() {
  const { logoutUser } = useUserContext();
  initializeInterceptor(logoutUser);

  return (
    <StyledApp>
      <AppBar position="fixed" sx={{ padding: "16px", fontSize: "20px" }}>
        <strong>JSON Web Token</strong>
      </AppBar>
      <InnerContent>
        <AppRoutes />
      </InnerContent>
    </StyledApp>
  );
}

export default App;
