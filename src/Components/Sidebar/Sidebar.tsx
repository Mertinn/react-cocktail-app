import React from "react";
import "./Sidebar.styles.css";
import Input from "../InputField/Input";

const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <div className="sidebar__header">
        <Input placeholder={"Search"} />
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
