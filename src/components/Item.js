import React from 'react';
import { Col, Card } from 'react-bootstrap';

export const Item = (props) => {
    //Creates an const 'item' using the values from the prop
    const { item } = props;

    return(
        <Col className="col-4">
            <Card className="w-75 mb-5 mx-auto border-dark">
                <Card.Header className="text-center">
                    <h2>{item.name}</h2>
                </Card.Header>
                <Card.Body className="text-center">
                    Amount In Stock: {item.stock}
                    <br />
                    Price: ${item.price}
                    <br />
                    {item.available ? "In Stock" : "Out of Stock"}
                </Card.Body>
            </Card>
        </Col>
    );
}