import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  return (
    <Card className="productlist">
      <Row>
        <Col>
          <ProductItem />
        </Col>
        <Col>
          <ProductItem />
        </Col>
        <Col>
          <ProductItem />
        </Col>
      </Row>
    </Card>
  );
};
