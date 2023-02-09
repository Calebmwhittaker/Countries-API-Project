import React from "react";
import "../assets/styles/Input.css";

const Input = (props) => {
  const { style, onKeyUp, placeholder, type } = props;
  return (
    <input
      style={style}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
