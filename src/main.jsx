import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RegisterPage from "./pages/RegisterPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <ShopPage />
  </React.StrictMode>
);
