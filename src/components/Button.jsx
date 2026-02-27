import React from "react";
import "./Button.css";

const Button = (props) => {
  /**
   * * props là một đối tượng được khai báo khi truyền vào component.
   * * Props thì thường chứa các thuộc tính
   */

  const css = { borderRadius: "8px", border: "none", padding: "12px 24px" };

  return (
    <button style={css} className={props.variant}>
      {props.children}
    </button>
  );
};

export default Button;
