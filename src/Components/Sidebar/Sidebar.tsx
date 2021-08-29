import React from "react";
import "./Sidebar.styles.css";

const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <div className="sidebar__header">SEARCH</div>
      <ul className={"sidebar__list"}>
        <li className={"sidebar__item"}>test</li>
        <li className={"sidebar__item"}>test</li>
        <li className={"sidebar__item"}>test</li>
        <li className={"sidebar__item"}>test</li>
      </ul>
    </div>
  );
};

export default Sidebar;
