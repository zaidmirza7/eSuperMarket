import React from "react";
import "./Product.css";
import { ProductList } from "./ProductList";
import { TopNav } from "./TopNav";

export const Home = () => {
  return (
    <div>
      <TopNav />
      <ProductList />
    </div>
  );
};
