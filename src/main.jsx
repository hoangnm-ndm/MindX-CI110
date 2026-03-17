import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TestMemo from "./pages/testMemo.jsx";
import TestUseCallback from "./pages/TestUseCallback.jsx";
import TestUseMemo from "./pages/TestUseMemo.jsx";
import TestUseRef from "./pages/TestUseRef.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <TestMemo /> */}
    {/* <TestUseCallback /> */}
    {/* <TestUseMemo /> */}
    <TestUseRef />
  </React.StrictMode>
);
