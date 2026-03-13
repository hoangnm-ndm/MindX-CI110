import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { ThemeContext } from "../context/ThemeContext";

const ComponentB = () => {
  // * Bước 4: Khi cần sử dụng dữ liệu từ context thì sử dụng hook useContext và truyền vào context cần sử dụng.

  const { setTheme } = useContext(ThemeContext);
  const handleChangeTheme = () => {
    setTheme("dark");
  };
  return (
    <div>
      <h3>ComponentB</h3>
      <button onClick={handleChangeTheme}>ChangeTheme</button>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
