import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const ClientLayout = () => {
  return (
    <div>
      <Header />
      <h1>ClientLayout</h1>
      <Outlet />
    </div>
  );
};

export default ClientLayout;
