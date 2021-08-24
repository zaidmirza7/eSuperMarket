import React from 'react';
import { Card, Col, Row, Button} from 'react-bootstrap';

export const ProductDetails = () => {
    return (
        <div>
            <Card>
            <Row>
                <Col md={4}>Images </Col>
                <Col md={8}> Details </Col>
            </Row>
            <Button variant="success">Back</Button>
            </Card>
        </div>
    );
};