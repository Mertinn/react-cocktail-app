import React from "react";
import "./PageContainer.styles.css";

interface IProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<IProps> = ({ children }) => {
  return <div className="page__container">{children}</div>;
};

export default PageContainer;
