import React, { useEffect, useState } from "react";
import "./App.css";
import PageContainer from "./Components/PageContainer/PageContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import CocktailsGrid from "./Components/CocktailsGrid/CocktailsGrid";
import axios from "axios";
import CocktailItem from "./Components/CocktailItem/CocktailItem";

export interface ICocktail {
  cocktail: {
    idDrink: string;
    strDrink: string;
    strInstructions: string;
    strDrinkThumb: string;
    strImageAttribution: string;
  };
}

interface ICocktails {
  drinks?: [];
}

function App() {
  const [cocktails, setCocktails] = useState<ICocktails>({});
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
        <CocktailsGrid>
          {Object.keys(cocktails).length > 0 &&
            cocktails.drinks!.map((cocktail: ICocktail["cocktail"]) => (
              <CocktailItem cocktail={cocktail} key={cocktail.idDrink} />
            ))}
        </CocktailsGrid>
      </PageContainer>
    </div>
  );
}

export default App;
