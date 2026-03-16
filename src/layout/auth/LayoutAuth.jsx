import React from "react";
import { Outlet } from "react-router";

const LayoutAuth = () => {
  return (
    <div>
      <h1>Hello, Register now?</h1>
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
