import React from "react";
import "./Sidebar.styles.css";
import Input from "../Input/Input";

export interface IProps {
  handleSearchChange: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<IProps> = ({ handleSearchChange }) => {
  return (
    <div className={"sidebar"}>
      <div className="sidebar__header">
        <Input placeholder={"Search"} onChange={handleSearchChange} />
      </div>

      <ul className={"sidebar__list"}>
        <li className={"sidebar__item"}>testdd</li>
        <li className={"sidebar__item"}>test ddddd</li>
        <li className={"sidebar__item"}>test a</li>
        <li className={"sidebar__item"}>test aas</li>
      </ul>
    </div>
  );
};

export default Sidebar;
