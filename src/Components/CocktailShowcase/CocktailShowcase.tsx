import React from "react";
import { ICocktail as IProps } from "../../App";
import "./CocktailShowcase.styles.css";

const CocktailShowcase: React.FC<IProps> = ({ cocktail }) => {
  return (
    <div className={"cocktailShowcase"}>
      <div className="cocktailShowcase__showcase">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strImageAttribution} />
      </div>
    </div>
  );
};

export default CocktailShowcase;
