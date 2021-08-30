import React from "react";
import "./CocktailItem.styles.css";
import { ICocktail } from "../../App";

interface IProps extends ICocktail {
  onClick: () => void;
}

const CocktailItem: React.FC<IProps> = ({ cocktail, onClick }) => {
  return (
    <div className={"cocktail"} onClick={() => onClick()}>
      <div className="cocktail__content">
        <img
          className="cocktail__image"
          alt={cocktail.strImageAttribution}
          src={cocktail.strDrinkThumb}
        />
      </div>
      <div className="cocktail__header">
        <h1 className="cocktail__name">{cocktail.strDrink}</h1>
      </div>
    </div>
  );
};

export default CocktailItem;
