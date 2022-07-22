import React from 'react';
import { Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { storeApi } from '../api/StoreApi';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import CreateButton from './CreateButton';

function Inventory() {
    const [inventory, setInventory] = useState([]);

    const refresh = () => {
        storeApi.getInv()
            .then((inv) => setInventory(inv));
    }

    useEffect(() => {
        storeApi.getInv()
            .then((inv) => setInventory(inv));
    }, []);

    return (
        <div>
            <Container className="font-link">
                <h1 className="text-center mx-auto">Inventory</h1>
                <hr />
                <Table striped bordered hover variant='dark' responsive="md">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Available</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {inventory.map((inv) => (
                            <tr key={inv.id}>
                                <td>{inv.name}</td>
                                <td>${inv.price}</td>
                                <td>{inv.stock}</td>
                                <td>{(inv.available) ? 'In Stock' : 'Out of Stock'}</td>
                                <td className="text-center mx-auto">
                                    <EditButton {...inv} refresh={refresh}/>
                                </td>
                                <td className="text-center mx-auto">
                                    <DeleteButton refresh={refresh} {...inv} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <Outlet />
                </Table>
                <br />
                <CreateButton refresh={refresh} />
            </Container>
        </div>
    );
}

export default Inventory;