import React from 'react';
import { Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { storeApi } from '../api/StoreApi';

function Inventory() {
    const [inventory, setInventory] = useState([]);

    const deleteItem = async(e, id) => {
        e.preventDefault();
        await storeApi.deleteInv(id);
        storeApi.getInv()
            .then((inv) => setInventory(inv));

    }

    useEffect(() => {
        storeApi.getInv()
            .then((inv) => setInventory(inv));
    }, []);

    return (
        <div>
            <Container>
                <h1 className="text-center mx-auto">Inventory</h1>

                <Table striped bordered hover variant='dark'>
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
                                    <Link to={`${inv.id}`} className="btn btn-secondary">Edit</Link>
                                </td>
                                <td className="text-center mx-auto">
                                    <Button variant="outline-danger" onClick={(e) => { deleteItem(e, inv.id) }}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <Outlet />
                </Table>
            </Container>
        </div>
    );
}

export default Inventory;