import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Item } from './Item';
import { storeApi } from '../api/StoreApi';

function Home() {
    const { inventory, setInventory } = useState([]);

    return(
        <Container fluid className="text-center mx-auto">
            <Row>
                <h1>Home</h1>
                <hr />
            </Row>

        </Container>
    );
}

export default Home;