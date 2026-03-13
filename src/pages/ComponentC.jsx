import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ComponentC = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <h4>ComponentC sử dụng theme: {theme}</h4>
    </div>
  );
};

export default ComponentC;
