import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "./ProductList";
import { getProducts } from "../service/products";
import { TopNav } from "./TopNav";
import "./Product.css";
import { ProductDetails } from "./Product Details/ProductDetails";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";

export const Home = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const allProducts = async () => {
    const products = await getProducts();
    dispatch({
      type: "ADD_PRODUCT",
      data: products,
    });
  };

  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <TopNav setSearchText={setSearchText}/>
      <ProductList searchText={searchText}/>
      <ProductDetails/>
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
    </Nav>
    </Container>
  </Navbar>
  
    </div>
  );
};
