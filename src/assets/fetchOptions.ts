import { endpoints } from "./urls";

const POSTReq = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const GETReq = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const registerOptions = (body: any) => ({
  ...POSTReq,
  body: JSON.stringify(body),
});

const loginOptions = (body: any) => ({
  ...POSTReq,
  body: JSON.stringify(body),
});

const authByTokenOptions = () => ({
  ...GETReq,
  credentials: "include" as RequestCredentials, // same-origin/include
});

const requestDataOptions = () => ({
  ...GETReq,
  credentials: "include" as RequestCredentials, // same-origin/include
});

export const apiOpt = {
  registerOptions,
  loginOptions,
  authByTokenOptions,
  requestDataOptions,
};
