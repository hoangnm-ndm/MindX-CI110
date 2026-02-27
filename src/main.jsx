import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CheckEmail from "./components/CheckEmail.jsx";
import EventUpDemo from "./components/EventUpDemo.jsx";
import Parent from "./components/Parent.jsx";

//** Single Page Application = SPA */

ReactDOM.createRoot(document.getElementById("root")).render(
  // * Đây không phải là HTML, đây là JSX
  <React.StrictMode>
    {/* <App /> */}
    {/* <CheckEmail /> */}
    {/* <EventUpDemo /> */}
    <Parent />
  </React.StrictMode>
);
