import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import PageContainer from "./Components/PageContainer/PageContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import CocktailsGrid from "./Components/CocktailsGrid/CocktailsGrid";
import axios from "axios";
import CocktailItem from "./Components/CocktailItem/CocktailItem";
import CocktailShowcase from "./Components/CocktailShowcase/CocktailShowcase";
import { throttle } from "lodash";

export interface ICocktail {
  cocktail: {
    idDrink: string;
    strDrink: string;
    strInstructions: string;
    strDrinkThumb: string;
    strImageAttribution: string;
    [index: string]: string;
  };
}

interface ICocktails {
  drinks?: [];
}

function App() {
  const [cocktails, setCocktails] = useState<ICocktails>({});
  const [selectedCocktail, setSelectedCocktail] = useState(-1);
  const [searchValue, setSearchValue] = useState("");

  const searchThrottled = useRef(
    throttle(async (query) => {
      console.log("throtel");
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = response.data;
      setCocktails(data);
    }, 1200)
  );

  useEffect(() => {
    searchThrottled.current(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <PageContainer>
        <Sidebar handleSearchChange={setSearchValue} />
        {selectedCocktail < 0 ? (
          <CocktailsGrid>
            {cocktails.drinks ? (
              cocktails.drinks!.map(
                (cocktail: ICocktail["cocktail"], index) => (
                  <CocktailItem
                    cocktail={cocktail}
                    key={cocktail.idDrink}
                    onClick={() => setSelectedCocktail(index)}
                  />
                )
              )
            ) : (
              <h1>No drinks</h1>
            )}
          </CocktailsGrid>
        ) : (
          <>
            {cocktails.drinks && (
              <CocktailShowcase
                cocktail={cocktails.drinks![selectedCocktail]}
                handleClose={() => setSelectedCocktail(-1)}
              />
            )}
          </>
        )}
      </PageContainer>
    </div>
  );
}

export default App;
