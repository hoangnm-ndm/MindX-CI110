import React from "react";
import { Outlet } from "react-router";

const LayoutAdmin = () => {
  return (
    <div>
      <h1>Hello Admin</h1>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
