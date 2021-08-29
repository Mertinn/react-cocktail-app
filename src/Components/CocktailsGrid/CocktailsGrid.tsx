import React from "react";

interface IProps {
  children?: React.ReactNode;
}

const CocktailsGrid: React.FC<IProps> = ({ children }) => {
  return <div className={"cocktails"}> {children}</div>;
};

export default CocktailsGrid;
