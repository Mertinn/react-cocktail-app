import React, { useEffect, useState } from "react";
import "./App.css";
import PageContainer from "./Components/PageContainer/PageContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import CocktailsGrid from "./Components/CoctailsGrid/CocktailsGrid";
import axios from "axios";

function App() {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );
    })();
  }, []);
  return (
    <div className="App">
      <PageContainer>
        <Sidebar />
        <CocktailsGrid></CocktailsGrid>
      </PageContainer>
    </div>
  );
}

export default App;
