import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router";
import TestUseRef from "./pages/TestUseRef.jsx";
import TestMemo from "./pages/testMemo.jsx";
import TestUseMemo from "./pages/TestUseMemo.jsx";
import TestUseCallback from "./pages/TestUseCallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <TestUseRef /> */}
      {/* <TestMemo /> */}
      {/* <TestUseMemo /> */}
      <TestUseCallback />
    </BrowserRouter>
  </React.StrictMode>
);
