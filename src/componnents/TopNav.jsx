import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Form } from "react-bootstrap";

export const TopNav = ({setSearchText}) => {
  const [searchText, setSeacrhText] = useState("");
  const products = useSelector((state) => state.productReducer.product);
  console.log(products);
  useEffect(()=>{
  }, [searchText])
  return (
    <Card className="topnav">
      <Row>
        <Col md={7}></Col>
        <Col md={3}>
          <Form.Control type="text" placeholder="Search here..." onChange={(e)=> setSearchText(e.target.value)}></Form.Control>
        <Col md={2}></Col>
          <h3> Carts: {products.length}</h3>
        </Col>
      </Row>
    </Card>
  );
};