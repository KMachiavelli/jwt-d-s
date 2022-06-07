import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyinfoPage from "../pages/MyinfoPage";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/ar"} element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/myinfo" element={<MyinfoPage />} />
      <Route path="/expired" element={<MyinfoPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
