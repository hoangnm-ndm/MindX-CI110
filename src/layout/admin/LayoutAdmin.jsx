import React from "react";
import { Outlet } from "react-router";
import HeaderAdmin from "./HeaderAdmin";
import SideBarAdmin from "./SideBarAdmin";

const LayoutAdmin = () => {
  return (
    <div>
      <HeaderAdmin />
      <div className="">
        <SideBarAdmin />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
