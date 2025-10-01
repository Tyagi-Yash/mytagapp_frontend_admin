import React from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const AppAfterLogin = () => {
  return (
    <>
      <Sidenav />
      <Header />
      <Outlet />
    </>
  );
};

export default AppAfterLogin;
