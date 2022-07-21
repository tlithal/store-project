import React from 'react';
import { ItemForm } from './ItemForm';

export const Item = (props) => {
    //Creates an const 'item' using the values from the prop
    const { item } = props;

    //Calls the prop deleteItem function in Store.js
    const deleteItem = (e) => {
        e.preventDefault();
        props.deleteItem(item.id);
    }

    //Calls the prop updateInventory function in Store.js using the values given by the ItemForm.js
    
    const updateInventory = (name, stock, available, price) => {
        let newItem = {name: name, stock: stock, available: available, price: price, id: item.id};
        props.updateInventory(newItem);
    }

    return(
        <div className='card w-75 mb-5 mx-auto border-dark'>
            <div className='card-header text-center'>
                <h2>{item.name}</h2>
                <br></br>
                <button className='btn btn-danger' onClick={deleteItem}>Delete Item</button>
            </div>
            <div className='card-body text-center'>
                    {item.available ? `Amount in stock: ${item.stock}` : ''}
                    {item.available ? <br /> : ''}
                    {item.available ? 'In Stock' : 'Out of Stock'}
                    <br />
                    Price: ${item.price}
            </div>
            <div className='card-footer text-center'>
                <h3>Update Item</h3>
                <ItemForm submit={updateInventory} {...item} />
            </div>
        </div>
    );
}