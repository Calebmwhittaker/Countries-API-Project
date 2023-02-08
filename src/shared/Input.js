import React from "react";
import "../assets/styles/Input.css";

const Input = (props) => {
  const { style, onChange, placeholder, type } = props;
  return (
    <input
      style={style}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
