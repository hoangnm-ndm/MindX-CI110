import { useState } from "react";
import { createContext } from "react";

// * Bước 1: Tạo context
export const ThemeContext = createContext({});

// * Bước 2: Tạo provider và truyền dữ liệu vào provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
