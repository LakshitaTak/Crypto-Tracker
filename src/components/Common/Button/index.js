import React from "react";
import "./styles.css";

export const Button = ({ text, variant }) => {
  return (
    <div
      className={`${variant === "filled" ? "filled-btn" : "outlined-btn"} btn`}
    >
      {text}
    </div>
  );
};

export default Button;
