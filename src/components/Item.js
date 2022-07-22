import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = (props) => {
    //Creates an const 'item' using the values from the prop
    const { item } = props;
    let cardClass = 'text-center';

    if(!item.available) {
        cardClass += ' notAvailable';
    }

    return(
        <Col className="col-4">
            <Card className="w-75 mb-5 mx-auto border-dark font-link">
                <Card.Header className={cardClass}>
                    <Link to={`${item.id}`}><h2>{item.name}</h2></Link>
                </Card.Header>
                <Card.Body className={cardClass}>
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