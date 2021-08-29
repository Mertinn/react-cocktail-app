import React, { useEffect, useState } from "react";
import "./App.css";
import PageContainer from "./Components/PageContainer/PageContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import CocktailsGrid from "./Components/CocktailsGrid/CocktailsGrid";
import axios from "axios";
import CocktailItem from "./Components/CocktailItem/CocktailItem";

function App() {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
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
          {cocktails &&
            cocktails.map((cocktail) => <CocktailItem cocktail={cocktail} />)}
        </CocktailsGrid>
      </PageContainer>
    </div>
  );
}

export default App;
