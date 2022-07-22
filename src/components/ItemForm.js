import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { storeApi } from '../api/StoreApi';

export const ItemForm = (props) => {

    const item = props;

    const [iname, setName] = useState(item.name ? item.name : '');
    const [stock, setStock] = useState(item.stock ? item.stock : '');
    const [isAvailable, setAvailable] = useState(item.available !== undefined ? item.available : false);
    const [price, setPrice] = useState(item.price ? item.price : '');

    //Function to change the price based on what is in the price input field
    const handlePrice = (e) => {
        const float = parseFloat(e.target.value);
        setPrice(float >= 0 ? float : '');
    }

    //Function to change the stock based on what is in the stock input field
    const handleStock = (e) => {
        const int = parseInt(e.target.value);
        setStock(int >= 0 ? int : '');
    }

    const updateInventory = async(item) => {
        await storeApi.putInv(item);
    }

    const createItem = async(item) => {
        await storeApi.postInv(item.name, item.stock, item.available, item.price);
    }

    //Function to send all the data in the form to the submit function called by the prop and resets the values once the data has been sent
    //It was named submit so that the form could be reused in both the Create Item form and the Update Item Form
    const onSubmit = async(e) => {
        e.preventDefault();
        if(iname && stock >= 0 && price >= 0) {
            let fixedPrice = 0;
            if(price !== item.price){
                fixedPrice = price.toFixed(2);
            }else {
                fixedPrice = price;
            }

            if(item.id){
                let newItem = {"name": iname, "stock": stock, "price": fixedPrice, "available": isAvailable, "id": item.id};
                await updateInventory(newItem);
            }else{
                let newItem = {"name": iname, "stock": stock, "price": fixedPrice, "available": isAvailable};
                await createItem(newItem);
            }
            props.handleClose();
        }else {
            console.log('Invalid Input');
         }
    }

    return(
        <div className='container-fluid'>
            <Card className="w-auto my-5 mx-auto border-dark">
                <Card.Header className="text-center">
                    <h1>{iname}</h1>
                </Card.Header>
                <Card.Body className="text-center">
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control className="w-50 mx-auto" type="input" placeholder="Name" value={iname} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control className="w-50 mx-auto" type="number" min='0' placeholder="Stock" onChange={handleStock} value={stock} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control className="w-50 mx-auto" type="number" step="any" min='0' placeholder="Price" onChange={handlePrice} value={price} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                inline
                                className="mx-2 mb-3" 
                                type="checkbox" 
                                id="available" 
                                checked={isAvailable} 
                                onChange={(e) => {setAvailable(e.target.checked)}}
                                value={isAvailable} 
                            />
                            <Form.Label>Is Available for Purchase</Form.Label>
                        </Form.Group>

                        <Button variant="outline-primary" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
};