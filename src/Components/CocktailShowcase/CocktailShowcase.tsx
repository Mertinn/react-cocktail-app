import React from "react";
import { ICocktail as IProps } from "../../App";
import "./CocktailShowcase.styles.css";

const CocktailShowcase: React.FC<IProps> = ({ cocktail }) => {
  const ingredients = [];
  for (let i = 1; i < 16; i++) {
    if (!cocktail[`strIngredient${i}`]) {
      break;
    }
    ingredients.push(cocktail[`strIngredient${i}`]);
  }
  return (
    <div
      className={"cocktailShowcase"}
      style={{ backgroundImage: `url(${cocktail.strDrinkThumb})` }}
    >
      <div className="cocktail__info">
        <h1 className="cocktail__name">{cocktail.strDrink}</h1>
        <ul className="cocktail__ingredients">
          {ingredients.map((ingredient, index) => (
            <li className={"cocktail__ingredient"} key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CocktailShowcase;
