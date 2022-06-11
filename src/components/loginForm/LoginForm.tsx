import { Button, Input, TextField } from "@mui/material";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RejectedTile, StyledLoginForm } from "./LoginFormStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { endpoints } from "../../assets/urls";
import { apiOpt } from "../../assets/fetchOptions";
import { Link } from "react-router-dom";
import { valueToPercent } from "@mui/base";
import useFetch from "../../customHooks/useFetch";
import { useUserContext } from "../../context/UserContext";
import TestButton from "../../helpers/TestButton";

interface LoginFormI {
  justRegistered: boolean;
}

const LoginForm = ({ justRegistered }: LoginFormI) => {
  const [usernameForm, setUsernameForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");
  const { loginUser } = useUserContext();
  const [rejectedLogin, setRejectedLogin] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser(usernameForm, passwordForm).then(
      () => {},
      () => {
        setRejectedLogin(true);
        console.debug("Wrong passes");
      }
    );
  };

  const textFields = [
    {
      value: usernameForm,
      handler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUsernameForm(event.target.value);
      },
      type: "text",
      placeholder: "Username",
      autoFocus: false,
    },
    {
      value: passwordForm,
      handler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPasswordForm(event.target.value);
      },
      type: "password",
      placeholder: "Password",
      autoFocus: false,
    },
  ];

  useEffect(() => {
    console.log(justRegistered);
  }, [justRegistered]);

  return (
    <>
      {justRegistered && (
        <p style={{ color: "var(--blue)", textAlign: "center" }}>
          Registered! You can sign in.
        </p>
      )}
      <StyledLoginForm
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <AccountCircleIcon />
        {textFields.map(({ type, placeholder, handler, autoFocus }, i) => (
          <TextField
            type={type}
            placeholder={placeholder}
            onChange={(event) => {
              handler(event);
            }}
            autoFocus={autoFocus}
            variant="standard"
            key={i}
          />
        ))}
        <Button
          variant="contained"
          onClick={() => {
            loginUser(usernameForm, passwordForm).then(
              () => {},
              () => {
                setRejectedLogin(true);
                console.debug("Wrong passes");
              }
            );
          }}
        >
          LOG IN
        </Button>
        <Button variant="text" component={Link} to="/register">
          REGISTER
        </Button>
      </StyledLoginForm>
      <RejectedTile isRejected={rejectedLogin}>
        Wrong login or password
      </RejectedTile>
    </>
  );
};

export default LoginForm;
