import React from "react";
import "./Sidebar.styles.css";
import Input from "../Input/Input";
import { ICocktail } from "../../App";

export interface IProps {
  handleSearchChange: React.Dispatch<React.SetStateAction<string>>;
  lastViewed: ICocktail["cocktail"][];
}

const Sidebar: React.FC<IProps> = ({ handleSearchChange, lastViewed }) => {
  return (
    <div className={"sidebar"}>
      <div className="sidebar__header">
        <Input placeholder={"Search"} onChange={handleSearchChange} />
      </div>

      <ul className={"sidebar__list"}>
        {lastViewed.length > 0 ? (
          <>
            {lastViewed.map((lastDrink, index) => (
              <li key={index} className={"sidebar__item"}>
                <h2>{lastDrink.strDrink}</h2>
              </li>
            ))}
          </>
        ) : (
          <h2>
            There will be shown <br /> recently viewed drinks
          </h2>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
