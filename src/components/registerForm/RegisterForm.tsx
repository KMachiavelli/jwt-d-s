import { Button, Input, TextField } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { StyledRegisterForm } from "./RegisterFormStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { endpoints } from "../../assets/urls";
import { apiOpt } from "../../assets/fetchOptions";
import { Link, useNavigate } from "react-router-dom";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + endpoints.register,
      apiOpt.registerOptions({ username, password, email })
    );
    if (response.ok)
      navigate({
        pathname: "/ar",
        search: "?justRegistered=true",
      });
  };

  const textFields = [
    {
      value: username,
      handler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUsername(event.target.value);
      },
      type: "text",
      placeholder: "Username",
      autoFocus: true,
    },
    {
      value: password,
      handler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
      },
      type: "password",
      placeholder: "Password",
      autoFocus: false,
    },
    {
      value: email,
      handler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(event.target.value);
      },
      type: "email",
      placeholder: "Email",
      autoFocus: false,
    },
  ];

  return (
    <StyledRegisterForm
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        handleSubmit(event);
      }}
    >
      <AssignmentIndIcon />
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
        ></TextField>
      ))}
      <Button variant="contained" type="submit">
        REGISTER
      </Button>
      <Button
        variant="text"
        onClick={() => {
          navigate("/");
        }}
      >
        BACK
      </Button>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
