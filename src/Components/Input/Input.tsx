import React from "react";
import "./Input.styles.css";
import { IProps as IOnChange } from "../Sidebar/Sidebar";

interface IProps {
  placeholder?: string;
  onChange: IOnChange["handleSearchChange"];
}

const Input: React.FC<IProps> = ({ placeholder, onChange }) => {
  return (
    <input
      type={"text"}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
