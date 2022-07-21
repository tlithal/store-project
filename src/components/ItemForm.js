import React, { useState } from 'react';

export const ItemForm = (props) => {
    //Sets all values to a default state and names their React Hook callback functions
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [isAvailable, setAvailable] = useState(false);
    const [price, setPrice] = useState('');

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

    //Function to send all the data in the form to the submit function called by the prop and resets the values once the data has been sent
    //It was named submit so that the form could be reused in both the Create Item form and the Update Item Form
    const onSubmit = (e) => {
        e.preventDefault();
        if(name && stock && price) {
            props.submit(
                name,
                stock,
                isAvailable,
                price.toFixed(2));
            setName('');
            setStock('');
            setAvailable(false);
            setPrice('');
        }else {
            console.log('Invalid Input');
        }
    }

    return(
        <div className='container-fluid'>
            <form onSubmit={onSubmit}>
                <input type='text' className='mb-3' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
                <br></br>
                <input type='number' className='mb-3' min='0' placeholder='Stock' onChange={handleStock} value={stock} />
                <br></br>
                <input type='number' className='mb-3' step='any' min='0' placeholder='Price' onChange={handlePrice} value={price} />
                <br />
                <input type='checkbox' className='mb-3' id='available' checked={isAvailable} onChange={(e) => setAvailable(e.target.checked)} value={isAvailable} />
                <label for='available'>Available for Purchase</label>
                <br></br>
                <button className='btn btn-primary' type='submit'>Submit Item</button>
            </form>
        </div>
    )
};