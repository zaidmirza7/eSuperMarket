import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";

export const ProductItem = () => {
  const dispatch = useDispatch();
  return (
    <Card className="productitem">
      <Row>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["Soap", "Tata Namak"],
              })
            }
          >
            +
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "REMOVE_PRODUCT",
                data: "Soap",
              })
            }
          >
            -
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
