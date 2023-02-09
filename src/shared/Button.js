import React from "react";
import "../assets/styles/Button.css";

const Button = (props) => {
  const { onClick, text } = props;
  return (
    <button className="btn btn-dark" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
