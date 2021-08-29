import React from "react";
import "./CocktailItem.styles.css";
import { ICocktail as IProps } from "../../App";

const CocktailItem: React.FC<IProps> = ({ cocktail }) => {
  return <div className={"cocktail"}>{cocktail.strDrink}</div>;
};

export default CocktailItem;
