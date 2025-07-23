import React from "react";
import "./Button.css";
const Button = ({ login }) => {
  return (
    <button className="cpm-Button">{login ? "Đăng nhập" : "Đăng ký"}</button>
  );
};

export default Button;
