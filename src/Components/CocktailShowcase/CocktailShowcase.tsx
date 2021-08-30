import React from "react";
import { ICocktail } from "../../App";
import "./CocktailShowcase.styles.css";

interface IProps extends ICocktail {
  handleClose: () => void;
}

const CocktailShowcase: React.FC<IProps> = ({ cocktail, handleClose }) => {
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
      <div
        className="cocktailShowcase__closeButton"
        onClick={() => handleClose()}
      >
        x
      </div>

      <div className="cocktailShowcase__info">
        <h1 className="cocktailShowcase__name">{cocktail.strDrink}</h1>
        <ul className="cocktailShowcase__ingredients">
          {ingredients.map((ingredient, index) => (
            <li className={"cocktailShowcase__ingredient"} key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CocktailShowcase;
