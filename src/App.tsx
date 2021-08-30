import React, { useEffect, useState } from "react";
import "./App.css";
import PageContainer from "./Components/PageContainer/PageContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import CocktailsGrid from "./Components/CocktailsGrid/CocktailsGrid";
import axios from "axios";
import CocktailItem from "./Components/CocktailItem/CocktailItem";
import CocktailShowcase from "./Components/CocktailShowcase/CocktailShowcase";

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
  const [selectedCocktail, setSelectedCocktail] = useState<number>(-1);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ma"
      );
      const data = response.data;
      setCocktails(data);
    })();
  }, []);

  return (
    <div className="App">
      <PageContainer>
        <Sidebar />
        {selectedCocktail < 0 ? (
          <CocktailsGrid>
            {Object.keys(cocktails).length > 0 &&
              cocktails.drinks!.map(
                (cocktail: ICocktail["cocktail"], index) => (
                  <CocktailItem
                    cocktail={cocktail}
                    key={cocktail.idDrink}
                    onClick={() => setSelectedCocktail(index)}
                  />
                )
              )}
          </CocktailsGrid>
        ) : (
          <>
            {Object.keys(cocktails).length > 0 && (
              <CocktailShowcase
                cocktail={cocktails.drinks![selectedCocktail]}
              />
            )}
          </>
        )}
      </PageContainer>
    </div>
  );
}

export default App;
