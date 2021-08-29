import React from "react";
import "./Input.styles.css";

interface IProps {
  placeholder?: string;
}

const Input: React.FC<IProps> = ({ placeholder }) => {
  return <input type={"text"} placeholder={placeholder} />;
};

export default Input;
