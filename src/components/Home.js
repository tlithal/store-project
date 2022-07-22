import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Item } from './Item';
import { storeApi } from '../api/StoreApi';

function Home() {
    const [ inventory, setInventory ] = useState([]);

    useEffect(() => {
        storeApi.getInv()
            .then((inv) => setInventory(inv));
    }, []);

    const fetchInventory = async() => {
        const newInv = await storeApi.getInv();
        setInventory(newInv);
    }

    return(
        <Container fluid className="text-center mx-auto">
            <Row>
                <h1>Home</h1>
                <hr />
            </Row>
            <Row>
                {inventory.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                    />
                ))}
            </Row>

        </Container>
    );
}

export default Home;