import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RegisterPage from "./pages/RegisterPage.jsx";
import TestCleanUp from "./pages/TestCleanUp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <TestCleanUp />
    {/* <RegisterPage /> */}
  </React.StrictMode>
);
