import React from "react";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";
import { Outlet } from "react-router";

const LayoutClient = () => {
  return (
    <div>
      <h1>Hello Client</h1>
      <HeaderClient />
      <Outlet />
      <FooterClient />
    </div>
  );
};

export default LayoutClient;
