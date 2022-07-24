import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Item } from './Item';
import { storeApi } from '../api/StoreApi';
import FilterButton from './FilterButton';

function Store() {
    const [ inventory, setInventory ] = useState([]);
    const [ filterItems, setFilter ] = useState([]);

    useEffect(() => {
        storeApi.getInv()
            .then((inv) => setInventory(inv));
        storeApi.getInv()
            .then((inv) => setFilter([...new Set(inv.map((val) => val.available))]));
    }, []);


    const fetchInventory = async() => {
        const newInv = await storeApi.getInv();
        setInventory(newInv);
    }

    const filterItem = async(category) => {
        const currentInv = await storeApi.getInv();
        const newItem = currentInv.filter((newVal) => {
            return newVal.available === category;
        });
        setInventory(newItem);
    }

    return(
        <Container fluid className="text-center mx-auto">
            <Row>
                <h1>Store</h1>
                <hr />
                <FilterButton items={filterItems} fetchInv={fetchInventory} filterItem={filterItem} />
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

export default Store;