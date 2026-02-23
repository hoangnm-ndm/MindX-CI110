import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//** Single Page Application = SPA */

ReactDOM.createRoot(document.getElementById("root")).render(
  // * Đây không phải là HTML, đây là JSX
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
