import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Bước 3: Sử dụng provider để bao bọc component cần sử dụng dữ liệu từ
    context */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
