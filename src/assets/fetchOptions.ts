import { endpoints } from "./urls";

const POSTReq = {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
};

const GETReq = {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
};

const registerOptions = (body: any) => ({
  ...POSTReq,
  params: endpoints.register,
  body: JSON.stringify(body),
});

const loginOptions = (body: any) => ({
  ...POSTReq,
  params: endpoints.login,
  body: JSON.stringify(body),
});

const authByTokenOptions = (token: string) => ({
  ...GETReq,
  params: endpoints.auth,
  headers: {
    Authorization: tokenType + token,
  },
});

const requestDataOptions = (token: string) => ({
  ...GETReq,
  params: endpoints.myinfo,
  headers: {
    Authorization: tokenType + token,
  },
});

export const apiOpt = {
  registerOptions,
  loginOptions,
  authByTokenOptions,
  requestDataOptions,
};
