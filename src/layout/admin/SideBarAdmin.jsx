import React from "react";
import { NavLink } from "react-router";

const SideBarAdmin = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="order">Order</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBarAdmin;
